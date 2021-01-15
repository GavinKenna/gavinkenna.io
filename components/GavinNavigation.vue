<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fix-top">
      <button
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-target="#navbarTogglerDemo03"
        data-toggle="collapse"
        type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand mb-0 h1" href="#">GavinKenna.io</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blog">Blog</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          </li>

        </ul>
        <li style="alignment: right">
          <p class="navbar-brand mb-0 h1">v1.0</p>
        </li>
      </div>
    </nav>
  </div>
</template>
