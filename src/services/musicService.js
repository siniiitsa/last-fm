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

const normalizeArtist = (artist) => {
  return {
    about: artist.bio.summary.replace(/<a.*$/gm, '').trim() + '...',
    artistName: artist.name,
    artistPage: artist.url,
    imageUrl: artist.image.find((i) => i.size === 'mega')['#text'],
    tags: artist.tags.tag,
  };
};

export const fetchArtist = async (artistName) => {
  const url = `${apiBase}?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`;

  try {
    const response = await axios.get(url);
    const { artist } = response.data;
    console.log(artist);
    return normalizeArtist(artist);
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
