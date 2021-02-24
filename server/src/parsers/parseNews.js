const unirest = require('unirest');
const cheerio = require('cheerio');

const parseNews = (url, { parseTitle, parseImage, parseText, parseViews }) => {

  return new Promise((resolve, reject) => {
    unirest.get(url).end(({ body, error }) => {

      if (error) {
        reject(error);
      }

      const $ = cheerio.load(body);

      const title = $(parseTitle).text().trim();
      const image = $(parseImage).attr('src').trim();
      const text = $(parseText).text().trim();
      const views = $(parseViews).text().trim();

      const post = { title, image, text, views }

      resolve(post);
    });
  });
}

export default parseNews;