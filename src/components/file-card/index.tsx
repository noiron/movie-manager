/**
 * 显示一个文件的信息
 */
import React, { useState } from 'react';
import { Button } from '../button';
import FilenameInput from './filename-input';
import './index.css';

export interface IFile {
  name: string; 
  path: string;
}

const FileCard = ({ file }: { file: IFile }) => {

  const [showInput, setShowInput] = useState(false);

  function showRename() {
    setShowInput(true);
  }

  return (
    <section className="file-card">
      <div className="file-name">
        {file.name.slice(0, 100)}
        <Button text="改名" onClick={() => showRename()} />
        {showInput && 
          <FilenameInput
            hideRename={() => setShowInput(false)}
            filename={file.name}
            path={file.path}
          />}
      </div>
      <div className="file-path">{file.path.slice(0, 100)}</div>

    </section>
  )
}

export default FileCard;

