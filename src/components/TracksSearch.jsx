import React from 'react';
import { useSelector } from 'react-redux';
import { fetchSearchTracks } from '../services/musicService';

const TracksSearch = () => {
  fetchSearchTracks('DeLieve', 10).then(console.log);
  return <h1>Track Search</h1>;
};

export default TracksSearch;
