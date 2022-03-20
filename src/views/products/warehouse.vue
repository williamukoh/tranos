<template>
  <div class="power-protection">
    <div class="container">
      <div class="power-protection__inner">
        <span class="product-name">Warehouse Storage System</span>
        <div class="product-image">
          <img src="../../assets/images/rack-1.jpg" alt="">
        </div>
        <div class="product-details">
          <p>
            We design and manufacture racks and storage systems
            for various needs and applications.
            Our racks are made from mild steel and powder coated for
            durability.
            Our Racks help you maximize facility space while simplifying
            inventory tracking.
          </p>
          <p>
          </p>
        </div>
        <div class="product-types">
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/rack-2.jpg" alt="sockets">
            </div>
            <span @click="$router.push('/products/warehouse')">Warehouse Racks</span>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/rack-2.jpg" alt="isolators">
            </div>
            <span @click="$router.push('/products/warehouse')">Supermarket/Retail Racks</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "warehouse",
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
.power-protection {
  padding: 40px 0;
}
.product-image {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
}
.product-image img {
  width: 100%;
  height: 100%;
}
.product-name {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 10px;
  display: block;
}
.product-details {
  margin-bottom: 60px;
}
.product-details p {
  margin-bottom: 10px;
  line-height: 170%;
  color: grey;
}
.product-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  grid-gap: 30px;
}
.product__image {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
}
.product__image img {
  width: 100%;
  height: 100%;
}
.product span {
  font-size: 18px;
  font-weight: 500;
  color: var(--primary);
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
}
.product p {
  font-size: 14px;
  color: grey;
  line-height: 150%;
}
.product ul {
  margin-left: 20px;
}
.product ul li {
  font-size: 14px;
  color: var(--primary);
  line-height: 150%;
  cursor: pointer;
}
.product ul li:hover {
  text-decoration: underline;
}
.product span:hover {
  text-decoration: underline;
}

@media screen and (max-width: 1000px) {
  .product-types {
    grid-template-columns: 1fr;
  }
  .product-image {
    height: 300px;
  }
}

@media screen and (max-width: 500px) {
  .product-image {
    height: 200px;
  }
}
</style>