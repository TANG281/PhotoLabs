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
  const { isModalOpen, chosenPhoto, favs } = state;

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
