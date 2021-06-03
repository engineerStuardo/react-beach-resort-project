import React from 'react';

import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from '../components/Loading';
import { useRoomContext } from '../context/customHook';

const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useRoomContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
