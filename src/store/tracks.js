// Action types
const INIT_TRACKS = 'INIT_SONGS';

// Action creators
export const initTracks = (tracks) => ({
  type: INIT_TRACKS,
  payload: { tracks },
});

// Reducer
const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_TRACKS: {
      const { tracks } = action.payload;
      return [...tracks];
    }

    default:
      return state;
  }
};

export default tracksReducer;
