---
title: Anti-Patterns by Example, Premature Optimization
tags:
- anti-pattern
- engineering
- premature optimization
- software
featured: /assets/posts/2017/doodle-anti-pattern.png
---
<img src="/assets/posts/2017/doodle-anti-pattern.png" style="width:100%" alt="Anti-Patterns by Example: Premature Optimization" />

> We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet, we should not pass up our opportunities in that critical 3%

Donald Knuth wrote this quote back in 1973, and for over forty years software engineers have been debating its validity. Is it still applicable for nowadays?

Given the right proportions, it is. *Premature Optimization* is different than *(Basic) Optimization*. It is obvious, the key word here is **Premature**. Sahand Saba puts it nicely:

> Optimizing before you have enough information to make educated conclusions about where and how to do the optimization.

It is preferable to write well designed and readable software first and then micro-optimize it later. Wait, *micro*?

*Micro* because you must be aware of using complicated and unproven "heuristics" instead of a known mathematically correct algorithm.

Another trap in this anti-pattern to be aware of is Randall Hyde's sixth observation:

> Observation #6: Software engineers have been led to believe that their time is more valuable than CPU time; therefore, wasting CPU cycles in order to reduce development time is always a win. They've forgotten, however, that the **application users' time is more valuable than their time**.

Considering that you know what algorithm to pick, to over or prematurely optimize it is the real trap the *Premature Optimization* anti-pattern wants to warn you.

> It is important to remember what Rico Mariani said, "Never give up your performance accidentally." Notice he did not say, "Never give up performance." He said programmers should not give up performance accidentally. People accidentally give up performance when they don't understand the costs associated with the constructs they are using in their programs.

## Examples in Real-Life

In BrightScript, Roku's official language for developing channel applications, there are two list structures: `roArray` and `roList`. In fact, `roList` is a dynamic `roArray`.

Most of the time, when I need a list I won't waste time choosing between those two: I will go straight to:

```javascript
myList = [] // creates a roList
```

Why wouldn't I care **97% of the time**, like Donald Knuth states? Because most of the time, my lists' size is so small that any optimization in that scope is marginal.

However, I should be aware of what are the constraints of the software I'm writing. If I knew the list would accommodate a few pairs of elements and never grow in size, and if the sequence is in the heart of a process that potentially can block the render thread for too long, I would put more thinking on it.

But that does not happen more often than 3% of the time.

### Sources:
[9 Anti-Patterns Every Programmer Should Be Aware Of](http://sahandsaba.com/nine-anti-patterns-every-programmer-should-be-aware-of-with-examples.html) by Sahand Saba.
[Anti-Patterns](https://en.wikipedia.org/wiki/Anti-pattern) by Wikipedia.
[Program Optimization](https://en.wikipedia.org/wiki/Program_optimization#When_to_optimize) by Wikipedia.
[The Fallacy of Premature Optimization](http://ubiquity.acm.org/article.cfm?id=1513451) by Randall Hyde.
[“Premature optimization is the root of all evil” is the root of evil](https://medium.com/@okaleniuk/premature-optimization-is-the-root-of-all-evil-is-the-root-of-evil-a8ab8056c6b) by Oleksandr Kaleniuk.
[Premature optimization is the root of all evil](https://shreevatsa.wordpress.com/2008/05/16/premature-optimization-is-the-root-of-all-evil/) by The Lumber Room.
