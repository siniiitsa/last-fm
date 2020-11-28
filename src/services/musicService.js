import axios from 'axios';

const apiKey = 'b3c75e265ecfbff2202a1e22dbc1e72f';
const sharedSecret = '238ed36ca9c7c99594def87364c2871d';
const apiBase = 'http://ws.audioscrobbler.com/2.0/';

const normalizeTrack = (track) => ({
  trackName: track.name,
  artistName: track.artist.name,
  artistId: track.artist.mbid,
  artistUrl: track.artist.url,
  imageUrl: track.image.find((i) => i.size === 'large')['#text'],
});

export const fetchTrackInfo = async (trackName, artistName) => {
  const url = `${apiBase}?method=track.getInfo&api_key=${apiKey}&artist=${artistName}&track=${trackName}&format=json`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const fetchArtistInfo = async (artistName) => {
  const url = `${apiBase}?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`;

  try {
    const response = await axios.get(url);
    console.log(response);
    // return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const fetchTopTracks = async (limit) => {
  const url = `${apiBase}?method=chart.gettoptracks&api_key=${apiKey}&format=json&limit=${limit}`;

  try {
    const response = await axios.get(url);
    const preparedTracks = response.data.tracks.track.map(normalizeTrack);
    console.log(response.data.tracks.track);
    return preparedTracks;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
