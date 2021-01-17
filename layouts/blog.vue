<template>
  <div class="d-flex flex-column min-vh-100">
    <GavinNavigation />
    <div class="container mt-top-bar blog">
      <SearchInput search-item="articles" />
      <nuxt />
    </div>
    <div class="flex-fill">
    </div>
    <GavinFooter />
  </div>
</template>

<style scope>
  .navbar {
    /*font-family: "DejaVu Sans Mono";*/
  }
  .blog {
    /*font-family: 'Ubuntu';*/
    padding-top: 70px;
  }
</style>
