---
layout: post
title: A list of my web apps
date: 3000-01-01
comments: true
tags: [ web development, internet, apps]
landing: true
description: A List of my web apps, current, and defunct
---


<div class="clearfix">

<nav>
<img src='/assets/images/screencapture-www-musicsuggestions-ninja-1443972446616.png' width=200></img>

  </nav>

  <section>
    <span><h2><a href="http://www.musicsuggestions.ninja/" class="checkUrl">http://www.musicsuggestions.ninja/</a></h2>
</span>
    <p>Notice we have put a clearfix on the div container. It is not needed in this example, but it would be if the nav element was longer than the non-floated section content.</p>
  </section>

  <section>
    <span>section</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.</p>
  </section>

</div>


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
.clearfix {
    overflow: auto;
}

nav {
    float: left;
    width: 200px;
}

section {
    margin-left: 206px;
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
  $( "a.checkUrl" ).each(function() {
    var ele = $( this );
      console.log(ele.attr('href'));
    if (isValidURL(ele.attr('href')) == true) {
       ele.after( "<img src='https://img.shields.io/badge/website-online-green.svg'>"  );
    } else {
               ele.after( "<img src='https://img.shields.io/badge/website-offline-red.svg'>"  );
    }
  });
    }, 100);
});
</script>

