---
layout: post
title: Yet another Twitter retweet-to-win bot
date: 2015-08-19
comments: true
archive: false
tags: python, coding, bot, twitter
blog: true
description: Things I learned making a retweet-to-win bot
---

# Statistics

There are about 40 contests entered per hour. 

So far 2,498 contests have been entered and 12 have been won, giving a winning percentage of 0.5%. When I enter a given contest it an average of 32 retweets with a standard deviation of 90 retweets.

# How many of the retweets are real?

How many of the retweets are even real? Maybe not many of them. Suppose on average, a contest saturates at X retweets, giving me a 1/X chance of winning. My winning percentage should be roughly equal to the 1/X, so given I won Y contests there should have been XY contests that are definetly real.

# Contests won

1.  Autographed cookbook  
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Follow and retweet for a chance to win <a href="https://twitter.com/CHEF_LYNN">@CHEF_LYNN</a> autographed cookbook (contest ends 8 am Aug 17) <a href="https://twitter.com/hashtag/steinanddine?src=hash">#steinanddine</a></p>&mdash; K-W Oktoberfest Inc. (@KW_Oktoberfest) <a href="https://twitter.com/KW_Oktoberfest/status/632605172884082688">August 15, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Congratulations <a href="https://twitter.com/music_sug_ninja">@music_sug_ninja</a> on winning the RT contest for a signed copy of <a href="https://twitter.com/CHEF_LYNN">@CHEF_LYNN</a>&#39;s cookbook.</p>&mdash; K-W Oktoberfest Inc. (@KW_Oktoberfest) <a href="https://twitter.com/KW_Oktoberfest/status/633303849621565440">August 17, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
2. Two passes to Indian Film Festival
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/IFFMelb">@IFFMelb</a> is coming to Wyndham 30/8. We’re giving away 5 dble passes to the main festival 15-27 Aug Retweet to win <a href="http://t.co/LhWK837P5G">http://t.co/LhWK837P5G</a></p>&mdash; Wyndham City Living (@WyndhamLiving) <a href="https://twitter.com/WyndhamLiving/status/632332141561532416">August 14, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
3. Mixing or mastering services
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">1PM: Retweet for a chance to win one of our mixing or mastering services! Winners announced at 10pm EST.</p>&mdash; Orso Audio (@orsoaudio) <a href="https://twitter.com/orsoaudio/status/633323085073133568">August 17, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Monday Giveaway Winners - 12PM: <a href="https://twitter.com/DautzUtz">@dautzutz</a> 1PM: <a href="https://twitter.com/TheBeerGuzzlers">@TheBeerGuzzlers</a> 2PM: <a href="https://twitter.com/StreamDean">@StreamDean</a> 3PM: <a href="https://twitter.com/RealCrockett">@realcrockett</a> 4PM: <a href="https://twitter.com/TimWinsStuff">@TimWinsStuff</a> 5PM: <a href="https://twitter.com/MisterRiemann">@MisterRiemann</a></p>&mdash; Orso Audio (@orsoaudio) <a href="https://twitter.com/orsoaudio/status/633458300802220032">August 18, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
4. 5$ mGift card to Dunkin Donuts
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">RT for a chance to win a $5 DD mGift! <a href="https://twitter.com/hashtag/VTRunsonDDSweepstakes?src=hash">#VTRunsonDDSweepstakes</a> <a href="http://t.co/ZsQkYy0FS6">http://t.co/ZsQkYy0FS6</a></p>&mdash; Dunkin&#39; Donuts VT (@DunkinVermont) <a href="https://twitter.com/DunkinVermont/status/633639485910159361">August 18, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
5. Black Ops3 Beta code
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Rt for a chance to win a bo3 beta tomorrow at around 10 am uk time! 3 to give away</p>&mdash; mattymoffitt (@MATTY_MOFF) <a href="https://twitter.com/MATTY_MOFF/status/633780854360276992">August 18, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
6. Tickets to see Irish film festival
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">See Tadhg O’Sullivan director of the upcoming The Great Wall discuss some of his new and older films RT to win! &#10;&#10;<a href="http://t.co/RfF22cUUOU">http://t.co/RfF22cUUOU</a></p>&mdash; Irish Film Institute (@IFI_Dub) <a href="https://twitter.com/IFI_Dub/status/633289298444423169">August 17, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
7. Fantasy novel
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="http://t.co/sK4ZwVLd31">http://t.co/sK4ZwVLd31</a>&#10;A great review, sequel to American Craftsman <a href="https://twitter.com/tmdoyle2">@tmdoyle2</a> &#10;Also, RT to win a copy. See post for more details.</p>&mdash; BestFantasyBooks (@fantasy_books) <a href="https://twitter.com/fantasy_books/status/632392215122178048">August 15, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
8. Snacks
<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr"><a href="https://twitter.com/TheBeerGuzzlers">@TheBeerGuzzlers</a> Congratulations, you’ve won our <a href="https://twitter.com/RealHandful">@RealHandful</a> treats! Please could you send your address to hi@realhandful.com?</p>&mdash; BMF (@BritMilFit) <a href="https://twitter.com/BritMilFit/status/633953934852407296">August 19, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
9. Two tickets to dance performance
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Follow &amp; RT to win 2 x tix to the award winning Correction by <a href="https://twitter.com/VerTeDance">@VerTeDance</a> today 20.15 <a href="https://twitter.com/ZOOvenues">@ZOOvenues</a> <a href="https://twitter.com/hashtag/edfringe?src=hash">#edfringe</a> Winner picked at random at 6.pm</p>&mdash; Budweiser Budvar (@BudvarUK) <a href="https://twitter.com/BudvarUK/status/633960934625648640">August 19, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
10. Four tickets to see George Clinton in San Diego
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Do U like fun times? We like fun times! <a href="https://twitter.com/george_clinton">@george_clinton</a> &amp; <a href="https://twitter.com/hashtag/ParliamentFunkadelic?src=hash">#ParliamentFunkadelic</a> R playing tonight <a href="https://twitter.com/HOBSanDiego">@HOBSanDiego</a> - RT to win tix <a href="https://twitter.com/hashtag/AtomicDog?src=hash">#AtomicDog</a></p>&mdash; FM 94/9 (@FM949sd) <a href="https://twitter.com/FM949sd/status/634026834347188225">August 19, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
11. Back Ops3 Beta code
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">RT for a chance to win <a href="https://twitter.com/hashtag/BlackOps3?src=hash">#BlackOps3</a> Beta Codes! <a href="https://twitter.com/hashtag/BO3Beta?src=hash">#BO3Beta</a> &#10;&#10;Info: <a href="http://t.co/wgtN4zx0uL">http://t.co/wgtN4zx0uL</a>&#10;Stream: <a href="http://t.co/46nJ6CjXTP">http://t.co/46nJ6CjXTP</a> <a href="http://t.co/8sP6gi0raW">pic.twitter.com/8sP6gi0raW</a></p>&mdash; ASTRO Gaming (@ASTROGaming) <a href="https://twitter.com/ASTROGaming/status/634049625020694528">August 19, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
12. Two tickets to Men Without Hats in Dallas, Texas
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">We&#39;re sending you &amp; your dancing partner to <a href="https://twitter.com/MenWithoutHats1">@MenWithoutHats1</a> 8/23 at GMBG! RT to win! <a href="http://t.co/ZdsKWpekdJ">http://t.co/ZdsKWpekdJ</a></p>&mdash; GasMonkeyDallas (@GasMonkeyDallas) <a href="https://twitter.com/GasMonkeyDallas/status/634072667977588736">August 19, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
13. Football digital card? 96 fairley
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Giveaways for loyals retweet for a chance to win starts at 50 retweets <a href="https://twitter.com/bloodreaper77">@bloodreaper77</a> <a href="https://twitter.com/CtsVikes">@CtsVikes</a> <a href="https://twitter.com/STQRMY">@STQRMY</a> <a href="http://t.co/KyTmKrRgfc">pic.twitter.com/KyTmKrRgfc</a></p>&mdash; Madden Ut_11 (@Rjthegoat11) <a href="https://twitter.com/Rjthegoat11/status/634349680747520000">August 20, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
