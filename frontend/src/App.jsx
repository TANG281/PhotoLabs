import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const { state, toggleModal, choosePhoto, toggleFav, getPhotosByTopic } = useApplicationData();
  const { isModalOpen, chosenPhoto, favs, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        choosePhoto={choosePhoto}
        favs={favs}
        toggleFav={toggleFav}
        getPhotosByTopic={getPhotosByTopic}
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
