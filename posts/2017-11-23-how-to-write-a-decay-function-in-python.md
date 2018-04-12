---
title: How to write a decay function in Python
tags:
- decay
- epsilon-greedy
- programming
- python
- reinforcement learning
featured: /assets/posts/2017/splitting-atoms.jpg
---
<img src="/assets/posts/2017/splitting-atoms.jpg" style="width:100%" alt="Splitting atoms in nuclear reaction result in decay" />

At my exercise of reinforcement learning, I needed to write a decay function for Ɛ-greedy strategy. The mathematical function should look something like:

```python
f(x) =  decay^x
```

But in the algorithm, I don't have access to the iterator value (x in the above formula), only the current epsilon (Ɛ) and the decay factor I defined.

It turns out it is not necessary to use x to obtain the same value. If `x` is the current step in the iteration, all that is needed to do is:

```python
Ɛ = Ɛ * decay
```

It would translate to

```python
Ɛ = Ɛ * decay ^ X
```

Where `X` would be the total amount of steps in the iteration. In python, the code would look like:

```python
self.epsilon = self.epsilon * self.decay
```

Although simple, it took me some time to visualize both functions are equal but written in different forms.
