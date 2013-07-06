(function() {

var Tweedia = new Object();
window.Tweedia = Tweedia = {
    
    extract : function(tweet, callback) {
        
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
    
    getInstagram : function(link, callback) {   
        $.ajax({
            async: false,
            url:"http://api.instagram.com/oembed?url="+link,
            dataType: 'jsonp',
            success:function(data){
                callback(data.url);
            }
        });
    }
};
}).call(this);
