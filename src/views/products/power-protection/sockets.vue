<template>
  <div class="encase-electrical">
    <div class="encase-electrical-banner">
      <img src="../../../assets/images/about-banner.jpg" alt="products banner">
      <div class="overlay"></div>
      <div class="container">
        <div class="encase-electrical-banner-text">
          <span>Products/Sockets & Switches</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="encase-category">
        <span class="category-title">Sockets & Switches</span>
        <div class="category-product">
          <div class="category-product-image"></div>
          <span class="category-product-name">Meter Enclosure</span>
          <div class="category-product-details">
            <p>
              The Single-phase DIN rail meter enclosure is designed to provide robust protection for
              electricity meters and produced from durable thermoplastic materials with high UV stability
              and flame retardation.
            </p>
            <p>
              The enclosure provides ingress protection of IP54 and impact protection of IK09. This makes it
              suitable for both indoor and outdoor use.

            </p>
          </div>
        </div>

        <div class="category-product">
          <div class="category-product-image"></div>
          <span class="category-product-name">Junction boxes</span>
          <div class="category-product-details">
            <p>
              Tranos manufactures standard plastic electrical enclosures designed and manufactured to
              meet global standards that ensure product quality. In addition, they are 1EC 60529 and IP54
              rated. The junction Boxes from the Eureka line are available in transparent and nontransparent
              specifications. The materials are made from high-quality ABS AF366F.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "sockets",
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
.encase-electrical {
  position: relative;
  top: 60px;
}
.encase-electrical-banner {
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
.encase-electrical img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  position: absolute;
  left: 0;
  top: 0;
}
.encase-electrical-banner-text {
  width: 100%;
  height: 200px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}
.encase-electrical-banner-text span {
  text-transform: capitalize;
  font-size: 20px;
  color: var(--white);
  display: block;
}
.encase-category {
  padding: 40px 0;
}
.category-title {
  margin-bottom: 10px;
  display: block;
  font-size: 18px;
  color: var(--primary);
  font-weight: 500;
}
.category-product-image {
  width: 100%;
  height: 300px;
  background: grey;
  margin-bottom: 10px;
}
.category-product {
  margin-bottom: 40px;
}
.category-product-name {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  color: grey;
  text-transform: capitalize;
}
.category-product-details p {
  margin-bottom: 10px;
  line-height: 150%;
  font-size: 14px;
  color: grey;
}
.category-product-details p:last-child {
  margin-bottom: 0;
}

</style>