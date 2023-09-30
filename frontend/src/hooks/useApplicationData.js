import { useReducer, useState } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};


function reducer(state, action) {
  switch (action.type) {

    // Update 'favs' state to include the photo
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favs: [...state.favs, action.photoId] };

    // Update 'favs' state without the photo
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favs: state.favs.filter((photoId) => photoId !== action.photoId) };

    // Update chosenPhoto state with the clicked photo
    case ACTIONS.SELECT_PHOTO:
      return { ...state, chosenPhoto: action.photo };

    // Update isModalOpen state to open/close the modal
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: !state.isModalOpen };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}



// Create a custom hooks to include all the states and function that modify states for the whole application
const useApplicationData = () => {

  // Create "state" variable that contains all states
  const [state, dispatch] = useReducer(reducer,
    {
      isModalOpen: false,
      chosenPhoto: null,
      favs: [],
    }
  );

  // Function to open/close the modal
  const toggleModal = () => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS
    });
  };

  // Function to set the clicked photo
  const choosePhoto = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      photo
    });
  };

  // Function to add/remove a photo to/from favourires (favs state)
  const toggleFav = (photoId) => {
    dispatch({
      type: state.favs.includes(photoId)
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      photoId
    });

  };

  return {
    state,
    toggleModal,
    choosePhoto,
    toggleFav
  };

};

export default useApplicationData;