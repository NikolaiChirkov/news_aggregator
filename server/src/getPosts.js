import { newsCls } from './configs';
import parseNews from './parsers/parseNews';

const delay = ms => {r => setTimeout(r,ms)} 

const getPosts = async(links) => {
  let posts = [];
  let counter = links.length;

  for (let i = 0; i < counter; i++) {
    const post = await parseNews(links[i], newsCls.ykt).then(post => post);
    
    posts.push(post);

    await delay(1000);
  }
  
  return new Promise((resolve, reject) => {
    if (!posts.length) {
      reject(new Error('Empty posts'));
    }

    resolve(posts);
  });
}

export default getPosts;