import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const [favs, setFavs] = useState([]);

  const toggleFav = (photoId) => {
    const newFavs = [...favs];
    favs.includes(photoId) ? newFavs.splice(favs.indexOf(photoId),1) && setFavs(newFavs) : newFavs.push(photoId) && setFavs(newFavs)
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favs={favs} />
      <PhotoList photos={props.photos} favs={favs} toggleFav={toggleFav} />
    </div>
  );
};

export default HomeRoute;
