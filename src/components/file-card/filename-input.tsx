import React, { useState } from 'react';
const fs = window.require('fs');

interface IProps {
  filename: string;
  path: string;
  hideRename: () => void;
}

const FilenameInput = (props: IProps) => {
  const [newFilename, setNewFilename] = useState(props.filename);

  function inputNewFilename(e) {
    setNewFilename(e.target.value);
  }

  function handleKeyUp(e) {
    const { path } = props;
    // 点击回车键后修改文件名
    if (e.keyCode === 13) {
      const arr = path.split('/');
      arr.splice(arr.length - 1, 1, newFilename);
      const newPath = arr.join('/');
      fs.renameSync(path, newPath);
      props.hideRename();
    }
  }

  return (
    <input
      type="text"
      value={newFilename} 
      onChange={inputNewFilename}
      onKeyUp={handleKeyUp}
      style={{ width: 180}}
    />
  )
}

export default FilenameInput;
