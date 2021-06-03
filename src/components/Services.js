import React, { useState } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

const Services = () => {
  // eslint-disable-next-line
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: 'Free Cocktails',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam, quas tempora obcaecati voluptas non.',
    },
    {
      icon: <FaHiking />,
      title: 'Endless Hiking',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam, quas tempora obcaecati voluptas non.',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Strongest Beer',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam, quas tempora obcaecati voluptas non.',
    },
    {
      icon: <FaBeer />,
      title: 'Free cocktails',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam, quas tempora obcaecati voluptas non.',
    },
  ]);

  return (
    <section className='services'>
      <Title title='services' />
      <div className='services-center'>
        {services.map((service, index) => {
          return (
            <article key={index} className='service'>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
