import { CarsList } from 'components';
import React from 'react';

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div>
      <CarsList
        cars={favorites}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default Favorites;
