import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        favs={props.favs}
        getPhotosByTopic={props.getPhotosByTopic}
      />
      <PhotoList
        isModalOpen={props.isModalOpen}
        photos={props.photos}
        favs={props.favs}
        toggleFav={props.toggleFav}
        toggleModal={props.toggleModal}
        choosePhoto={props.choosePhoto}
      />
    </div>
  );
};

export default HomeRoute;
