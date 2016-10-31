---
title: Front-End Capstone
date: September 9, 2016
author: Matt Kraatz
---

Next week marks the halfway point for my career at Nashville Software School, amazing how quickly that time has passed. To cap our front-end coursework, every student has independently developed a client-side application (hooked up to Firebase) that we are presenting to the entire school tomorrow . With almost two weeks devoted to the task, this was really the first opportunity we had to develop something fully-featured and--dare I say--cool.

Today, each of my classmates presented their MVP as a "soft demo" to just our class, and I must say, I'm very impressed. Among 25 different applications, almost every one had at least one feature or view that wowed the audience and prompted a "how did you do that?!" question at the end of their demo. This struck me as inspirational, that just because your app doesn't necessarily look as polished as Facebook (and probably has a few bugs under the carpet), doesn't mean that it isn't an impressive accomplishment. Everyone in the room had no trouble looking past the shiny exterior and appreciating the individual coding feats that everyone was able to achieve.

Personally, I have a lot of frustrations with my final product, but that doesn't stop me from being proud of what I've been able to accomplish so far. And I am by no means discouraged from continuing to work on this app in my free time over the next three months. That being said, this was a learning experience like no other and I wanted to share a few of my "lessons learned" from this project.

#### Prioritize features and know when to give up (or ask for help)

While I maintained a fairly extensive Trello board to organize my thoughts and maintain focus, I found myself getting distracted by that "shiny feature over there" more than once. Sometimes I was able to accomplish that feature quickly, sometimes it took me a while, and sometimes I couldn't get it working at all. At the end of the day, especially if that feature didn't come easily, I might have neglected a feature more important to the user experience because I wasn't focused correctly on my priorities. This will be a little easier in a professional environment where I don't get to determine the priority (the product owner does that), but is still a weakness I need to be aware of and improve upon.


#### Know how your frameworks work (and cooperate)

A lot of the major challenges I encountered while developing my project were specifically a result of combining TurnJS with AngularJS. See, a feature of TurnJS is to only keep 6 pages of your flipbook in the DOM at any one time (for resource utilization, I think). The problem is, when TurnJS removes that content from the DOM, all of the Angular bindings are destroyed and basically need to be recompiled before added back to the DOM to maintain functionality. The first time this happened, it took me hours to diagnose. After I understood that interaction, it was much easier to troubleshoot future Angular issues, and I started getting pretty creative coming up with workarounds.

#### Don't forget to have fun

The best decision I made was to pick an app that I actually had a need for personally. Being able to put myself in the shoes of the user, and work on features and functionality that I specifically have yearned for over the years, made all of the pitfalls and stressful moments much easier to power through.

Curious to check out my app? It's live here, bugs and all: https://groupme-memories.firebaseapp.com
