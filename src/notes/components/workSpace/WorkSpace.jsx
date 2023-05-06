import React from 'react';

const WorkSpace = ({ noteData }) => {
  return (
    <div>
      <h1>{noteData.title}</h1>
      <p>{noteData.description}</p>
    </div>
  );
};

export default WorkSpace;
