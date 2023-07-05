---
title: Some updates to the website
description: Some updates to the website
date: 2023-07-06
---

2 days ago someone on the Orange Site [asked about personal blogs](https://news.ycombinator.com/item?id=36575081) and I posted a link to my blog.

I decided to use the opportunity to do some cleanups in the website infrastructure and tidy it up.

### Make the blog a real boy

![Pinocchio becoming a real boy scene](https://media.giphy.com/media/MMs7t96FGzLAA/giphy.gif)

As my blog has a bit more visibility now I decided to make it [a real boy](https://www.youtube.com/watch?v=cBTwgUwf76A). I added a sitemap and RSS and I hope that's everything left to do for making it readable. If you are reading this and have suggestions for making the blog better please feel free to reach me out at mail@{this website domain}.

### Upgrading Gatsby

![The Great Gatsby iconic scene](https://media.giphy.com/media/u4CY9BW4umAfu/giphy.gif)

First, I updated Gatsby to version 5 to get the best it can offer. I was positively surprised by how easy it was and that by upgrading to it I could shed some of the website's code: for instance, for `<head />` tags instead of using [React Helmet](https://www.npmjs.com/package/react-helmet) I could use [the default gastby head](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/). Instead of configuring the blog pages with code using the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) I could use the [File System Route](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/). In addition I managed to finally achieve 100% type-safety with the help of [Gatsby GraphQL Type Generation](https://www.gatsbyjs.com/blog/how-to-use-gatsby-graphql-type-generation/).

### Updating the projects section

![The merged logo](/assets/ab67656300005f1fa533e4d7effc30b107c94955.jpeg)

I refreshed the list of projects, removing some projects that grew insignificant over the years and adding [Merged](https://open.spotify.com/show/3xfebRSm5VW6EHj0b99WVW) a podcast I am very proud for producing this year.
