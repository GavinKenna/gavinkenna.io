<template>
  <div class="page-wrapper mt-8">
    <h5 align="center">
      A Blog Written by Someone You Don't Care About
    </h5>
    <br>

    <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      <div class="card-deck">
        <div v-for="blogpost of blogposts" :key="blogpost.slug">
          <BlogCard :item="blogpost" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout (context) {
    return 'blog'
  },
  async asyncData ({ $content, params }) {
    const blogposts = await $content('blogposts')
      .where({ published: { $ne: false } })
      .sortBy('date', 'desc')
      .fetch()
    return {
      blogposts
    }
  },
  data () {
    return {
      title: "Gavin's Blog",
      description:
          "Gavin's Blog - a place to vent and write about technology"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>
