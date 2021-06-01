import { useContext } from 'react';

import { RoomContext } from './context';

export const useRoomContext = () => {
  return useContext(RoomContext);
};
