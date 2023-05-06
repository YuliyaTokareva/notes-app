import React from 'react';
import ListItem from '../listItem/ListItem';
import './sidebar.scss';
const Sidebar = ({ listNotes }) => {
  return (
    <aside className="notes-sidebar">
      {listNotes.map((el) => (
        <ListItem key={el.id} data={el} />
      ))}
    </aside>
  );
};

export default Sidebar;
