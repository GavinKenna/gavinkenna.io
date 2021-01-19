<template>
  <div class="page-wrapper mt-8">
    <br>
    <div class="container">
      <h3>Currently Reading</h3>
      <div class="row card-columns ">
        <BookCard
          v-for="book of this.filterByStatus('reading')"
          :key="book.slug"
          :book="book"
        />
      </div>
      <h3>Top Shelf</h3>
      <div class="row card-columns ">
        <BookCard
          v-for="book of this.filterByStatus('read')"
          :key="book.slug"
          :book="book"
        />
      </div>
      <h3>Wishlist</h3>
      <div class="row card-columns ">
        <BookCard
          v-for="book of this.filterByStatus('wishlist')"
          :key="book.slug"
          :book="book"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from '../../components/BookCard'

export default {
  components: {
    BookCard
  },
  layout (context) {
    return 'blog'
  },
  async fetch () {
    this.books = await fetch(
      '/readinglist.json'
    ).then(res => res.json())
  },
  data () {
    return {
      books: []
    }
  },
  methods: {
    filterByStatus ($status) {
      return this.books.filter((book) => {
        return book.status === $status
      })
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
