import React, { createContext, useState, useEffect } from 'react';

import items from '../data';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('all');
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast] = useState(false);
  const [pets] = useState(false);

  useEffect(() => {
    const rooms = formatData(items);
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
    const value = e.type === 'checkbox' ? target.checked : target.value;
    setType(value);
  };

  const filterRooms = () => {
    let tmpRooms = [...rooms];
    if (type !== 'all') {
      tmpRooms = tmpRooms.filter(i => i.type === type);
    }
    return tmpRooms;
  };

  useEffect(() => {
    setSortedRooms(filterRooms());
  }, [type, rooms]);

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
