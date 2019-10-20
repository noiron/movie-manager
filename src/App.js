import React from 'react';
import './App.css';
import { traverseFolder } from './file';
import FileList from './components/file-list';
import { fileSuffixFilter } from './utils';

// const electron = window.require('electron').remote
// const { dialog } = electron;

const path = require('path');


const folders = [
  '/Users/wukai/Movies',
  '/Users/wukai/Downloads',
];
const movieSuffixs = ['rmvb', 'avi', 'mkv', 'mp4'];

function App() {

  const lists = [];
  folders.forEach(folder => {
    const list = [];
    traverseFolder(path.resolve(folder), list);
    lists.push(list.filter((file) => fileSuffixFilter(file.name, movieSuffixs)));
  });

  return (
    <div className="App">
      {
        folders.map((folder, index) => {
          return (
            <div>
            <p>{folder}</p>
            <FileList list={lists[index]} />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
