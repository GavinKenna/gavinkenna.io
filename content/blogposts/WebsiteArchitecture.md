---
title: About GavinKenna.io
date: 2021-02-01
description: What is this site all about? What's its purpose and how does it work?
image: /images/blogimages/cicd.png?centerme
tags: [Engineering, Website, Code, Infrastructure]
categories: [Engineering, Programming]
---
Half the fun of writing code is discussing it with others. Well, maybe not *half* the fun - but some of the fun at least.

## What is the Purpose of this site?

Good question! I always wanted to get back into blogging but never had time as I was always working or (trying to) improve my skill as a developer. I have spent a fair bit of my career honing my backend code skill-set and totally neglected any and all forms of frontend development.

Yes I can make my way around an Angular codebase and sure I could probably understand what was happening in a Vue component - but could I write and understand it fully? Not a hope.

So, with those two things in mind (blogging and wanting to understand frontend technologies) I decided to take a stab at building out a ***VERY*** basic blog site.

Could I have used WordPress or another pre-rolled CMS system? Absolutely. But I had a Raspberry Pi lying around and I wanted to play with Vue.js.

This site serves me in a number of ways:

1. It's a great way to understand Vue.js and play around with the Nuxt.js framework.
2. It will be a great location for my online CV and portfolio.
3. By open sourcing this site and blogging about technologies and frameworks I use it will give me a way to give back to the open source community, even if it is just a small token.

### What Will I Write About?

Any and all things. I'm a big fan of designing and developing software, but I also enjoy reading (original right?) , watching films, listening to music and trying new vegan recipes (note - I'm not a vegan but it's fun finding new ways to make tofu taste great).

From a development standpoint I will discuss the following:

* Java
* Spring
* Design Patterns
* Authentication and Authorization
  * OAuth
  * OpenID Connect
  * SAML
  * Keycloak
  * Azure B2C
  * etc
* Bash , and how it is so vital to know basic bash for day-to-day work
* Taking an idea from design, to development, to deployment
* Vue.js
* REST APIs
* Docker
* Kubernetes

### Schedule

So how often do I intend to write a blog post? Answer - **weekly**, at most. I know myself that if I try to write more than one post a week I will burn out and lose interest. Writing a blog post takes time, patience and most of all it takes an interesting subject. At least with weekly I can begin writing a post on a Monday and add to it bit by bit everyday before releasing it on a Sunday.

## So how does this site work?

"Finally, the good stuff" I hear you say. Yes, how does this site work? Well to answer that I need to discuss the code and the infrastructure.

## Infrastructure

I'm a lover of APIs. From consuming well documented APIs to designing and deploying my own, I enjoy it all.

But for this site I decided against building out a backend (for the initial increment). The reason for this is very simple - the complexities that a decoupled infrastructure brings to the table do not out-weigh the benefits. Yet.

>For the moment all I need is a simple mechanism for making content (Blog posts) available for consumption. If I were to build this for a client or as part as an enterprise integration I would extract out the logic per responsibility, deploy the API as a standalone module and deploy the frontend separately. For writing articles and blog posts I would do away with storing the articles as Markdown files saved within the repository and instead would store them within a NoSQL database, such as MongoDB or Cosmo.
>
>Of course this would then raise questions around authoring articles. Who can write articles and how can the author get them published on the site? Of course the obvious answer would be to incorporate authentication and authorization between the `POST` / `PUT` / `DELETE` API endpoints. Of course, now that we have authorization between endpoints we would need an authentication framework to accommodate signing-up / logging-in / logging-out. As you can see the complexity rises with each abstraction layer.

So what **do** I need? Well, for starters I need a frontend framework for quickly building a site that can render content for mobile and desktop browsers. It was a toss-up between Vue.js and React, and Vue.js won (not for any particular reasons).

The next step was to find a way of getting that content to the Vue.js site without requiring an API to serve that information. I took a look around the internet for ways to present static content on a Vue.js website and came across [Nuxt.js](https://nuxtjs.org/).

>Nuxt.js is a framework built on Vue.js that offers static site functionality.

After reading up on the Nuxt.js documentation, implementing a basic version of the website was very straightforward. What wasn't a walk in the park was how to best tackle CI/CD for a hobby project.

### Ensuring Zero Downtime During Updates

Originally I encapsulated the application within a Docker container, and built the website within a Dockerfile from the start. My goal was to have the site deployed on my Raspberry Pi via [Portainer](https://www.portainer.io/). I have my reverse proxy, Nginx, deployed in Portainer as well so it all worked very well. I then had a basic `cronjob` that pings GitHub every few minutes to see if there's any code changes - if there is it downloads the changes and rebuilds the Docker image.

This is worked fine until I had to update the website. Because Portainer doesn't offer rolling-update functionality out of the box I couldn't replace one version of the website with the new version.

>Rolling Update is a feature found in Kubernetes that spins up one or more instances of a Docker container. When there is a new version of that Docker container, Kubernetes replaces older containers one at a time. When each container is replaced and spun up then Kubernetes moves onto the next container.

So was this a real issue? Slightly. Whenever I updated the website I was seeing downtimes of 2-3 minutes at a time, which was a concern.

In work I would simply use Kubernetes for managing my Orchestration, but because this is a hobby project (and my Pi doesn't have the resources to run Kubernetes) I opted for a more straightforward method of CI/CD.

First thing I did was take the application out of Docker and instead rely on [PM2](https://pm2.keymetrics.io/) for running the life cycle of my Vue.js application.

>PM2 is a daemon process manager that oversees the life cycle of Node.js applications.

So I installed PM2 and configured it to oversee two instances of my application. In the source code directory on the Raspberry Pi I executed the following:

```bash
pm2 reload GavinKennaIO --parallel 1 --wait-ready
```

Now PM2 is managing the Node.js application, and I have two instances running. 

![Infra](/images/blogimages/infra.png?centerme)

Next up is to modify the `cronjob` to utilize PM2.

The `cronjob` runs every couple of minutes and it executes a simple `bashscript` that performs the following:

```bash
echo "Checking if Pull is required..."
git fetch origin
reslog=$(git log HEAD..origin/master --oneline)
if [[ "${reslog}" != "" ]] ; then
	git merge origin/master # completing the pull

	npm run build

	echo "Restarting first instance..."
	pm2 reload 0

	sleep 10
	echo "Restarting second instance..."
	pm2 reload 1
fi
```

So what does this script do? Well the first three lines perform a `git fetch` on my remote repository. The fourth line checks if there's any changes, and if there is then it enters the `if` block.

It performs a merge and then an `npm build`. After that it reloads the first instance on PM2, waits 10 seconds, and then reloads the second instance. The reason for the 10 second sleep is to give amble time for PM2 to successfully reload the first instance.

You can see the illustration below.

![CI](/images/blogimages/cicd.png?centerme)

## Closing Remarks

I'm looking at this website as a fluid project. If I am still working on this site in a years time I don't imagine it will look, feel or function as it currently does. After a while I may have to take the site off of my Pi and deploy on a server (be it shared or dedicated hosting). I may end up moving away from a static site and instead extract out the logic into a backend API. Might even replace Vue.js with React, or whatever new weekly JavaScript framework pops up.
