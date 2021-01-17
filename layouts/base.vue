<template>
  <div class="d-flex flex-column min-vh-100">
    <GavinNavigation />
    <div class="container index">
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
  .index {
    /*font-family: 'DejaVu Sans Mono';*/
    padding-top: 70px;
  }
</style>
