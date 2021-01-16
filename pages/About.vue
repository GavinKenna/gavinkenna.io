<template>
  <div class="section">
    <div class="hero_texts text-center px-2">
      <div class="hero_image flex justify-center">
        <img
          alt="Vue logo"
          class="rounded-circle mb-4 mt-8 profile-pic border-white border"
          src="https://media-exp1.licdn.com/dms/image/C5603AQHeJrMSCbp0Yw/profile-displayphoto-shrink_200_200/0/1575362435345?e=1616025600&v=beta&t=R1fxzyb9MkUQIWGr4ahkXOziP7G-nsZF1jTGGzauhcQ"
        >
        <div class="container">
          <h1>About Me</h1>
          <p class="text-center" style="padding-top: 5%">
            Hey there, I'm Gavin and welcome to my own little piece of the interwebs. I'm currently a
            Director of Engineering for medtech company called PharmaPod, but I've previously held positions
            as a Backend engineer, Software Architect, DevOps engineer and for a brief period of time a retail assistant.
          </p>
          <p>
            I'm using this site as a means to play around with Vue.js and hone my frontend skills, as I've
            been mainly focusing on my backend and infrastructure skills the past few years.
          </p>
          <p>
            This project is built using Vue.js, Nuxt.js and Bootstrap. It's wrapped within a Docker container and
            deployed on my trusty Raspberry Pi. There's also some Google Analytics running in the background for good
            measure.
          </p>
          <p>
            Please feel free to fork this project and view it's insides.
          </p>
        </div>
      </div>
    </div>
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
