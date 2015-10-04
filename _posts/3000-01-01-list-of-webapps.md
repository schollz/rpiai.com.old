---
layout: post
title: A list of my web apps
date: 3000-01-01
comments: true
tags: [ web development, internet, apps]
landing: true
description: A List of my web apps, current, and defunct
---

<a href="http://www.musicsuggestions.ninja/" class="website">Music Suggestions Ninja</a>

<center>
<img src='/assets/images/screencapture-www-musicsuggestions-ninja-1443972446616.png' width=100></img>
</center>

Hosted at ips

# [Pierian spring](http://pierian.duckdns.org/)

Hosted at ips

# [Permalinker](http://permalinker.duckdns.org/)

Hosted at ips

# [Book Search](http://book.duckdns.org/)

Hosted at phi

# [Cowyo](http://cowyo.com/about)

Hosted at phi.

# [Goodmovies.ninja](http://goodmovies.ninja/)

Hosted at github

# [Science, so what, who cares](http://sciencesowhatwhocares.xyz/)

Hosted at github

# [rpiai.com](http://rpiai.com/)

Hosted at github



<style>
  .successPing {
    clear: left;
    border-radius: 25px;
    background: #8AC007;
    display:inline;
    padding: 2px;
  }
  .failPing {
    clear: left;
    border-radius: 25px;
    background: red;
    display:inline;
    padding: 2px;
  }
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>
function isValidURL(url) {
    var encodedURL = encodeURIComponent(url);
    var isValid = false;
    $.ajax({
      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22" + encodedURL + "%22&format=json",
      type: "get",
      async: false,
      dataType: "json",
      success: function(data) {
        isValid = data.query.results != null;
      },
      error: function(){
        isValid = false;
      }
    });
    return isValid;
}



$( document ).ready(function() {
      setTimeout(function() {
  $( "a.website" ).each(function() {
    var ele = $( this );
      console.log(ele.attr('href'));
    if (isValidURL(ele.attr('href')) == true) {
      ele.toggleClass("successPing");
    } else {
      ele.toggleClass( "failPing" );
    }
  });
    }, 100);
});
</script>

