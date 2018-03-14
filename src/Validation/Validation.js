import React from 'react';

export default props => {
  if (props.length < 5) {
    return <p>Text too short</p>;
  }

  return <p>Text long enough</p>;
};
