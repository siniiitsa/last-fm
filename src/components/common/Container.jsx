import React from 'react';

const Container = ({ children }) => {
  const containerStyles = {
    margin: '0 auto',
    maxWidth: '1140px',
  };

  return <div style={containerStyles}>{children}</div>;
};

export default Container;
