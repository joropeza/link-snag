var $ = require('cheerio');
var request = require('request-promise');
var _ = require('lodash');
var Promise = require('bluebird');

module.exports = {
  links: function(url, pattern) {
    return new Promise(function(resolve, reject) {
      request(url).then(function(html) {
        var parsedHTML = $.load(html);
        var linkList = [];
        _.map(parsedHTML('a'), function(anchor) {
          var href = $(anchor).attr('href');
          linkList.push(href);
        });
        resolve(linkList);
      });
    });
  }
};