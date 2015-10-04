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

<div class="nav">
<img src='/assets/images/screencapture-www-musicsuggestions-ninja-1443972446616.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://www.musicsuggestions.ninja" class="checkUrl">Music Suggestions Ninja</a></h2>
</span>
    <p>This site was born after I realized how many great bands I was missing because I don't attend the music festivals where bands are best sampled. I wanted a tool through which I could sample other bands and select them based on my musical preferences. To learn details about how I made it, check out my blog.</p>
  </section>

  <section>
    <p>Music Suggestions Ninja is not a music recommendation service. It offers no guarantee that the generated playlist is favorable or the best possible selection. Instead, like sampling the different sounds at a music festival, it collects music for your consideration and gives you the oppurtunity to explore. Happy exploring!</p>
  </section>

  <section>
  <i>Hosted at ips</i>
  </section>


</div>

<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-permalinker-duckdns-org-1443981521738.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://permalinker.duckdns.org" class="checkUrl">Permalinker</a></h2>
</span>
    <p>To simplify the process of creating permalinks, I generated a website to automatically do it via a bulk input. Its very simple to use and supports the Internet Archive and Perma.cc</p>
  </section>

  <section>
  <i>Hosted at ips</i>
  </section>

</div>


<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-pierian-duckdns-org-1443981220361.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://pierian.duckdns.org" class="checkUrl">Pierian Spring</a></h2>
</span>
    <p>This site does uses a giant repository of submission and comments from various sources to collect the best knowledge around.</p>
  </section>

  <section>
  <i>Hosted at ips</i>
  </section>

</div>

<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-book-duckdns-org-1443981737841.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://book.duckdns.org" class="checkUrl">Book Suggestions</a></h2>
</span>
    <p></p>
  </section>

  <section>
  <i>Hosted at phi</i>
  </section>

</div>



<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-cowyo-com-about-1443981758949.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://cowyo.com/about" class="checkUrl">cowyo</a></h2>
</span>
    <p></p>
  </section>

  <section>
  <i>Hosted at phi</i>
  </section>

</div>

<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-goodmovies-ninja-1443981773458.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://goodmovies.ninja" class="checkUrl">Movie Suggestions</a></h2>
</span>
    <p></p>
  </section>

  <section>
  <i>Hosted at gihtub</i>
  </section>

</div>

<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-sciencesowhatwhocares-xyz-1443981799655.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://sciencesowhatwhocares.xyz" class="checkUrl">Science, so what? Who cares?</a></h2>
</span>
    <p></p>
  </section>

  <section>
  <i>Hosted at phi</i>
  </section>

</div>

<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-rpiai-com-1443981810759.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://rpiai.com" class="checkUrl">rpiai</a></h2>
</span>
    <p></p>
  </section>

  <section>
  <i>Hosted at github</i>
  </section>

</div>

<div class="clearfix">

<div class="nav">
<img src='/assets/images/screencapture-rpiai-com-1443981810759.png' width=200></img>
  </div>

  <section>
    <span><h2><a href="http://choices.duckdns.org.com" class="checkUrl">choices</a></h2>
</span>
    <p><strong>CHOICES</strong> is a nice feed-like program that I wrote before I had discovered <a href="http://feedly.com/i/my">feedly</a>.</p>
    <p><a href="https://github.com/schollz/choices">Github</a></p>
  </section>

  <section>
  <i>Hosted at github</i>
  </section>

</div>

<style>
.clearfix {
    overflow: auto;
}

.nav {
    float: left;
    margin-top:10px;
    width: 200px;
}

.section {
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
       ele.after( "&nbsp;<img src='https://img.shields.io/badge/website-online-green.svg'>"  );
    } else {
               ele.after( "&nbsp;<img src='https://img.shields.io/badge/website-offline-red.svg'>"  );
    }
  });
    }, 100);
});
</script>

