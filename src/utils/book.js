import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import { Platform } from 'react-native';
// select files
export const selectFiles = () => new Promise((resolve, reject) => {
  DocumentPicker
    .pick({
      type: Platform.OS == 'ios' ? 'public.plain-text' : 'text/plain',
      allowMultiSelection: true
    })
    .then(files => {
      resolve(files);
    })
    .catch(err => {
      reject('Document picker closed');
    })
})

// read file content
export const readFile = (file) => new Promise((resolve, reject) => {
  RNFS.readFile(Platform.OS == 'ios' ? decodeURIComponent(file.uri) : file.uri)
  .then(file => {

    resolve({
      title: getBookTitle(file),
      pages: generatePages(file)
    })
  })
  .catch(err => {
    reject('Unable to read file');
  })
})

// get book title
export const getBookTitle = (file) => {
  return file.split("\n")[0];
}


// generate pages
export const generatePages = (file) => {
  let pages = [];

  const charLimit = 1300; // limit of characters every page
  var charRem = file.length; // charater remainder
  var page = 0;

  while (charRem != 0) {
    if (charRem < charLimit) {
      charRem = 0;
    }else {
      charRem = charRem - charLimit;
    }
    
    // Slice and Push per page
    pages.push(file.slice((page * charLimit), page * charLimit + charLimit + 1))
    page++;
  }

  return pages;
}