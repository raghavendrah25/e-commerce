<template>
<div id="carouselExample" class="carousel slide carousel-custom" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/cat2.webp" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/cat.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/mute-swan.jpg" class="d-block w-100 img-fluid" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
</template>


<script>
export default {
  name: "CourselSlide",
}
</script>


<style scoped>
.carousel-custom {
  max-width: 600px;
}
</style>
