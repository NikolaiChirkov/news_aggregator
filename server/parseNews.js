const unirest = require('unirest');
const cheerio = require('cheerio');

const parseNews = async(url, { parseTitle, parseImage, parseText, parseViews }) => {
  let post;

  await unirest.get(url).end((response) => {
    const body = response.body;
    const $ = cheerio.load(body);

    const title = $(parseTitle).text().trim();
    const image = $(parseImage).attr('src').trim();
    const text = $(parseText).text().trim();
    const views = $(parseViews).text().trim();

    post = { title, image, text, views }

    console.log(post);
  });

  return post
}

module.exports = parseNews;