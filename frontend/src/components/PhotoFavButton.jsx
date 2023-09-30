import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton({ favs, photoId, toggleFav }) {

  const colorCheck = favs.includes(photoId);

  return (
    <div onClick={() => toggleFav(photoId)} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={colorCheck} />
      </div>
    </div>
  );
}

export default PhotoFavButton;