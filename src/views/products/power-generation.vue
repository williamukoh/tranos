<template>
  <div class="power-protection">
    <div class="container">
      <div class="power-protection__inner">
        <span class="product-name">Power Generation</span>
        <div class="product-image">
          <img src="../../assets/images/power-protection.jpg" alt="">
        </div>
        <div class="product-details">
          <p>
            We are your go-to company for power generating systems
            for specific applications. We design and manufacture Gas
            Generators for unique applications in industrial and
            commercial environments to ensure optimum power
            availability while maximizing operating costs and reducing
            emissions.
          </p>
          <p>
            We are the only Nigerian company able to produce and
            supply complete AC and DC Gas generator sets entirely
            manufactured in Nigeria
          </p>
          <p>
            Our Gas Generator models are:
            TG: 1000,
            TG: 1200,
            TG: 1800,
            TG: 2000
          </p>
        </div>
        <div class="product-types">
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/generator-plant-1.jpg" alt="sockets">
            </div>
            <span @click="$router.push('/products/warehouse')">TG : 1000</span>
            <p>
              The TG - 1000 Gas generator is an environmentally
              friendly 10kVA rated AC generator with improved
              operating flexibility. The generator runs at a speed of
              1500 rpm with very low sound and vibrations. It comes
              with an automatically controlled system that monitors
              the generator operations and safety and provides 99.87%
              availability and reliability performance.
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/generator-plant-1.jpg" alt="isolators">
            </div>
            <span @click="$router.push('/products/warehouse')">TG: 1200</span>
            <p style="margin-bottom: 10px">
              The TG - 1200 is a 12kW DC Gas generator. It is a more
              environmentally friendly power solution with very low
              emissions to the atmosphere. It also comes with an
              automatically controlled system that monitors the
              generator operations and safety with 99.87% availability
              and reliability performance.
            </p>
            <p>
              Its operational speed flexibility is from 1500rpm to
              2200rpm according to load demand and efficient fuel
              TG:1200 management. It also has low noise and vibration.
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/generator-plant-1.jpg" alt="electrical panel">
            </div>
            <span @click="$router.push('/products/warehouse')">TG: 1800</span>
            <p style="margin-bottom: 10px">
              The TG - 1800 is an 18kW DC Gas generator with high
              fuel efficiency and low speed for all load demands. It has
              an operational speed of 1500rpm with low noise and
              vibration.
            </p>
            <p>
              It is an environmentally friendly solution with very low
              carbon emissions.
            </p>
          </div>

          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/generator-plant-1.jpg" alt="electrical panel">
            </div>
            <span @click="$router.push('/products/warehouse')">TG: 2000</span>
            <p style="margin-bottom: 10px">
              The TG - 2000 is a 20KVA AC Gas generator with high fuel
              efficiency and low speed for all load demands. It has an
              operational speed of 1500rpm with low noise and
              vibration.
            </p>
            <p>
              This generator has the Possibility for remote start/stop
              with an external Automatic Transfer Switch and it is also
              environmentally friendly with very low carbon emissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "power-generation",
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