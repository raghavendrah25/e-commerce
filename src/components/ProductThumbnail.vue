<template>
  <div class="card" style="width: 12rem;">
  <img src="/cat.svg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ title  }}</h5>
    <p class="card-text">{{ price }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductThumbnail",
  props: {
    title: String,
    price: String,
  }
}
</script>
