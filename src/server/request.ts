import axios from 'axios';
import config from '../config';
const path = require('path');
// const fs = require('fs');

const createInstance = req => {
  return {
    get: url => {
      const dataPath = path.join(process.cwd(), 'public', url);
      //const data = fs.readFileSync(`${dataPath}`, 'utf-8');
      // return Promise.resolve({
      //   data: JSON.parse(data)
      // })
    }
  }
}

export default createInstance;