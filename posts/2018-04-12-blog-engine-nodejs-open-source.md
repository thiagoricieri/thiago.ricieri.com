---
title: I've created my own blog engine in 2 days using Node.js and Markdown, and it is open-sourced!
tags:
- open-source
- blog
- node.js
- markdown
- javascript
published: true
---
I like to write, and I always wanted to acquire the habit of blogging regularly. I've set up a dozen of Wordpress blogs for myself but never carried them on too much.

Recently, I've been teaching myself Node.js and modern JavaScript (ECMAScript), and I thought: *What the hell, let's see how easy it would be to create a blog engine for myself, **from scratch!***.

And that's what I've done. Inspired by [Felix Krause's open-blog](http://github.com/krauseFx/krausefx.com), I also [open-sourced my blog written in Node.js](https://github.com/thiagoricieri/thiago.ricieri.com) to anyone who wants to use or extend it.

## How to use it
### 1. Clone this repository
```javascript
git clone https://github.com/thiagoricieri/thiago.ricieri.com
```
### 2. Install dependencies
```javascript
npm install
```
### 3. Create your secrets.json file
I use this JSON file to keep important information aside, like the API keys the blog uses. Right now it should look like:
```json
{
  "driftKey": "a-key",
  "googleUA": "another-key"
}
```
Save it in the root of the cloned repository.

### 4. Serve the application
I use the port 3001, no reason behind this choice. You can change it at your will.
```python
npm run dev
# Then open
http://localhost:3001/
```

And there you have it! This is my blog running on your machine. Now let's take a look at how to write posts.

## Writing posts
### 1. Write anything in Markdown
Write anything in Markdown in the `posts/` directory. Take a look at the posts I have written for some examples.

### 2. Name your blog posts
I use the convention of `YYYY-MM-DD-post-title.md` so all files are in order of posting. This is important because the script that generates the HTML files will order the files by name in ascending order, then reverse the order to generate the table of contents of the blog.

### 3. Run the mount script
Use
```javascript
npm run mount
```
When you have the posts, you want to publish in `posts/` directory. This script will get every post and convert it into HTML and generate a JSON file with the same name that contains metadata.

## Generating Static files
It is also possible to loop through all your blog pages (that are enlisted in the table of contents) and generate static HTML files to be used instead of dynamic ones. This is especially useful in case you ever need to have a light version of your blog.

To generate such files, run
```javascript
npm run staticize
```

## What else can I do?
This is the starter project of a primary website. You can extend it to do whatever you would like; your imagination sets your limits. Knock yourself out and [let me know if you ever use it](https://twitter.com/thiagoricieri).
