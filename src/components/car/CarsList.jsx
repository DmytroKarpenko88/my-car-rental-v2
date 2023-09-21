import React from 'react';
import { CarItem } from './CarItem';

export const CarsList = ({ cars, favorites, toggleFavorite }) => {

  return (
    <ul className="mt-[50px] mb-[100px] flex flex-wrap gap-x-[29px] gap-y-[50px] w-[1184px]">
      {cars.length > 0 &&
        cars?.map(car => (
          <li key={car.id}>
            <CarItem
              car={car}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites?.some(fav => fav.id === car.id)}
            />
          </li>
        ))}
    </ul>
  );
};
