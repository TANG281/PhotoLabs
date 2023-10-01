import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  let isFavPhotoExist = false;
  if (props.favs.length > 0) isFavPhotoExist = true;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        getPhotosByTopic={props.getPhotosByTopic}
      />
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
      />
    </div>
  );
};

export default TopNavigation;