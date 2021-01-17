<template>
  <div class="flex mt-4">
    <div class="main">
      <blogpost class="md:p-8 prose prose-md lg:prose-lg mx-auto">
        <img
          :alt="blog.title"
          :src="blog.image"
          class="card-img-top img-fluid rounded"
        >
        <h1 align="center" class="title">
          {{ blog.title }}
        </h1>

        <p align="center">
          Originally Published {{ formatDate(blog.date) }}
        </p>

        <nuxt-content :document="blog" class="" />
      </blogpost>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params }) {
    const slug = params.slug || 'index'
    const blog = await $content('blogposts', slug).fetch()
    const blogposts = await $content('blogposts')
      .where({ published: { $ne: false } })
      .sortBy('date', 'desc')
      .fetch()
    const [prev, next] = await $content('blogposts')
      .where({ published: { $ne: false } })
      .sortBy('date', 'desc')
      .surround(slug)
      .fetch()
    return {
      blog,
      prev,
      next,
      blogposts
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head () {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog.description
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://gavin.kenna.io/blog/${this.$route.params.slug}`
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
  .main {
    padding-bottom: 100px;
  }
  .title {
    font-size: 2.1428571em;
    margin-top: 0;
    margin-bottom: 0.8em;
    line-height: 1.2;
    font-weight: 800;
    margin-left: auto;
    margin-right: auto;
    max-width: 65ch;
  }

  aside ul {
    top: 6rem;
    position: sticky;
  }

  aside {
    min-width: 300px;
    padding-left: 40px;
    max-width: 400px;
  }
</style>
