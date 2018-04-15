---
title: Apple rejected my app, so I decided to open-sourcing it
tags:
- ios
- apple
- app
- open-source
- swift
- cocoapods
published: true
featured: /assets/posts/2018/mojilist-screens.jpg
---
<img src="/assets/posts/2018/mojilist-screens.jpg" style="width: 100%" alt="Emojilist project sample screens" />

Earlier this year, I had the project of creating one new app per month, try to monetize them or run them as a side-project/business. I started with an idea that to solve a problem that I had.

I wanted a really simple way to create shopping lists using only emojis. Just that, **only emojis are allowed**. [Check the repository out](http://github.com/thiagoricieri/Mojilist)!

I had a really good time creating it, exploring new project architecture for iOS from scratch and trying out some good open-source libraries like Realm and Spring. I have even calculated the amount of time I spent creating it so I could calculate how much I had invested in work hours, so I could have a baseline of how much I needed to get in return by selling it:

. | Sum | R$/h | R$
--- | --- | --- | ---
Mojilist | 51 | R$100,00 | R$5,100

## The rejection
Everything was fine and I was excited to release, I generated the screenshots needed and I have sent the binary to Apple for review. My surprise was that the app got rejected because it used Emojis:

<figure>
  <img src="/assets/posts/2018/apple-answer1.png" style="width: 100%" alt="Answer from Apple (1)" />
  <figcaption>
    <small>Answer from Apple (1)</small>
  </figcaption>
</figure>

<figure>
  <img src="/assets/posts/2018/apple-answer2.png" style="width: 100%" alt="Answer from Apple (1)" />
  <figcaption>
    <small>Answer from Apple (2)</small>
  </figcaption>
</figure>

First of all, I was surprised they were enforcing such policy, to me it makes no sense: they already charge a big chunk of any sale in the store (30%), the minimum I expected was to be free to use at least the emojis they have popularized throughout their platform.

## Open-sourcing the project
But opinions aside, I would have to draw many icons to get the chance of resubmitting it and I really think my time would be better invested in other stuff (like learning Node.js and React.js). So I decided to open source this project to get community feedback and perhaps create something else from it. Maybe it could be a good starter for junior developers to try to understand how to build an app from scratch.

Unfortunately, I had to remove the iconography I used, as it is copyrighted. But other than that, the rest is distributed under Apache 2.0 license. [Enjoy by checking out the repository at GitHub](http://github.com/thiagoricieri/Mojilist) and [let me know what you think](https://twitter.com/thiagoricieri)!
