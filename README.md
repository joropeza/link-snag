# html-link-snag
================
returns arrays of links from &lt;a> tags in a given url, optionally filterable by regex

Version 0.1.1

Usage
=====

```javascript

var snagger = require('html-link-snag');

snagger.links('http://www.google.com','^(?:[a-z]+:)?//').then(function(results) {
			//do stuff with results
		});
```