<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fix-top">
      <button
        aria-controls="options"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-target="#options"
        data-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <a class="navbar-brand mb-0 h1" href="#">GavinKenna.io</a>

      <div id="options" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blog">
              Blog
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">
              About
            </NuxtLink>
          </li>
        </ul>
        <li style="alignment: right">
          <fa style="color: white" :icon="['fab','github']" />
          <a class="navbar-brand mb-0 h1" :href="`https://github.com/GavinKenna/GavinKenna.io/commit/${commitSha}`">
            Current Code Version # {{ commitSha }}
          </a>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commitSha: process.env.GIT_COMMIT
    }
  }
}
</script>
