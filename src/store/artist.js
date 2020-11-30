import { fetchArtist } from '../services/musicService';

// Action types
const ADD_ARTIST = 'ADD_ARTIST';
const ARTIST_UPDATE_REQUEST = 'UPDATE_ARTIST_REQUEST';
const ARTIST_UPDATE_SECCESS = 'UPDATE_ARTIST_SECCESS';
const ARTIST_UPDATE_FAILURE = 'UPDATE_ARTIST_FAILURE';

// Action creators
const addArtist = (payload) => ({
  type: ADD_ARTIST,
  payload,
});

const updateArtistRequest = () => ({ type: ARTIST_UPDATE_REQUEST });

const updateArtistSuccess = () => ({ type: ARTIST_UPDATE_SECCESS });

const updateArtistFailure = () => ({ type: ARTIST_UPDATE_FAILURE });

export const requestArtist = (artistName) => async (dispatch) => {
  dispatch(updateArtistRequest());

  try {
    const artist = await fetchArtist(artistName);
    dispatch(updateArtistSuccess());
    dispatch(addArtist({ artist }));
  } catch (e) {
    console.log(e);
    dispatch(updateArtistFailure());
  }
};

// Reducer
const initialState = {
  data: { tags: [] },
  requestStatus: null,
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTIST: {
      const { artist } = action.payload;
      return { ...state, data: artist };
    }
    case ARTIST_UPDATE_REQUEST: {
      return { ...state, requestStatus: 'requested' };
    }
    case ARTIST_UPDATE_SECCESS: {
      return { ...state, requestStatus: 'finished' };
    }
    case ARTIST_UPDATE_FAILURE: {
      return { ...state, requestStatus: 'failed' };
    }
    default:
      return state;
  }
};

export default artistReducer;

// Selectors
export const selectIsLoading = (state) =>
  state.artist.requestStatus === 'requested';
