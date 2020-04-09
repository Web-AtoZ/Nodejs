import React from 'react';

const BoardDetailTemplate = ({match}) => {
  return(
    <h2>{match.params.id}</h2>
  );
}

export default BoardDetailTemplate;