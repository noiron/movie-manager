

/**
 * 检查文件是否符合给定的后缀名
 */
export function fileSuffixFilter(filename, suffixs) {
  const extension = filename.split('.').pop();

  if (extension === suffixs) return true;

  if (Array.isArray(suffixs) && suffixs.indexOf(extension) >= 0) {
    return true;
  }

  return false;
}