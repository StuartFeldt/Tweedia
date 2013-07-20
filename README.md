Tweedia
========

Tweedia is a Twitter Media extractor.  It will extract direct image links and embed html from a Tweet object obtained via [Twitter's REST API v1.1](https://dev.twitter.com/docs/api/1.1).

### Getting Started

To use Tweedia, just include it in your page. For now, Tweedia also requires jQuery to facilitate JSONP requests.

```html
<script src="jquery.js"></script>
<script src="tweedia.js"></script>
```

From here, call Tweedia.extract to find direct urls for embedded media:

####Extract direct image urls
```javascript
Tweedia.extractImages(tweet, function(url){
	alert(url);  // e.g. www.something.com/picture.jpg
});
```

####Extract image embed html
```javascript
var options = {width: 300, class: 'extracted-images'};
Tweedia.extractImagesHTML(tweet, function(data){
	alert(data);  // e.g. <img width='300' class='extracted-images' src="www.something.com/picture.jpg" />
});
```

####Extract video embed html
```javascript
var options = {height: 380, width: 380, class: 'vine'};
Tweedia.extractVideoHTML(tweet, options, function(data){
	alert(data);  // e.g. <iframe class='vine' src='http://vine.co/v/bJjdTLBnwx1/card' width='380' height='380' frameborder='0'></iframe>
});
```

### Dealing with multiple images

Tweedia also supports multiple image links per tweet.

```javascript
Tweedia.extractImages(tweet, function(url){
	alert(url);  // this callback will be called for each embedded image link
});
```

Twitpic, yfrog, Instagram, YouTube, and Vine are currently supported.