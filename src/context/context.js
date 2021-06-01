import React, { createContext, useState } from 'react';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    greeting: 'hello',
    name: 'italo',
  });

  return (
    <RoomContext.Provider value={{ ...state }}>{children}</RoomContext.Provider>
  );
};
