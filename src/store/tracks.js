import { fetchTopTracks } from '../services/musicService';

// Action types
const ADD_TRACKS = 'ADD_TRACKS';
const TRACKS_UPDATE_REQUEST = 'UPDATE_TRACKS_REQUEST';
const TRACKS_UPDATE_SECCESS = 'UPDATE_TRACKS_SECCESS';
const TRACKS_UPDATE_FAILURE = 'UPDATE_TRACKS_FAILURE';

// Action creators
const addTracks = (payload) => ({
  type: ADD_TRACKS,
  payload,
});

const updateTracksRequest = () => ({ type: TRACKS_UPDATE_REQUEST });

const updateTracksSuccess = () => ({ type: TRACKS_UPDATE_SECCESS });

const updateTracksFailure = () => ({ type: TRACKS_UPDATE_FAILURE });

export const requestAddTracks = (limit) => async (dispatch) => {
  dispatch(updateTracksRequest());

  try {
    const tracks = await fetchTopTracks(limit);
    dispatch(addTracks({ tracks }));
    dispatch(updateTracksSuccess());
  } catch (e) {
    console.log(e);
    dispatch(updateTracksFailure());
  }
};

// Reducer
const initialState = {
  items: [],
  requestStatus: null,
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_UPDATE_REQUEST: {
      return { ...state, requestStatus: 'requested' };
    }
    case TRACKS_UPDATE_SECCESS: {
      return { ...state, requestStatus: 'finished' };
    }
    case TRACKS_UPDATE_FAILURE: {
      return { ...state, requestStatus: 'failed' };
    }
    case ADD_TRACKS: {
      const { tracks } = action.payload;
      return { ...state, items: tracks };
    }
    default:
      return state;
  }
};

export default tracksReducer;

// Selectors
export const selectIsLoading = (state) =>
  state.tracks.requestStatus === 'requested';
