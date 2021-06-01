import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { StyledHero } from '../components/StyledHero';
import { useRoomContext } from '../context/customHook';

const SingleRoom = () => {
  const { getRoom } = useRoomContext();
  const { slug } = useParams();
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className='error'>
        <h3>no such room could be found...</h3>
        <Link to='/rooms' className='btn-primary'>
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  return (
    <StyledHero img={images[0]}>
      <Banner title={`${name} room`}>
        <Link to='/rooms' className='btn-primary'>
          Back to rooms
        </Link>
      </Banner>
    </StyledHero>
  );
};

export default SingleRoom;
