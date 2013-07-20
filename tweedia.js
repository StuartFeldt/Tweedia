(function() {

var Tweedia = new Object();
window.Tweedia = Tweedia = {
    
    extractImages : function(tweet, callback) {
        
        /* Search media entities */
        if(tweet.entities.media !== undefined && tweet.entities.media.length > 0) {
                for(var m in tweet.entities.media) {
                    
                    /* Check for jpg, png, gif */
                    if(tweet.entities.media[m].media_url.indexOf("jpg") !== -1 || tweet.entities.media[m].media_url.indexOf("png") !== -1 || tweet.entities.media[m].media_url.indexOf("gif") !== -1) {  
                            callback(tweet.entities.media[m].media_url);
                        }
                    }
            }
            
          /* Search url entities */  
          if(tweet.entities.urls !== undefined && tweet.entities.urls.length > 0) {
                for(var u in tweet.entities.urls) {

                    /* Check for jpg, png, gif */
                    if(tweet.entities.urls[u].expanded_url.indexOf("jpg") !== -1 || tweet.entities.urls[u].expanded_url.indexOf("png") !== -1 || tweet.entities.urls[u].expanded_url.indexOf("gif") !== -1) {
                            callback(tweet.entities.urls[u].expanded_url);
                        }

                    /* Check if instagram */
                    if(tweet.entities.urls[u].expanded_url.indexOf("instagram") !== -1) {
                            this.getInstagram(tweet.entities.urls[u].expanded_url, function(ourl){
                                callback(ourl);
                            });
                        }
                    }
             }
    },
    
    extractImagesHTML : function(tweet, callback) {
        /* extract images */
        this.extractImages(tweet, function(url){
            callback("<img src='" + url + "' />");           
        })

    },

    extractVideoHTML : function(tweet, options, callback) {

            /* Search url entities */  
            if(tweet.entities.urls !== undefined && tweet.entities.urls.length > 0) {
                for(var u in tweet.entities.urls) {

                    /* Check for youtube */
                    if(tweet.entities.urls[u].expanded_url.indexOf("youtu") !== -1) {
                            var parts = tweet.entities.urls[u].expanded_url.split("/");
                            parts = parts[parts.length - 1].split("?v=");

                            callback('<iframe width="' + options.width + '" height="' + options.height + '"src="http://www.youtube.com/embed/' + parts[parts.length - 1] + 'enablejsapi=1&playerapiid=ytplayer&version=3&cc_load_policy=0&iv_load_policy=3&modestbranding=1" frameborder="0"></iframe>');
                        }

                    /* check for vine */
                    if(tweet.entities.urls[u].expanded_url.indexOf("vine.co") !== -1) {
                        var parts = tweet.entities.urls[u].expanded_url.split("/");
                        callback('<iframe class="vine-embed" src="https://vine.co/v/' + parts[parts.length - 1] + '/card" width="' + options.width + '" height="' + options.height + '" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>');
                    }
                }
             }
    },

    getInstagram : function(link, callback) {   
        $.ajax({
            url:"http://api.instagram.com/oembed?url="+link,
            dataType: 'jsonp',
            success:function(data){
                callback(data.url);
            }
        });
    }
};
}).call(this);
