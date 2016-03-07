---
layout: post
title: Speech-to-text on Raspberry Pi using Pocketsphinx
date: 2016-01-08
comments: true
archive: false
tags: [speech-to-text, stt, pocketsphinx, raspberry pi]
landing: false
description: Simple instructions to get Pocketsphinx working
---

This closely follows [this](http://cmusphinx.sourceforge.net/wiki/tutorialpocketsphinx) but also includes the Pi dependencies:

{% highlight bash %}
sudo apt-get install swig oss-compat pulseaudio libpulse-dev automake autoconf libtool bison python-dev
{% endhighlight %}

[Can't use 8-bit...](http://stackoverflow.com/questions/19378396/decode-8-bit-wave-file-with-pocket-sphinx)

# My benchmarks

For all benchmarks I recorded one file using

{% highlight bash %}
arecord -f S16_LE -c1 -r16000 goforward.raw
{% endhighlight %}

## Transcribe Audio

{% highlight bash %}
time pocketsphinx_continuous -fwdflat no -bestpath no -maxwpf 5 -maxhmmpf 10000 -topn 2 -pl_window 7 -infile goforward.raw
{% endhighlight %}

Intel(R) Core(TM) i5-4310U CPU @ 2.00GHz: ~1-2 second for 2 seconds audio

Raspberry Pi 2: ~7-8 seconds for 2 seconds audio

## Transcribe Audio (limited dictionary)

Make a dictionary first. Generate a file `language.txt` with some words, like

{% highlight bash %}
open browser
new e-mail
forward
backward
next window
last window
open music player
okay computer
{% endhighlight %}

then go [generate a dictionary](http://www.speech.cs.cmu.edu/tools/lmtool-new.html) by uploading `language.txt`. Download the resulting tar and use `tar -xvzf TAR*.tgz` and then use the command:

{% highlight bash %}
time pocketsphinx_continuous -fwdflat no -bestpath no -maxwpf 5 -maxhmmpf 1000 -topn 2 -pl_window 7  -dict 4182.dic -lm 4182.lm -infile goforward.raw
{% endhighlight %}

Intel(R) Core(TM) i5-4310U CPU @ 2.00GHz: ~0.1 seconds

Raspberry Pi 2: ~1.4 seconds

## Keyword search

{% highlight bash %}
pocketsphinx_continuous -kws phrases.kws -kws_threshold 1e-20 -infile goforward.raw
{% endhighlight %}

where `phrases.kws` has a couple of phrases to look for.

Intel(R) Core(TM) i5-4310U CPU @ 2.00GHz: ~0.25 seconds

Raspberry Pi 2: ~2.5 seconds



# Download

{% highlight bash %}
git clone https://github.com/cmusphinx/sphinxbase.git
git clone https://github.com/cmusphinx/pocketsphinx
{% endhighlight %}

# Configure and Install Pocketsphinx

{% highlight bash %}
cd sphinxbase
./autogen.sh
./configure
make && sudo make install
{% endhighlight %}

Add the following to `~/.profile`:


{% highlight bash %}
export LD_LIBRARY_PATH=/usr/local/lib
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
{% endhighlight %}

then

{% highlight bash %}
source ~/.profile
cd ../
cd pocketsphinx
./autogen.sh
make && sudo make install
{% endhighlight %}
