---
title: Building Out a Reading List Using Nuxt
date: 2021-01-19
description: How I went about designing and implementing a simple reading list page in Nuxt.js 
image:  https://images.unsplash.com/photo-1488998427799-e3362cec87c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=600
tags: [Engineering, Website, Nuxt, Reading, Books]
categories: [Engineering, Programming, Nuxt]
---
## Preface

I'm a fan of books and typically I'm reading a couple of books in parallel. Tracking all of the books I have read (or would like to read) can be tricky. I did sign up for [GoodReads]() many moons ago for tracking my books but I found it too bloated for what I needed - just tracking books.

After building out my [BlogCard]() component in Vue.js I figured I could also build out a basic reading list using the same functionality. I also realised this would be a perfect opportunity to document my thought process for designing a new feature, implementing it and tracking any issues I come across during my course of programming.

I will talk about how I plan to implement this feature from a hobby perspective , but I will also discuss how I **would** approach and implement this feature from an enterprise perspective if I were tasked with this at work.

## The Want

I would like a new page added to the website, called 'Reading List', that displays books in the following order:

* Books I'm currently reading
* Books I have read and would rank quite highly
* Books I would wish to read

Each of these catagories should be individual headings on the 'Reading List' page.

With each book I would like the following information shown:

* Title of the book
* Author of the book
* My opinion on the book
* Status of the book
  * Currently reading
  * Read
  * Wishlist
* If the book is being currently read I want a progress bar showing how far I am in the book

Outside of the user experience, personally I would like it easy to add and update books to my list. A simple `json` file that holds the book information would be perfect.

## The Design

Let's breakdown the requirements into a quick design.

### UI

I'm not particularly great at UX/UX design, but I figured the best way to present the information to the user would be to add a new link on the top navigation bar (which redirects to `/readinglist`). Within the 'Reading List' page I would have 3 headings, all in H1 :

1. Currently Reading
2. Top Shelf
3. Wishlist

After each heading I wish to list all of the books under that particular catagory, each within their own Bootstrap Card. The book cover would be situated on the left and the `title`, `author` and `opinion` would be situated on the right of the card. The progress bar would be situated under both the book cover and information block.

I sketched the following rough outline (please excuse the handwriting) :

![ListDraft](/images/blogimages/readingListPageDraft.jpg?centerme)

As all of the information regarding each book is already presented to the user there is no need for an `href` from each book entity - each card will simply present data without redirecting to anywhere.

### Data

I need a way of storing this data (book title, author, etc). If I were to approach this from an enterprise perspective I would build an API that would reside outside of this website, and would offer the following endpoints:

* GET /books/
  * OPTIONAL Parameters
    * ?authorid={}
    * ?status={reading/read/wishlist}
* GET /books/{id}
* GET /authors
* GET /authors/{id}
* POST access-token /books/
  * Add new book
  * Requires authorization
* PUT access-token /books/{id}
  * Update a book
  * Requires authorization
* etc

