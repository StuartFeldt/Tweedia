Tweedia
========

Tweedia is a Twitter Media extractor.  It will extract images from a Tweet object obtained via [Twitter's REST API v1.1](https://dev.twitter.com/docs/api/1.1).

## Getting Started

To use Tweedia, just include it in your page. For now, Tweedia also requires jQuery to facilitate JSONP requests.

```html
<script src="jquery.js"></script>
<script src="tweedia.js"></script>
```

From here, call Tweedia.extract to find embedded media:

```javascript
Tweedia.extract(tweet, function(url){
	alert(url); 
});
```