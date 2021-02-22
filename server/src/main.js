import parseNews from '../parseNews';
import { sites } from './configs';

const test = parseNews('https://news.ykt.ru/article/116302?block.all', sites.ykt);

console.log(test);