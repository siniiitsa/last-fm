import { fetchSearchTracks } from '../services/musicService';

// Action types
const ADD_SEARCHED_TRACKS = 'ADD_SEARCHED_TRACKS';
const TRACKS_SEARCH_UPDATE_REQUEST = 'TRACKS_SEARCH_UPDATE_REQUEST';
const TRACKS_SEARCH_UPDATE_SECCESS = 'TRACKS_SEARCH_UPDATE_SECCESS';
const TRACKS_SEARCH_UPDATE_FAILURE = 'TRACKS_SEARCH_UPDATE_FAILURE';

// Action creators
const addSearchedTracks = (payload) => ({
  type: ADD_SEARCHED_TRACKS,
  payload,
});

const updateSearchedTracksRequest = () => ({
  type: TRACKS_SEARCH_UPDATE_REQUEST,
});

const updateSearhedTracksSuccess = () => ({
  type: TRACKS_SEARCH_UPDATE_SECCESS,
});

const updateSearchedTracksFailure = () => ({
  type: TRACKS_SEARCH_UPDATE_FAILURE,
});

export const requestAddTracks = (searchString, limit) => async (dispatch) => {
  dispatch(updateSearchedTracksRequest());

  try {
    const tracks = await fetchSearchTracks(searchString, limit);
    dispatch(updateSearhedTracksSuccess());
    dispatch(addSearchedTracks({ tracks }));
  } catch (e) {
    console.log(e);
    dispatch(updateSearchedTracksFailure());
  }
};

// Reducer
const initialState = {
  items: [],
  requestStatus: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_SEARCH_UPDATE_REQUEST: {
      return { ...state, requestStatus: 'requested' };
    }
    case TRACKS_SEARCH_UPDATE_SECCESS: {
      return { ...state, requestStatus: 'finished' };
    }
    case TRACKS_SEARCH_UPDATE_FAILURE: {
      return { ...state, requestStatus: 'failed' };
    }
    case ADD_SEARCHED_TRACKS: {
      const { tracks } = action.payload;
      return { ...state, items: tracks };
    }
    default:
      return state;
  }
};

export default searchReducer;

// Selectors
export const selectIsLoading = (state) =>
  state.tracks.requestStatus === 'requested';
