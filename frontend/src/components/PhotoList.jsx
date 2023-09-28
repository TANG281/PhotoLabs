import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((data) =>
    <PhotoListItem
      key={data.id}
      city={data.location.city}
      country={data.location.country}
      imageSource={data.urls.regular}
      username={data.user.username}
      profile={data.user.profile}
      switchFavExistance={props.switchFavExistance}
    />
  );
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
