import axios from 'axios';
import { addCorsProxy } from '../cors-proxy';

const apiKey = 'b3c75e265ecfbff2202a1e22dbc1e72f';
const sharedSecret = '238ed36ca9c7c99594def87364c2871d';
const apiBase = 'http://ws.audioscrobbler.com/2.0/';

const normalizeTrack = (track) => ({
  trackName: track.name,
  artistName: track.artist.name,
  artistUrl: track.artist.url,
  imageUrl: track.image.find((i) => i.size === 'large')['#text'],
});

const getTrackInfo = async (trackName, artistName) => {
  const url = `${apiBase}?method=track.getInfo&api_key=${apiKey}&artist=${artistName}&track=${trackName}&format=json`;

  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const fetchTopTracks = async (limit) => {
  const url = `${apiBase}?method=chart.gettoptracks&api_key=${apiKey}&format=json&limit=${limit}`;

  try {
    const response = await axios.get(addCorsProxy(url));
    const preparedTracks = response.data.tracks.track.map(normalizeTrack);
    return preparedTracks;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
