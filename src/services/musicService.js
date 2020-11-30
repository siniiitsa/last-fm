import axios from 'axios';

const apiKey = 'b3c75e265ecfbff2202a1e22dbc1e72f';
const apiBase = 'http://ws.audioscrobbler.com/2.0/';

const normalizeTrack = (track) => ({
  trackName: track.name,
  artistName: track.artist.name,
  artistUrl: track.artist.url,
  imageUrl: track.image.find((i) => i.size === 'large')['#text'],
});

const normalizeArtist = (artist) => {
  return {
    about: artist.bio.summary.replace(/<a.*$/gm, '').trim() + '...',
    artistName: artist.name,
    artistPage: artist.url,
    imageUrl: artist.image.find((i) => i.size === 'mega')['#text'],
    tags: artist.tags.tag,
  };
};

const normalizeSearchedTrack = (track) => ({
  trackName: track.name,
  artistName: track.artist,
});

export const fetchArtist = async (artistName) => {
  const url = `${apiBase}?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`;

  try {
    const response = await axios.get(url);
    const { artist } = response.data;
    return normalizeArtist(artist);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const fetchSearchTracks = async (searchString, limit) => {
  const url = `${apiBase}?method=track.search&track=${searchString}&limit=${limit}&api_key=${apiKey}&format=json`;

  try {
    const response = await axios.get(url);
    const tracks = response.data.results.trackmatches.track;
    return tracks.map(normalizeSearchedTrack);
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
    return preparedTracks;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
