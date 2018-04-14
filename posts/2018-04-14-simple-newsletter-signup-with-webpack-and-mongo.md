---
title: Simple newsletter sign-up form using Webpack 4.5.0 and MongoDB
tags:
- signup
- newsletter
- webpack 4.5.0
- mongodb
- nodejs
- javascript
- ecmascript
featured: /assets/posts/2018/abstract-blank-business-248537.jpg
description: I created in about 1 hour a simple newsletter signup form using Webpack 4.5.0 and MongoDb integrated to my blog engine in Node.js
published: true
---
<img src="/assets/posts/2018/abstract-blank-business-248537.jpg" style="width:100%" alt="Mail letters" />
<small>Image credit to: [Pexels](https://www.pexels.com/photo/high-angle-view-of-paper-against-white-background-248537/)</small>

In this cloudy saturday 🌧, I took sometime to ship a new feature for my blog engine in **Node.js**: I included a simple newsletter sign-up form that uses **Webpack 4.5.0** to bundle a class written in ECMAScript 2016 and communicates with a self-contained API in the blog engine that writes that information in a MongoDB instance.

Check out [my pull request](https://github.com/thiagoricieri/thiago.ricieri.com/pull/1) to see what has changed. I've called this feature *Penpals* and anybody that signs in will receive a direct e-mail from me, just for fun.

I think the next enhancement in this feature will be to add a notification service to let me know when a new email is subscribed, so I can easily start conversations on my inbox 📬.
