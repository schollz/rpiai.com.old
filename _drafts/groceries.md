---
layout: post
title: Automatic grocery lists
date: 2015-11-09
comments: true
archive: false
tags: [programming, ai, groceries, daily life]
landing: true
description: How to simply and effectively predict grocery lists.
---

My girlfriend or I buy the groceries each week. So each week we have to make a list. Luckily, I designed a tool, [cowyo](http://cowyo.com/about), which makes it easy to share a synchronized list between the two of us. However, I always have trouble making the actual list. What foods did I eat? What things are we running low?

To make things easier, I wrote a very [simple open-source program in Python](http://github.com/schollz/grocery-list) to predict the groceries I'm going to buy. The concept is exceedingly simple: I keep track of all the grocery purchases. Then, after about a month, I can use the current duration and the mean time between purchasing to determine whether or not to add something to the list. Basically, it allows me to only have to write down groceries that I buy, and I never have to actually think up the grocery list itself!
