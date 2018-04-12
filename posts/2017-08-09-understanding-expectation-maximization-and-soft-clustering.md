---
title: Understanding Expectation Maximization and Soft Clustering
tags:
- clustering
- data
- engineering
- statistics
featured: /assets/posts/2017/expectation-max-clustering.png
---
<img src="/assets/posts/2017/expectation-max-clustering.png" style="width:100%" alt="Expectation Maximization and Soft Clustering charts" />

## Hands-on
This powerful algorithm will give you, for each data point you have, a vector of probabilities (*I forgot the name of such vector, it has one!*). Each probability will refer to each cluster you are trying to assign the data point to. Based on that, you can put the point to the cluster it is more **probable** to belong to.

It is an algorithm of **soft clustering**, given it won’t tell *hardly* which point belong to what cluster. It will say to you:

> _Hey, given the options, I think this point has more changes of belonging to cluster A than cluster B._

## What if a data point has a probability of 50% of belonging to two clusters?
Or even if the point has equal or nearly equal probability of belonging to _any_ of the clusters?

Well, that’s what it is a *soft* technique. That decision is up to you, and that’s good. You get to decide if the point belong to data set A or B (or any other letter from the alphabet).

Probabilities of 40% to 60% of belonging to any given cluster will contrast an elegant reality: the data isn’t black and white all the time, it has its shades of grey.
