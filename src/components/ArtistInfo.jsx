import React from 'react';

const ArtistInfo = ({ match }) => {
  const { name } = match.params;
  return <h1>Artist Info {name}</h1>;
};

export default ArtistInfo;
