---
title: Improving SEO with Gatsby Gitinfo
date: 2021-02-22
path: /improving-seo-with-gatsby-gitinfo
tags: ['Git', 'GatsbyJS']
---

When you are using GatsbyJS there is a really useful plugin to add **git infomation** to your pages.

The [gatsby-transformer-gitinfo](https://www.gatsbyjs.com/plugins/gatsby-transformer-gitinfo/) plugin enables to query for `gitLogLatest` fields like `gitLogLatestEmail`, `gitLogLatestName` and `gitLogLatestDate`.

```graphql
{
  allMdx {
    edges {
      node {
        parent {
          ... on File {
            fields {
              gitLogLatestDate
              gitLogLatestAuthorEmail
              gitLogLatestAuthorName
            }
          }
        }
      }
    }
  }
}
```

This returns the following results:

```
{
  "data": {
    "allMdx": {
      "edges": [
        {
          "node": {
            "parent": {
              "fields": {
                "gitLogLatestDate": "2020-03-25 17:17:56 +0100",
                "gitLogLatestAuthorEmail": "marcokuehbauch@gmail.com",
                "gitLogLatestAuthorName": "Marco Kühbauch"
              }
            }
          }
        },
      ],
    },
  },
},
```

I found this particuarly useful when I wanted to add a **"Last updated on"** feature to my blog post.

I didn't want to add the updated date **manually** to every blog post I worked on. So using the git commit date for this is super helpful.

By adding a **"Last updated on"** feature I wanted to make sure that my content stays **relevant** and shows the users, if it's still **usable information** or if it's outdated.

A great sideeffect is, that it's also good for **SEO** to tell search engines, when your content was last updated and therefore rank it better.
