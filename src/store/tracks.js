import { fetchTopTracks } from '../services/musicService';

// Action types
const ADD_TRACKS = 'ADD_TRACKS';

// Action creators
const addTracks = (payload) => ({
  type: ADD_TRACKS,
  payload,
});

export const requestAddTracks = (limit) => async (dispatch) => {
  try {
    const tracks = await fetchTopTracks(limit);
    dispatch(addTracks({ tracks }));
  } catch (e) {
    console.log(e);
  }
};

// Reducer
const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TRACKS: {
      const { tracks } = action.payload;
      return [...tracks];
    }

    default:
      return state;
  }
};

export default tracksReducer;
