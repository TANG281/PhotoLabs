import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  const [chosenPhoto, setChosenPhoto] = useState({});
  const choosePhoto = (photo) => setChosenPhoto(photo);

  const [favs, setFavs] = useState([]);
  const toggleFav = (photoId) => {
    const newFavs = [...favs];
    favs.includes(photoId) ? newFavs.splice(favs.indexOf(photoId), 1) && setFavs(newFavs) : newFavs.push(photoId) && setFavs(newFavs);
  };


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        isOpen={isOpen}
        toggleModal={toggleModal}
        choosePhoto={choosePhoto}
        favs={favs}
        toggleFav={toggleFav}
      />
      {isOpen &&
        <PhotoDetailsModal
          toggleModal={toggleModal}
          chosenPhoto={chosenPhoto}
          choosePhoto={choosePhoto}
          favs={favs}
          toggleFav={toggleFav}
        />}
    </div>
  );
};

export default App;
