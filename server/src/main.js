import fs from 'fs';
import axios from 'axios';
import parseLinks from './parsers/parseLinks';
import getPosts from './getPosts';
import { parseLinkParams } from './configs';

const saveResult = (json) => {
  
  fs.writeFile('result.json', json, (err) => {
    err && console.error(err);
  })
}

const Links = parseLinks(parseLinkParams.ykt);

Links.then((links) => {
  getPosts(links)
    .then(posts => {
      saveResult(JSON.stringify(posts));
      axios.post('https://60343e5a843b150017932513.mockapi.io/posts', JSON.stringify(posts));
    })
    .catch(error => console.error(error));
})