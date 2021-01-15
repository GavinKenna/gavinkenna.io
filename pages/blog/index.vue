<template>
  <div class="page-wrapper mt-8">

    <br>
    <div class="container content-row">
      <div class="row">
          <div class="card-columns">
            <BlogCard
              v-for="blogpost of blogposts"
              :item="blogpost"
              :key="blogpost.slug"
            />
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
