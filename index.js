var $ = require('cheerio');
var request = require('request-promise');
var _ = require('lodash');
var Promise = require('bluebird');

module.exports = {
  links: function(url, pattern) {
    return new Promise(function(resolve, reject) {
      request(url).then(function(html) {
        var urlPattern = new RegExp(pattern, 'i');
        var parsedHTML = $.load(html);
        var linkList = [];
        _.map(parsedHTML('a'), function(anchor) {
          var href = $(anchor).attr('href');
          if (urlPattern.test(href)) {
            linkList.push(href);
          }
        });
        resolve(linkList);
      });
    });
  }
};