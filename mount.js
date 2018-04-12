const fs = require('fs')
    , jsyaml = require('js-yaml')
    , showdown = require('showdown')
    , config = JSON.parse(fs.readFileSync('./mount.config.json', 'utf8'))
    , converter = new showdown.Converter({
        omitExtraWLInCodeBlocks: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tables: true,
        tasklists: true,
        simpleLineBreaks: true,
        openLinksInNewWindow: true,
        emoji: true,
        metadata: true
      })

// Convert to markdown
new Promise((resolve, reject) => resolve(converter))
  .then(setFlavor)
  .then(createOrFlush)
  .then(readMarkdownFiles)
  .then(getContents)
  .then(ignoreExistent)
  .then(convertToMarkdown)
  .then(saveHtmlToDist)
  .then(generateTableOfContents)
  .then(saveTableOfContents)
  .then(finalLog)
  .catch(console.err)

// Utils
function setFlavor(converter) {
  converter.setFlavor('github')
  return converter
}
function createOrFlush(converter) {
  let dist = './dist'
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist)
  }
  else if(config.flushDir) {
    var existent = fs.readdirSync(dist)
    existent.forEach(each => fs.unlinkSync(`${dist}/${each}`))
  }
  return converter
}
function readMarkdownFiles() {
  return fs.readdirSync('./posts')
}
function getContents(files) {
  return files.map(function(file) {
    return {
      name: file.replace('.md', ''),
      content: fs.readFileSync(`./posts/${file}`, 'utf8')
    }
  })
}
function ignoreExistent(files) {
  if (config.ignoreExistentFiles) {
    var uniques = {}
    existent.forEach(each => uniques[each.replace(/\.(html|json)/g, '')] = true)
    config.butIncludeFiles.forEach(each => delete uniques[each])
    ignoreThese = Object.keys(uniques)
    return files.filter(each => ignoreThese.includes(each.name))
  }
  return files
}
function convertToMarkdown(contents) {
  return contents.map(function(file) {
    return {
      name: file.name,
      date: extractDate(file.name),
      url: extractUrl(file.name),
      html: converter.makeHtml(file.content),
      meta: jsyaml.load(converter.getMetadata(true))
    }
  })
}
function saveHtmlToDist(converted) {
  converted.forEach(each => {
    if(fs.existsSync(`./dist/${each.url}.html`) && config.flushDir) {
      throw new Error(`Can't create a file, ${each.url} already exists.`)
    }
    var newMeta = Object.assign({
      date: each.date,
      url: each.url
    }, each.meta)
    fs.writeFileSync(`./dist/${each.url}.html`, each.html)
    fs.writeFileSync(`./dist/${each.url}.json`, JSON.stringify(newMeta, null, 2))
  })
  return converted
}
function generateTableOfContents(converted) {
  return converted
    .map(each => { return {
      name: each.name,
      date: each.date,
      url: each.url,
      meta: each.meta
    }})
    .reverse()
}
function saveTableOfContents(converted) {
  fs.writeFileSync('./dist/toc.json', JSON.stringify(converted, null, 2))
  return converted
}
function finalLog(converted) {
  converted.forEach(each => console.log(`--> Converted file ${each.name} to HTML & JSON...`))
}
function extractDate(name) {
  return name.match(/(20\d{2}-\d{2}-\d{2})/gi)[0]
}
function extractUrl(name) {
  return name.replace(`${extractDate(name)}-`, '')
}
