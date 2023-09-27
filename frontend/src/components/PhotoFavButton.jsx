import React, { useCallback, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton() {

  const [Fav, setFav] = useState(false);

  const switchFav = () => setFav(!Fav);

  return (
    <div onClick={switchFav} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={Fav}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;