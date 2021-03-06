---
layout: post
title: Make an Android app using Cordova in 15 minutes from freshly installed Ubuntu [Full Instructions]
date: 2015-10-16
comments: true
landing: false
tags: [cordova, android, ubuntu, app]
description: A simple and quick guide to install everything you need to get started making apps using cordova.
---

## Setup

### Install Java 7

{% highlight bash %}
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java7-installer
sudo apt-get install oracle-java7-set-default
{% endhighlight %}

And check if its installed using `javac --version`.

### Install Android Studio

First install some dependencies for Ubuntu (or wait until install fails to install...)_

{% highlight bash %}
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1
{% endhighlight %}
[Click here](http://developer.android.com/sdk/index.html#Other) to download the latest Android Studio package. Unpack the downloaded ZIP file into an appropriate location for your applications.

Add this to your `.profile`:

{% highlight bash %}
export PATH=$PATH:/path/to/android-studio/bin # where you unzipped the package
export ANDROID_HOME=/home/XXX/Android/Sdk
source ~/.profile
{% endhighlight %}

Start Android studio

{% highlight bash %}
studio.sh
{% endhighlight %}

### Enable a emulator (optional)

```
sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils
```

Restart computer, hit DEL and enable Virtualization.

Start Android Studio and then use ```Tools -> Android -> AVD Manager```. Setup an Android using Lollipop x86.

### Install Cordova

```
sudo npm install -g cordova
```

## Setup app

### Generate new app

{% highlight bash %}
cordova myapp myapp com.myname.myapp myapp
cd fingerprinting
{% endhighlight %}

### Install plugins

{% highlight bash %}
cordova plugin add nl.nielsad.cordova.wifiscanner
cordova plugin add https://github.com/katzer/cordova-plugin-background-mode.git
{% endhighlight %}

### Run / deploy

{% highlight bash %}
cordova platform add android
cordova build android
cordova emulate android       #to deploy the app on a default android emulator
cordova run android --device  #to deploy the app on a connected device
{% endhighlight %}
