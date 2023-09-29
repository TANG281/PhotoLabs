import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ chosenPhoto, toggleModal, favs, toggleFav, choosePhoto }) => {

  const { id, urls, user, location, similar_photos } = chosenPhoto;

  const similarPhotoArray = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">

      {/* Close button */}
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>

        {/* Display photo*/}
        <PhotoFavButton
          photoId={id}
          favs={favs}
          toggleFav={toggleFav}
        />
        <img className='photo-details-modal__image' src={urls.full} />

        {/* Display user details */}
        <div className='photo-list__user-details'>
          <img className='photo-list__user-profile' src={user.profile} />

          <div className='photo-list__user-info'>
            {user.username}
            <div className='photo-list__user-location'>{location.city}, {location.country}</div>
          </div>
        </div>

        {/* Display similar photos */}
        <h2 className='photo-details-modal__header'>Similar photos</h2>
      </div>
      <div className='photo-detail-modal__images'>
        <div className="photo-list">
          <PhotoList
            photos={similarPhotoArray}
            favs={favs}
            toggleFav={toggleFav}
          />
        </div>
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
