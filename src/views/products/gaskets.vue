<template>
  <div class="power-protection">
    <div class="container">
      <div class="power-protection__inner">
        <span class="product-name">Gaskets</span>
        <div class="product-image">
          <img src="../../assets/images/gaskets-1.jpg" alt="">
        </div>
        <div class="product-details">
          <p>
            All our gaskets are manufactured to the highest quality
            standards in compliance with ASME B16.20 and ASME
            B16.21 using quality materials and following the
            approved manufacturing processes according to ISO
            9001:2015 standard to ensure overall quality and
            consistency.
          </p>
        </div>
        <div class="product-types">
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/gaskets-2.jpg" alt="sockets">
            </div>
            <span @click="$router.push('/products/warehouse')">Weseal spiral wound gaskets</span>
            <p style="margin-bottom: 10px">
              Our spiral wound gaskets are produced
              by winding metallic strips with soft
              non
              -metallic filler material. The metal
              windings provide strength and
              resilience, while the non
              -metallic filler
              portion conforms to the irregularities
              of the flanges aiding in the joint seal.
            </p>
            <p>
              This gasket can be made to include a
              solid metal outer ring, solid metal inner
              ring, or both. The outer ring serves to
              center the windings onto the sealing
              face, utilizing the inner edge of the
              bolts. The inner ring acts to help support
              the inner diameter of the windings to
              help prevent the inward buckling of the
              windings.
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/gaskets-3.jpg" alt="isolators">
            </div>
            <span @click="$router.push('/products/warehouse')">Stainless Steel Tanged Graphite Gasket</span>
            <p style="margin-bottom: 10px">
              Our stainless-steel tanged gasket
              comprises two outer layers of graphite
              foil with a central tanged stainless-steel
              core 0.1mm thick mechanically bonded
              therefore no need for adhesive
            </p>
            <p>
              This material is commonly used as a gasket material in steam
              system applications, the petrochemical, and chemical
              industries, and as flange gaskets for piping and machinery. Its
              excellent sealing abilities are also used where corrosive media
              is present and can be used at cryogenic temperatures.
              Soft, flexible with high recovery and no
              aging. Impermeable to gases and liquids, inert, resistant
              to radiation, and excellent resistance to thermal shock.
              Low coefficient of friction, long-term stability, and
              excellent residual stress.
              Optimum material for thermal cycling applications and
              where vibration is a problem
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/gaskets-5.jpg" alt="electrical panel">
            </div>
            <span @click="$router.push('/products/warehouse')">Stainless Steel Reinforced Graphite Gasket</span>
            <p>
              Our stainless-steel reinforced graphite sheet
              material comprises two outer layers of graphite
              with a stainless-steel core 0.05mm thick.
            </p>
            <p>
              Stainless steel reinforced graphite gaskets are used in
              applications such as pumps, fitting, and valves with low
              gasket stresses. Its excellent sealing abilities are also used
              where corrosive media is present and can be used at
              cryogenic temperatures
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/gaskets-5.jpg" alt="electrical panel">
            </div>
            <span @click="$router.push('/products/warehouse')">Non-Asbestos Gasket</span>
            <p style="margin-bottom: 10px">
              Our non-asbestos gasket jointing material contains a
              mixture of aramid and glass fibers with a nitrile rubber
              binder. It’s an economical, general-purpose material for
              use in light to medium gasket stress applications. It
              exhibits good sealing and torque retention properties .
            </p>
            <p style="margin-bottom: 10px">
              Filling the spaces between two or more mating
              surfaces, generally to prevent leakage from or into
              the joining objects while under compression.
            </p>
            <p>
              They are specifically designed to satisfy the growing
              demand for numerous aggressive chemicals used by
              industries today including oils, fuels, gases, freons,
              papers & pulps. Its excellent sealing properties can be
              used in many applications including pipelines,
              radiators, boilers, and many other instances of flanged
              joints
            </p>
          </div>
          <div class="product">
            <div class="product__image">
              <img src="../../assets/images/gasket-6.jpg" alt="electrical panel">
            </div>
            <span @click="$router.push('/products/warehouse')">Standard PTFE Gaskets</span>
            <p style="margin-bottom: 10px">
              This gasket offers useful properties in various applications such as
              chemical resistance, thermal stability, cryogenic properties, low
              coefficient of friction, low surface energy, low dielectric constant,
              high volume, and surface resistivity, and flame resistance. These
              properties allow the use of the gasket in several fields such as:
            </p>
            <ul>
              <li>Chemical</li>
              <li>Electrical and Electronic</li>
              <li>Petrochemical</li>
              <li>Automotive</li>
              <li>Mechanical</li>
              <li>Medical</li>
              <li>Aeronautics</li>
              <li>Semiconductor and Food Industry</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gaskets",
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