const fs = window.require('fs');
const path = window.require('path');


export function traverseFolder(filePath, fileList = []) {

  const list = fs.readdirSync(filePath);

  list.forEach(filename => {
    // 处理隐藏文件
    if (filename.startsWith('.')) {
      return;
    }

    const absolutePath = path.join(filePath, filename);

    try {
      const stats = fs.statSync(absolutePath);
      const isFile = stats.isFile();
      const isDir = stats.isDirectory();
      if (isFile) {
        fileList.push({ name: filename, path: absolutePath });
      }
      if (isDir) {
        traverseFolder(absolutePath, fileList);
      }

    } catch (err) {
      console.log(err);
    }

  })
  return fileList;
}