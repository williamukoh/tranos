<template>
  <div class="encase-electrical">
    <div class="encase-electrical-banner">
      <img src="../../../../assets/images/about-banner.jpg" alt="products banner">
      <div class="overlay"></div>
      <div class="container">
        <div class="encase-electrical-banner-text">
          <span>Products/Standard Enclosures</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="standard-encase">
        <span class="category-title">Standard Enclosures</span>
        <div class="standard-encase-details">
          <p>
            Our standard enclosure solutions are designed and fabricated using only the best grade
            steel, and as a quality-driven steel fabrication company, our enclosures are versatile and
            highly adaptable, offering a vast range of sizes and various accessories to cater to your
            specific needs, whether as electrical enclosures or as industrial enclosures.
          </p>
          <p>
            Designed, tested, and compliant with the highest industry operating standards, they are
            equipped with control systems that maintain temperatures within the specified operating
            range of internally mounted equipment. Each enclosure offers flexible thermal management
            solutions based on open and/or closed-loop design to enable convenient matching to load
            and environmental factors.
          </p>
        </div>
        <!--        1 -->
        <div class="standard-encase-category">
          <div class="standard-encase-category__text">
            <span>Battery cabinets</span>
            <p>
              Designed to house batteries for your UPS
              systems, communication, data centers, or
              emergency lighting services.
            </p>
            <p>
              These products come in various configurations
              for outdoor and indoor applications according
              to NEMA standards and can be customized to
              suit your need.
            </p>
          </div>
          <div class="standard-encase-category__image">
          </div>
        </div>
        <!--        2 -->
        <div class="standard-encase-category">
          <div class="standard-encase-category__text">
            <span>Free standing enclosure</span>
            <p>
              Our free-standing enclosures are designed to
              meet International Electrotechnical Commission
              Standards (IEC). They provide protection of IP55
              and internal segregation ranging from form 1 to
              form 4.
            </p>
            <p>
              These enclosures come in different heights,
              widths, and depths to meet your various needs.
              They are suitable for use in diverse industries
              including Oil and Gas, Manufacturing, Building,
              Healthcare, Energy, etc.
            </p>
          </div>
          <div class="standard-encase-category__image">
          </div>
        </div>
        <!--        3 -->
        <div class="standard-encase-category">
          <div class="standard-encase-category__text">
            <span>Wall mounted enclosures</span>
            <p>
              The wall-mounted enclosures are specifically
              designed to protect your electrical and
              electronic components from harsh
              environmental impact. We provide different
              material options - Aluminium, Stainless Steel,
              Powder Coated, and Mild Steel. They come in
              various designs for outdoor and indoor
              applications.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
              consequatur delectus dolor eum expedita in ipsa magnam nulla quasi!
            </p>
          </div>
          <div class="standard-encase-category__image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "standard-enclosures"
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
.standard-encase {
  padding: 40px 0;
}
.standard-encase-details {
  margin-bottom: 40px;
}
.standard-encase-details p {
  margin-bottom: 10px;
  line-height: 150%;
  font-size: 14px;
  color: grey;
}
.standard-encase-details p:last-child {
  margin-bottom: 0;
}
.standard-encase-category {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 20px;
  padding: 40px 0;
  justify-content: space-between;
  border-bottom: 1px solid grey;
}
.standard-encase-category__text {
   grid-column: 1/3;
 }
.standard-encase-category__text span {
  font-weight: 600;
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
  display: block;
  text-transform: capitalize;
}
.standard-encase-category__text p {
  font-size: 14px;
  line-height: 150%;
  color: grey;
  margin-bottom: 20px;
  width: 75%;
}
.standard-encase-category__image {
  width: 100%;
  height: 500px;
  background: var(--primary);
}
.category-title {
  margin-bottom: 10px;
  display: block;
  font-size: 18px;
  color: var(--primary);
  font-weight: 500;
}

@media screen and (max-width: 1000px) {
  .standard-encase-category {
    grid-template-columns: 1fr;
  }
}
</style>