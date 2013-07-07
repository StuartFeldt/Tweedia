Tweedia
========

Tweedia is a Twitter Media extractor.  It will extract direct image links from a Tweet object obtained via [Twitter's REST API v1.1](https://dev.twitter.com/docs/api/1.1).

### Getting Started

To use Tweedia, just include it in your page. For now, Tweedia also requires jQuery to facilitate JSONP requests.

```html
<script src="jquery.js"></script>
<script src="tweedia.js"></script>
```

From here, call Tweedia.extract to find direct urls for embedded media:

```javascript
Tweedia.extract(tweet, function(url){
	alert(url);  // e.g. www.something.com/picture.jpg
});
```
### Dealing with multiple images

Tweedia also supports multiple image links per tweet.

```javascript
Tweedia.extract(tweet, function(url){
	alert(url);  // this callback will be called for each embedded image link
});
```

Twitpic, yfrog, and Instagram are currently supported.