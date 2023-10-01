import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
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

    // Update photoData state when open the app
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.photoData };

    // Update topicData state when open the app
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.topicData };

    // Update photoData state when click on a specific topic on the Nav bar
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.photoDataByTopic };

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
      photoData: [],
      topicData: []
    }
  );

  useEffect(() => {

    // Fetch photo data from backend server
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then(data => dispatch({
        type: ACTIONS.SET_PHOTO_DATA,
        photoData: data
      }));

    // Fetch topic data from backend server
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then(data => dispatch({
        type: ACTIONS.SET_TOPIC_DATA,
        topicData: data
      }));

  }, []);

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

  // Function to filter photos by topic
  const getPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => dispatch({
        type: ACTIONS.GET_PHOTOS_BY_TOPICS,
        photoDataByTopic: data
      }));
  };

  return {
    state,
    toggleModal,
    choosePhoto,
    toggleFav,
    getPhotosByTopic
  };

};

export default useApplicationData;