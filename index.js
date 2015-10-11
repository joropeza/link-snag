var $ = require('cheerio')
var request = require('request')

function gotHTML(err, resp, html) {
  if (err) return console.error(err)
  var parsedHTML = $.load(html)
  // get all img tags and loop over them
  var links = []
  parsedHTML('a').map(function(i, link) {
    var href = $(link).attr('href')
    console.log(href);
    //if (!href.match('.png')) return
    links.push(domain + href)
  });
  return links;
}

module.exports = {
  links: function(url,pattern) {
    pattern = pattern || '';
    return request(url, gotHTML)
  }
};