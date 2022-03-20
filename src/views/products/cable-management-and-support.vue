<template>
  <div class="enclosures">
    <div class="container">
      <div class="power-protection__inner">
        <span class="product-name">Cable Management and Support System</span>
        <div class="product-image">
          <img src="../../assets/images/enclosure.jpg" alt="">
        </div>
        <div class="product-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur debitis eius excepturi ipsam itaque mollitia optio quibusdam
            sunt, temporibus ullam voluptatem voluptates! Consectetur corporis ducimus
            laboriosam magnam nostrum soluta ullam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Accusantium amet, at blanditiis culpa, deleniti doloremque,
            eius eligendi eos nobis provident qui quis totam velit. Adipisci animi necessitatibus
            omnis saepe temporibus.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, at explicabo
            ipsa maxime neque pariatur perferendis similique. Adipisci aliquam corporis, ducimus,
            eligendi eos est magnam saepe similique soluta tempora, tenetur.
          </p>
        </div>
        <div class="product-types">
          <div class="product">
            <div class="product__image"></div>
            <span @click="$router.push('/products/cable-management')">Encase Electrical</span>
            <p>
              These enclosures are deployed
              specifically for housing and protecting
              electrical components, devices, and
              other electrical equipment. There are
              two subcategories of Encase Electrical:
            </p>

          </div>
          <div class="product">
            <div class="product__image"></div>
            <span @click="$router.push('/products/cable-management')">Encase Mechanical</span>
            <p>
              These enclosures are designed and
              built for use in mechanical applications,
              providing protection from rain, sunlight,
              physical damages, and theft/
              vandalization. They are also available
              with features for sound attenuation,
              especially for rotating equipment .
            </p>
          </div>
          <div class="product">
            <div class="product__image"></div>
            <span @click="$router.push('/products/cable-management')">Encase I.T.</span>
            <p>
              These enclosures are designed to
              house data and telecommunication
              equipment indoors and outdoors.  They
              provide protection from rain, sunlight,
              physical damage and theft/
              vandalization
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cable-management-and-support",
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
.enclosures {
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
  background: grey;
  margin-bottom: 10px;
}
.product span {
  font-size: 18px;
  font-weight: 500;
  color: var(--primary);
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
}
.product span:hover {
  text-decoration: underline;
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