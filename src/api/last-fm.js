import axios from 'axios';
import { addCorsProxy } from '../cors-proxy';

const apiKey = 'b3c75e265ecfbff2202a1e22dbc1e72f';
const sharedSecret = '238ed36ca9c7c99594def87364c2871d';
const apiBase = 'http://ws.audioscrobbler.com/2.0/';

export const getTopSongs = async (limit) => {
  const url = `${apiBase}?method=chart.gettoptracks&api_key=${apiKey}&format=json&limit=${limit}`;
  const response = await axios.get(addCorsProxy(url));
  return response.data.tracks.track;
};
