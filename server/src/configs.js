const newsCls = {
  ykt: {
    parseTitle: '.n-post_title',
    parseImage: '.articleThumb',
    parseText: '.clear-after',
    parseViews: '.n-post_meta_views',
  }
}

const parseLinkParams = {
  ykt: {
    url: 'https://news.ykt.ru/article/category/42',
    className: '.n-panel .n-post-preview',
    domain: 'https://news.ykt.ru',
    maxLinks: 10,
  }
}

export { newsCls, parseLinkParams};