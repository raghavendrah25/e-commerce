<script setup>
import CourselSlide from './components/CourselSlide.vue';
import NavBar from './components/NavBar.vue'
import ProductThumbnail from './components/ProductThumbnail.vue'
</script>

<template>
  <NavBar />
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 d-flex justify-content-center">
        <CourselSlide />
      </div>
    </div>
    <h3 class="mt-3 text-center">Popular products</h3>
    <div class="row">
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
        <ProductThumbnail price="100 Rupees" title="Product Name" />
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
        <ProductThumbnail price="90 Rupees" title="Product Name 2"/>
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
        <ProductThumbnail price="80 Rupees" title="Product Name 3"/>
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
        <ProductThumbnail  price="70 Rupees" title="Product Name 4"/>
      </div>
      <div class="col-12 col-md-3 d-flex justify-content-center mt-3">
        <ProductThumbnail  price="60 Rupees" title="Product Name 5"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
