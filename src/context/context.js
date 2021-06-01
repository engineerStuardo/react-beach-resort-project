import React, { createContext, useState, useEffect } from 'react';

import items from '../data';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);
    setState({ rooms, featuredRooms, sortedRooms: rooms, loading: false });
  }, []);

  const formatData = items => {
    return items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      return { ...item.fields, images, id };
    });
  };

  return (
    <RoomContext.Provider value={{ ...state }}>{children}</RoomContext.Provider>
  );
};
