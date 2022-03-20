<template>
  <div class="power-protection">
    <div class="container">
      <div class="power-protection__inner">
        <span class="product-name">Lights & Wiring Devices</span>
        <div class="product-image">
          <img src="../../assets/images/power-protection.jpg" alt="">
        </div>
        <div class="product-details">
          <p>
            Tranos is Nigeria’s first indigenous manufacturers’ of high-quality
            electrical distribution systems for low and medium voltage apparatuses,
            whether in industrial plants or in buildings.
          </p>
          <p>
            We provide the best technology for the responsible use of electrical energy,
            helping to save and protect human lives, capital assets and natural resources.
            This, combined with more than 11 years of experience and in-depth technical know-how,
            makes us a competent and reliable partner. At the same time, we have the expertise
            to develop innovative products and systems and deliver them in accordance with
            requirements anywhere in the world.

            Our portfolio of electrical distribution and protection products are made of high-quality materials and some of the best available components available today. Our products are designed to add an air of sophistication to homes and offices at very affordable prices.
          </p>
        </div>
        <div class="product-types">
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/sockets.jpg" alt="sockets">
            </div>
            <span @click="$router.push('/products/warehouse')">Sockets & Switches</span>
            <p>
              Our Eureka™range of Sockets and Switches offers highly convenient and safe solutions.
              They are designed to ensure effortless installation, giving a most professional finish
              in homes or workplaces.
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/isolators.jpg" alt="isolators">
            </div>
            <span @click="$router.push('/products/warehouse')">Isolators and Changeover</span>
            <p>
              Our XCHANGE™ range of isolators and manual changeovers ranging from 16 to 200 amps.
              They are manufactured from durable thermoplastic for both indoor and outdoor switching
              protection. Designed with safety in mind, the lockable switch prevents tampering or intrusion.
              They are built to be compact, safe and reliable.
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/electrical-panel.jpg" alt="electrical panel">
            </div>
            <span @click="$router.push('/products/warehouse')">Electrical Panels</span>
            <p>
              Our POWERHUB™ electrical panels are perfectly developed for different applications
              and are easily customizable to suit unique requirements and specifications
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lights",
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