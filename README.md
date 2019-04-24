[![Netlify Status](https://api.netlify.com/api/v1/badges/5d29822e-ab21-4fb9-9f24-e7ee1b82e36a/deploy-status)](https://app.netlify.com/sites/silly-roentgen-fc472c/deploys)

# TheOne.Yoga

Personal website of Singapore based Iyengar-style yoga instructor Huo Jie.

## Editing

### Articles

Create a markdown (.md) file inside /src/pages/articles. The name of the file will be the URL so make sure it's something that you won't change later. The name should be short and relevant. For example:

benefits-of-yoga.md
https://theone.yoga/benefits-of-yoga/

You should put a section at the top that looks like this:

```
---
date: "2019-04-13"
hero: ../../images/huojie-yoga-pose.jpeg
lang: en
title: "The Benefits of Yoga"
---
```

| Variable | Description |
|---|---|
| date | The page will show this date as the article date. |
| hero | (_optional_) If you include this, it should be a path to the image that will be displayed at the top of the article. If you don't include this, then the article will just have a normal title. |
| lang | en or zh |
| title | The main title of the article |

To write the article content, you should use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Everything Else

Edit gatsby-config.js to change things that appear on all pages.

## Testing

Run TEST

## Deploying

Run FABU
