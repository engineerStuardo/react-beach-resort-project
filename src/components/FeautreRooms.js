import React from 'react';

import { useRoomContext } from '../context/customHook';
import Loading from './Loading';
import Room from './Room';

const FeautreRooms = () => {
  const { featuredRooms: rooms } = useRoomContext();
  console.log(rooms);

  return (
    <div>
      hello from feautre rooms
      <Room />
      <Loading />
    </div>
  );
};

export default FeautreRooms;
