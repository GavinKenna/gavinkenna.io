<template>
  <footer class="footer">
    <div class="footer-notes">
      <div class="flex-column">
        <div class="flex-row">
          <a class="social" href="https://www.linkedin.com/in/gavinkenna/">
            <fa :icon="['fab','linkedin']" l />
            <h7>Check out my LinkedIn</h7>
          </a>
        </div>
        <div class="flex-row">
          <a class="social" href="https://github.com/GavinKenna">
            <fa :icon="['fab','github']" l />
            <h7>Check out my Github</h7>
          </a>
        </div>
        <!--        <div class="clearfix"/>-->
      </div>
      <div class="flex-column">
        <div class="flex-row">
          <a class="social" href="https://github.com/GavinKenna/GavinKenna.io">
            <fa :icon="['fab','github']" l />
            <h7>Fork this website</h7>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  .footer {
    background-color: #333;
    color: #fff;
    font-size: 18px;
    width: 100%;
    alignment: bottom;
  }

  .footer-notes {
    margin: 0 auto;
    max-width: 960px;
    padding: 15px;
    /*padding-top: 100%;*/
    padding-bottom: 50px;
    alignment: bottom;
  }

  .social {
    color:inherit;
  }
</style>
