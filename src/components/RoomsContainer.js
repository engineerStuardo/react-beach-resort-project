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
    <div>
      hello from roomscontainer
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
