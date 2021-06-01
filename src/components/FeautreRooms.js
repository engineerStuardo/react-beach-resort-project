import React from 'react';

import { useRoomContext } from '../context/customHook';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

const FeautreRooms = () => {
  const { featuredRooms: rooms, loading } = useRoomContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='featured-rooms'>
      <Title title='featured rooms' />
      <div className='featured-rooms-center'>
        {rooms.map(room => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default FeautreRooms;
