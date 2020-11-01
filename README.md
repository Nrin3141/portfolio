  <a href="https://www.gatsbyjs.org">
    <img height="120" alt="Gatsby-Logo" src="/src/images/technologies/gatsby.png" />
  </a>
  <a href="https://www.netlify.com">
    <img height="120" alt="Netlify-Logo" src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"/>
  </a>
  <a href="https://www.ghost.com">
    <img height="120" alt="Ghost-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ghost-Logo.svg/128px-Ghost-Logo.svg.png">
  </a>

# Rico's Portfolio
## Run with Gatsby and Netlify and a Blog powered by a headless Ghost CMS
[![Netlify Status](https://api.netlify.com/api/v1/badges/41b3c4f9-5403-4937-9b4b-3939d5fb93f7/deploy-status)](https://app.netlify.com/sites/rtrebeljahr/deploys)

This is my personal portfolio page - and also a project where I learned to use Gatsby in combination with Ghost for blogging. 
The site is powered by server-side-pre-rendered Material UI components and hosted for free on Netlify. Therefore it is a static serverless website, that only gets updated when something actually changes, like when I add a new blog post. Ghost then fires a web hook - making Netlify rebuild the static pages, indexing the new blog post and dynamically creating a corresponding page and entries on the main blog page.



