<template>
  <div class="products">
    <div class="products-banner">
      <img src="../assets/images/about-banner.jpg" alt="products banner">
      <div class="overlay"></div>
      <div class="container">
        <div class="products-banner-text">
          <span>Products/{{ $route.name }}</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Products"
}
</script>

<style scoped>
.products {
  position: relative;
  top: 60px;
}
.products-banner {
  width: 100%;
  height: 200px;
  position: relative;
  margin-bottom: 1px;
}
.overlay {
  width: 100%;
  height: 100%;
  background: var(--primary);
  position: absolute;
  left: 0;
  top: 0;
  opacity: .7;
  z-index: 1;
}
.products-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  position: absolute;
  left: 0;
  top: 0;
}
.products-banner-text {
  width: 100%;
  height: 200px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}
.products-banner-text span {
  text-transform: capitalize;
  font-size: 20px;
  color: var(--white);
  display: block;
}
</style>