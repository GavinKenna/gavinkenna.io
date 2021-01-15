<template>
  <div class="">
    <GavinNavigation />
    <div class="container mt-top-bar blog">
      <SearchInput search-item="articles" />
      <nuxt />
    </div>
    <GavinFooter />
  </div>
</template>

<style scope>
  .navbar {
    font-family: "DejaVu Sans Mono";
  }
  .blog {
    font-family: 'Ubuntu';
  }
</style>
