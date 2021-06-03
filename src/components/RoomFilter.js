import React from 'react';

import { useRoomContext } from '../context/customHook';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(i => i[value]))];
};

const RoomFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useRoomContext();

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types.map((i, index) => (
              <option value={i} key={index}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
