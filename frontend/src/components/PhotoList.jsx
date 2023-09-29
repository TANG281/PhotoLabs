import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = props.photos.map((data) =>
    <PhotoListItem
      key={data.id}
      id={data.id}
      city={data.location.city}
      country={data.location.country}
      imageSource={data.urls.regular}
      username={data.user.username}
      profile={data.user.profile}
      favs={props.favs}
      toggleFav={props.toggleFav}
      toggleModal={props.toggleModal}
      choosePhoto={props.choosePhoto }
      photo={data}
      isModalOpen={props.isModalOpen}
    />
  );
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );
};

export default PhotoList;
