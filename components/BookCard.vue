<template>
  <div class="card rounded flex-column">
    <div class="row no-gutters">
      <div class="col-sm-5 col-md-offset-3">
        <img
          :src="book.image"
          class="card-img-top h-100"
        >
      </div>
      <div class="col-sm-7">
        <div class="card-body">
          <h5 class="card-title">
            {{ book.title }}
          </h5>

          <b-card-sub-title align="right">
            by {{ book.author }}
          </b-card-sub-title>

          <br>
          <p class="card-text">
            {{ book.opinion }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex-row">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          :style="{width: book.progress + '%'}"
          :aria-valuenow="book.progress"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ book.progress }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card {
    max-width: 500px;
    max-height: fit-content;
    border-color: rgba(0,0,0,0.49);
    border-radius: inherit;
    border-style: dot-dash;
    height: max-content;
  }

  .col-sm-5,
  .col-sm-7 {
    max-width: 100%;
    max-height: 100%;
  }

  .row {
    height: auto;
    width: auto;
  }

  .b-card-sub-title {
    font-style: italic;
    font-size: small;
  }

  .img {
    background: #868e96;
  }

  .progress-bar,
  .progress {
    background-color: white;
  }
</style>
