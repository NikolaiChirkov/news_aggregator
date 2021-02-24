import unirest from 'unirest';
import cheerio from 'cheerio';

const parseLinks = ({url, className, domain, maxLinks = 5}) => {

  return new Promise((resolve, reject) => {
    let links = [];

    unirest.get(url).end(({ body }) => {
      const $ = cheerio.load(body);
  
      $(className).each((i, elem) => {
        if (i <= maxLinks -1) { 
          links.push(domain + $(elem).attr('href')) 
        };
      });

      resolve(links);
    });
  });
}

export default parseLinks;