<template>
    <div class="card">
      <NuxtLink :to="`/blog/${item.slug}`">
        <img
          :alt="item.title"
          :src="item.image"
          class="card-img-top"
        >
      </NuxtLink>
      <div class="card-body" >
        <h5 class="card-title" style="font-weight: bolder">
          {{ item.title }}
        </h5>
        <p class="card-text">
          {{ item.description }}
        </p>
        <p class="card-text">
          <small class="text-muted"> {{ formatDate(item.date) }}</small>
        </p>
      </div>
      <NuxtLink :to="`/blog/${item.slug}`">
        <h5 align="center" class="card-link">View</h5>
      </NuxtLink>
    </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
=
