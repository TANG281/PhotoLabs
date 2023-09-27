import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from 'components/PhotoFavButton';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const listOfPhotos = [];
for (let i = 0; i < 3; i++) {
  listOfPhotos.push(
      <PhotoListItem
        key={sampleDataForPhotoListItem.id}
        city={sampleDataForPhotoListItem.location.city}
        country={sampleDataForPhotoListItem.location.country}
        imageSource={sampleDataForPhotoListItem.imageSource}
        username={sampleDataForPhotoListItem.username}
        profile={sampleDataForPhotoListItem.profile}
      />
  );
}

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">

      {listOfPhotos}
    </div>
  );
};

export default App;
