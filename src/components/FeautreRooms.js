import React from 'react';

import { useRoomContext } from '../context/customHook';

const FeautreRooms = () => {
  const { greeting, name } = useRoomContext();

  return <div>hello from feautre rooms</div>;
};

export default FeautreRooms;
