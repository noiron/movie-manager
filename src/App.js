import React from 'react';
import './App.css';
import { traverseFolder } from './file';
import FileList from './components/file-list';

// const electron = window.require('electron').remote
// const { dialog } = electron;

const path = require('path');

const folder1 = '/Users/wukai/Movies';
const folder2 = '/Users/wukai/Downloads';

function App() {
  const list1 = [];
  traverseFolder(path.resolve(folder1), list1);

  const list2 = [];
  traverseFolder(path.resolve(folder2), list2);


  return (
    <div className="App">
      <p>{folder1}</p>
      <FileList list={list1} />

      <p>{folder2}</p>
      <FileList list={list2} />
    </div>
  );
}

export default App;
