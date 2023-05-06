import React from 'react';

import './listItem.scss';

const ListItem = ({ data }) => {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </section>
  );
};

export default ListItem;
