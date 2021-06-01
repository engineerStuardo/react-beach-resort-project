import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeautreRooms from '../components/FeautreRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title='luxorious rooms' subtitle='deluxe rooms starting at$299'>
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeautreRooms />
    </>
  );
};

export default Home;
