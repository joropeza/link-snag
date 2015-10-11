var should = require('chai').should(),
	linkSnag = require('../index'),
	links = linkSnag.links

describe('#links', function() {
	it('returns something', function() {
		this.timeout(5000);
		return links('http://www.google.com').then(function(results) {
			console.log(results);
			results.should.not.be.null;
		});
	});
});