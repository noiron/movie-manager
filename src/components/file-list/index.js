/**
 * 显示文件列表
 */
import React from 'react';
import FileCard from '../file-card';

const FileList = ({ list }) => {

  return (
    <section>
      {
        list.map(file => (
          <FileCard file={file} key={file.path} />
        ))
      }
    </section>
  )
}

export default FileList;

