<template>
  <nav class="navbar bg-body-tertiary navbar-expand-lg fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/cat.svg" alt="Logo" width="50" height="50" class="d-inline-block align-text-top">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Plushes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Clothes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Accessories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><UserIcon /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><CartIcon />  Cart 0</a>
          </li>
        </ul>
      </div>
      <h3 class="display-7">PET E-Commerce</h3>
    </div>
  </nav>
</template>

<script setup>
import UserIcon from './UserIcons.vue'
import CartIcon from './CartIcons.vue'
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-brand img {
  margin-right: 10px;
}
</style>
