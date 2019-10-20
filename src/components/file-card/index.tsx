/**
 * 显示一个文件的信息
 */
import React from 'react';
import './index.css';

interface IFile {
  name: string; 
  path: string;
}

const FileCard = ({ file }: { file: IFile }) => {

  return (
    <section className="file-card">
      <div className="file-name">{file.name.slice(0, 100)}</div>
      <div className="file-path">{file.path.slice(0, 100)}</div>
    </section>
  )
}

export default FileCard;

