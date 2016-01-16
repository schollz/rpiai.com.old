---
layout: post
title: Music synchronization
date: 2016-01-16T00:00:00.000Z
comments: true
archive: false
tags:
  - programming
  - musicsaur
  - synchronization
  - python
  - go
  - raspberry pi
landing: true
description: The simplest way to synchronize music playback via wifi.
---

# Nessecity breeds innovation

I had tried to do synchronized music playback for quite awhile.

Complicated solutions:

- [Using multicast RTP](https://web.archive.org/web/20151002195551/http://www.danplanet.com/blog/2014/11/26/multi-room-audio-with-multicast-rtp/)
- [Using Airplay](https://github.com/mikebrady/shairport-sync)
- [Using VLC](https://web.archive.org/web/20150513032137/http://hackedexistence.com/project-vlc.html)
- [Using VLC multicast](https://web.archive.org/web/20150914160409/http://www.wikihow.com/Use-VLC-to-Stream-Audio-and-Video-to-Multiple-Computers-on-Your-Network-Using-Multicast)

These solutions usually required a specialized setup, or specialized programs to be able to sync. VLC is especially complicated as it requires making a playlist each time you want to sync some audio.  It works okay, actually, but it wasn't worth all the fuss of setting up VLC on each computer each time I wanted to play. I wanted something that would just go.
