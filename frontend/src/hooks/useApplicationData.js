import { useState } from "react";

// Create a custom hooks to include all the states and function that modify states for the whole application
const useApplicationData = () => {

  // Create "state" variable that contains all states
  const [state, setState] = useState({
    isModalOpen: false,
    chosenPhoto: null,
    favs: [],
  });

  // Function to open/close the modal
  const toggleModal = () => setState((prev) => {
    return { ...prev, isModalOpen: !prev.isModalOpen };
  });

  // Function to set the clicked photo
  const choosePhoto = (photo) => setState((prev) => {
    return { ...prev, chosenPhoto: photo };
  });

  // Function to add/remove a photo to/from favourires (favs state)
  const toggleFav = (photoId) => {
    const newFavs = [...state.favs];
    state.favs.includes(photoId) ? newFavs.splice(state.favs.indexOf(photoId), 1) && setState({ ...state, favs: newFavs }) : newFavs.push(photoId) && setState({ ...state, favs: newFavs });
  };

  return {
    state,
    toggleModal,
    choosePhoto,
    toggleFav
  };

};

export default useApplicationData;