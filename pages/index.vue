<template>
  <div>
    <section class="section">
      <div class="container">
        <h1>Hey, I'm Gavin</h1>
        <h5>Director of Engineering for PharmaPod</h5>
        <p style="padding-top: 15px">
          Welcome to my little place on the internet. I plan on using this space to write Blog posts on subjects
          that I find interesting, as well as a place to track my goals throughout the year.
        </p>
        <p>
          Currently the site isn't much as it is the literal definition of a work in progress. I will be using
          this site as a way to fully understand Vue.js.
        </p>
        <p>
          Please feel free to Fork this site
          <a href="https://github.com/GavinKenna/gavinkenna.io">here</a>
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
  .section {
    padding-top: 10%;
    padding-bottom: 10%;
  }
</style>

<script>
export default {
  layout (context) {
    return 'base'
  }
}
</script>
