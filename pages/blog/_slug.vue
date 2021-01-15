<template>
  <div class="flex mt-4">
    <div class="main">
      <blogpost class="md:p-8 prose prose-md lg:prose-lg mx-auto">
        <img
          :alt="page.title"
          :src="page.image"
          class="card-img-top img-fluid rounded"
        >
        <h1 class="title" align="center">
          {{ page.title }}
        </h1>

        <!-- {{ stats.text }} -->
        <nuxt-content :document="page" class="" />
      </blogpost>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params }) {
    const slug = params.slug || 'index'
    const page = await $content('blogposts', slug).fetch()
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
      page,
      prev,
      next,
      blogposts
    }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'desctiption',
          content: this.page.desctiption
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
