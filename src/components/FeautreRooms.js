import React from 'react';

import { useRoomContext } from '../context/customHook';

const FeautreRooms = () => {
  const { featuredRooms: rooms } = useRoomContext();
  console.log(rooms);

  return <div>hello from feautre rooms</div>;
};

export default FeautreRooms;
