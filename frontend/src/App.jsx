import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, toggleModal, choosePhoto, toggleFav } = useApplicationData();
  console.log(state);
  const { isModalOpen, chosenPhoto, favs } = state;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(!isModalOpen);

  // const [chosenPhoto, setChosenPhoto] = useState({});
  // const choosePhoto = (photo) => setChosenPhoto(photo);

  // const [favs, setFavs] = useState([]);
  // const toggleFav = (photoId) => {
  //   const newFavs = [...favs];
  //   favs.includes(photoId) ? newFavs.splice(favs.indexOf(photoId), 1) && setFavs(newFavs) : newFavs.push(photoId) && setFavs(newFavs);
  // };


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        choosePhoto={choosePhoto}
        favs={favs}
        toggleFav={toggleFav}
      />
      {isModalOpen &&
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
