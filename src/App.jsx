import * as React from 'react';
import { Provider } from 'react-redux';

import Header from './notes/components/header/Header';
import Sidebar from './notes/components/sidebar/Sidebar';
import WorkSpace from './notes/components/workSpace/WorkSpace';
import './app.scss';
const listNotes = [
  { id: 1, title: 'Title 1', description: 'test1' },
  { id: 2, title: 'Title 2', description: 'test2' },
  { id: 3, title: 'Title 3', description: 'test3' }
];
const App = () => {
  return (
    <>
      <Header />
      <div className="notes-content">
        <Sidebar listNotes={listNotes}></Sidebar>
        <WorkSpace noteData={listNotes[0]}></WorkSpace>
      </div>
    </>
  );
};

export default App;
