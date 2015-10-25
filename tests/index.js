var should = require('chai').should(),
	linkSnag = require('../index'),
	links = linkSnag.links

describe('#links', function() {
	it('returns links for absolute path pattern', function() {
		this.timeout(5000);
		return links('http://www.google.com','^(?:[a-z]+:)?//').then(function(results) {
			results.should.not.be.null;
		});
	});
});