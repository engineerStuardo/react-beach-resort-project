import React, { createContext, useState, useEffect } from 'react';
// eslint-disable-next-line
import items from '../data';
import Client from '../contenful';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('all');
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  // eslint-disable-next-line
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  const getData = async () => {
    try {
      const response = await Client.getEntries({
        content_type: 'beachResortRoom',
      });
      const rooms = formatData(response.items);
      const featuredRooms = rooms.filter(room => room.featured === true);
      const maxPrice = Math.max(...rooms.map(i => i.price));
      const maxSize = Math.max(...rooms.map(i => i.size));
      setRooms(rooms);
      setFeaturedRooms(featuredRooms);
      setSortedRooms(rooms);
      setLoading(false);
      setPrice(maxPrice);
      setMaxPrice(maxPrice);
      setMaxSize(maxSize);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const formatData = items => {
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      return { ...item.fields, images, id };
    });
  };

  const getRoom = slug => {
    const tmpRooms = [...rooms];
    const room = tmpRooms.find(room => room.slug === slug);
    return room;
  };

  const handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;
    if (name === 'type') setType(value);
    if (name === 'capacity') setCapacity(value);
    if (name === 'price') setPrice(value);
    if (name === 'minSize') setMinSize(value);
    if (name === 'maxSize') setMaxSize(value);
    if (name === 'breakfast') setBreakfast(value);
    if (name === 'pets') setPets(value);
  };

  const filterRooms = () => {
    let tmpRooms = [...rooms];
    let capacityNumber = parseInt(capacity);
    let priceNumber = parseInt(price);
    //filter by type
    if (type !== 'all') {
      tmpRooms = tmpRooms.filter(i => i.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      tmpRooms = tmpRooms.filter(i => i.capacity >= capacityNumber);
    }
    //filter by price
    tmpRooms = tmpRooms.filter(i => i.price <= priceNumber);
    //filter by size
    tmpRooms = tmpRooms.filter(i => i.size >= minSize && i.size <= maxSize);
    //filter by breakfast
    if (breakfast) tmpRooms = tmpRooms.filter(i => i.breakfast === true);
    //filter by pets
    if (pets) tmpRooms = tmpRooms.filter(i => i.pets === true);

    return tmpRooms;
  };

  useEffect(() => {
    setSortedRooms(filterRooms());
    // eslint-disable-next-line
  }, [type, rooms, capacity, price, minSize, maxSize, breakfast, pets]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        getRoom,
        handleChange,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
