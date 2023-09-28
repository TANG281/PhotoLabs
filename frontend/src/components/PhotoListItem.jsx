import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className='photo-list__item'>
      <PhotoFavButton key={props.id} photoId={props.id} favs={props.favs} toggleFav={props.toggleFav}/>
      <img className='photo-list__image' src={props.imageSource} />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={props.profile} />
        <div className='photo-list__user-info'>
          {props.username}
          <div className='photo-list__user-location'>{`${props.city}, ${props.country}`}</div>
        </div>

      </div>
    </div>
  );
};

export default PhotoListItem;
