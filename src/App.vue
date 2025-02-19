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
        <ProductThumbnail price="100 Rupees" title="Product Name" additionalInfo="Sold Out"/>
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
    </div>
  </div>
</template>

<script>
import CourselSlide from './components/CourselSlide.vue';
import NavBar from './components/NavBar.vue'
import ProductThumbnail from './components/ProductThumbnail.vue'
import webservice from './webservice';

export default {
  name: 'App',
  components: {
    ProductThumbnail,
    CourselSlide,
    NavBar

  },
  created() {
    webservice.getProducts().then((response) => {
      alert(response.data);
    }).catch((error) => {
      alert(error);
    });

    webservice.getCategory().then((response) => {
      alert(response.data);
    }).catch((error) => {
      alert(error);
    });
  }
}
</script>


<style scoped>
</style>