This API would be protected by OAuth authorization, and the website (acting as it's own OAuth Client, i.e. UI-Client) would require its own OAuth token (in the form of the `client-credentials` OAuth grant). I would possibly employ Keycloak as the IDP.

But this is a hobby project and I don't need to add additional layers of complexity without good reason, so my plan is to host a `json` file that contains all information on the books in my reading list. This `json` file will be stored in the `/static` directory and fetched asynchronously when the `/readinglist` page is accessed. After it is fetched it will be parsed and the contents placed within a new Vue component called `BookCard`.

So given the requirements for the `json` file, I jotted down the following (again, excuse the handwriting) :

![JsonDraft](/images/blogimages/readingListJsonDraft.jpg?centerme)

Bringing this into the digital world, and by adding real world examples,  it resembles the following:

```json
[
  {
    "title" : "Masters of Doom",
    "author" : "David Kushner",
    "image" : "/images/books/mastersofdoom.jpg",
    "status" : "read",
    "opinion" : "A very insightful read about the early days of the world-famous id software.",
    "progress" : 100
  },
  {
    "title" : "The Count of Monte Cristo",
    "author" : "Alexandre Dumas",
    "image" : "/images/books/montecristo.jpg",
    "status" : "reading",
    "opinion" : "A tale as old as time : boy meets girl, boy falls in love with girl, girls cousin forges an illegal letter implying boy is treasonous, boy spends 14 years in prison, boy goes for revenge.",
    "progress" : 50
  },
  {
    "title" : "Game Engine Black Book: Wolfenstein 3D",
    "author" : "Fabien Sanglard",
    "image" : "/images/books/blackbook3d.jpg",
    "status" : "wishlit",
    "opinion" : "How was Wolfenstein 3D made and what were the secrets of its speed?",
    "progress" : 0
  }
]
```

I think this is enough to go on and begin writing some code.

## The Implementation

I'm going to break down the implementation into three sections - the `json` file, the 'Reading List' webpage and then finally the book card Vue component that will present our books in a nice format.

### Reading List JSON File

We are going to take the example I gave above as is and create a new file in the GitHub repository. We're going to place this file in the following location : `/static/readinglist.json`.

By placing it into the `/static` directory Nuxt will automatically look in this directory and serve any and all files at root. What this means is that the file will be accessible from `https://gavinkenna.io/readinglist.json`. Because of this you should always be careful as to what you place in the `/static` directory.

### Reading List Page

Next up is creating the page that will contain all of our books. We will create a new file in the following location:
`/pages/readinglist/index.vue`.

This page will house the logic for fetching the `readinglist.json` file, filtering it by `status` and injecting book data into our Book Card Vue Component.

The page will be broken up into two sections :

* the `script` section that contains the business logic of the page, as well as holding data pertaining to the page.
* the `template` section, which acts as our `HTML` for the page.

#### Script

Let's start with the `script` section. In this section we are going to:

* import our `BookCard` component (even though it doesn't exist just yet)
* fetch the `json` file from our `static` directory
* store the book data
* filter the data based on reading `status`

So by taking it step by step:

```vue
<script>
import BookCard from '../../components/BookCard'

export default {
  components: {
    BookCard
  }
  async fetch () {
    this.books = await fetch(
      '/readinglist.json'
    ).then(res => res.json())
  },
  data () {
    return {
      books: []
    }
  }
}
</script>

```

So far the script is importing our `BookCard` component, fetching the `readinglist.json` contents and storing it locally within `this.data`. So far so good.

If we didn't care about filtering the books by `status` this would be all we needed to do. We could simply loop through each item within the `this.books` map in the `template` section to populate our `BookCard` component and that would work just fine.

But we want to organise our books by status, so let's do just that. Below data we are going to add a `method` called `filterByStatus` that takes in a `status` string. It then filters the `this.books` object by that string and returns the output.

```vue
<script>
methods: {
    filterByStatus ($status) {
      return this.books.filter((book) => {
        return book.status === $status
      })
    }
  }
</script>
```

Nice. Now we need to call this method. We could create `compute` properties that call this method, for instance:

```vue
<script>
computed: {
    readinglist () {
      return this.filterByStatus('reading')
    },
    readlist () {
      return this.filterByStatus('read')
    },
    wishlist () {
      return this.filterByStatus('wishlist')
    }
  }
<script>
```

These properties could then be called by the template, but I decided to call the `filterByStatus` method directly within the `template`.

### Template

Let's look at the template. Here we're going to set our three headings (Currently Reading, Top Shelf and Wishlist) and within each heading loop through the filtered books (for that heading) and inject them into the `BookCard` component.

Here's what our base `template` looks like with just the headings:

```vue
<template>
  <div class="page-wrapper mt-8">
    <br>
    <div class="container">

      <h3>Currently Reading</h3>
      <div class="row card-columns ">
        // give me some books
      </div>

      <h3>Top Shelf</h3>
      <div class="row card-columns ">
        // give me some books
      </div>

      <h3>Wishlist</h3>
      <div class="row card-columns ">
       // give me some books
      </div>

    </div>
  </div>
</template>
```

The `template` is really basic, which is great to work with. Now lets call our `filterByStatus` method and inject the iterative output to our `BookCard` component:

```vue
      <h3>Currently Reading</h3>
      <div class="row card-columns ">
        <BookCard
          v-for="book of this.filterByStatus('reading')"
          :key="book.slug"
          :book="book"
        />
      </div>
```

As you can see we're calling the `v-for` Vue iterator and using our method `filterByStatus` to return a filtered list of books, based on the status `reading`. We then iterate through each of these filtered books and inject the singular book into our `BookCard` component.

The only thing left to do is build the component.

### Book Card Vue Component

Finally, the last step is to create the component that will render a book using our requirements. We will create a new file in the following location:
`/components/BookCard.vue`.

Like the Reading List Page, this component is divided into two sections : `template` and `script`. We're tackle the `script` first as it's the smallest.

#### Script

The `script` for the `BookCard` component is incredibly small - it is just 9 lines long and simply stores our input `book` property.

```vue
<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>
```

#### Template

The template is a little bit larger, and it relies on a fair bit of CSS modifications to correctly rearrange the Image alignment. Since we are using the Bootstrap Card component , it defaults to the image being above the card text - and I really wanted the image on the left.

So the template is as follows:

```vue
<template>
  <div class="card rounded flex-column">
    <div class="row no-gutters">
      <div class="col-sm-5 col-md-offset-3">
        <img
          :src="book.image"
          class="card-img-top h-100"
        >
      </div>
      <div class="col-sm-7">
        <div class="card-body">
          <h5 class="card-title">
            {{ book.title }}
          </h5>
          <b-card-sub-title align="right">
            by {{ book.author }}
          </b-card-sub-title>
          <br>
          <p class="card-text">
            {{ book.opinion }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex-row">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          :style="{width: book.progress + '%'}"
          :aria-valuenow="book.progress"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          Completion Rate
        </div>
      </div>
    </div>
  </div>
</template>
```

This template nicely grabs the image, title, author, my opinion and my current progress of the book in question.

## Final Steps

The last step is of course to add the new link, `/readinglists`, the the root navigation bar. That can be done by modifying the `NavigationComponent.vue` and adding the following snippet:

```vue
<li class="nav-item">
            <NuxtLink class="nav-link" to="/readinglist">
              Reading List
            </NuxtLink>
</li>
```

You can see screenshots of the finished product below:

![ReadingList](/images/blogimages/readingList.png?centerme)


You can find the exact files changes in this post here:

* [/pages/readinglist/index.vue](https://github.com/GavinKenna/gavinkenna.io/tree/master/pages/readinglist/index.vue)
* [/static/readinglist.json](https://github.com/GavinKenna/gavinkenna.io/tree/master/static/readinglist.json)
* [/components/BookCard.vue](https://github.com/GavinKenna/gavinkenna.io/tree/master/components/BookCard.vue)
* [/components/GavinNavigation.vue](https://github.com/GavinKenna/gavinkenna.io/tree/master/components/GavinNavigation.vue)