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
      <div
        v-for="product in products"
        v-bind:key="product.id"
        class="col-12 col-md-3 d-flex justify-content-center mt-3"
      >
        <ProductThumbnail
          :price="product.totalPrice.display"
          :title="product.name"
          :additionalInfo="product.shortDescription"
          :image-url="product.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CourselSlide from './components/CourselSlide.vue'
import NavBar from './components/NavBar.vue'
import ProductThumbnail from './components/ProductThumbnail.vue'
import webservice from './webservice'

export default {
  name: 'App',
  components: {
    ProductThumbnail,
    CourselSlide,
    NavBar,
  },
  data() {
    return {
      products: null,
    }
  },
  created() {
    webservice
      .getProducts()
      .then((response) => {
        this.products = response.data
      })
      .catch((error) => {
        alert(error)
      })

    // webservice.getCategory().then((response) => {
    //   alert(response.data);
    // }).catch((error) => {
    //   alert(error);
    // });
  },
}
</script>

<style scoped></style>
