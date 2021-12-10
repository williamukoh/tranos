<template>
  <div class="about">
    <div class="about-banner">
      <img src="../assets/images/about-banner.jpg" alt="about banner">
      <div class="overlay"></div>
      <div class="container">
        <div class="about-banner-text">
          <span>About</span>
        </div>
      </div>
    </div>
    <div class="who-we-are">
      <div class="container">
        <div class="who-we-are__inner">
          <div class="who-we-are-text__text">
            <h2 class="about-page-title__title">Who we are</h2>
            <p>
              In over 13 years of existence, Tranos has grown into a reputable and internationally
              recognized brand. Our specialty in Engineering, Fabrication, Maintenance and Project management
              has made us highly sought after by both local and international companies.
            </p>
            <p>As a highly innovative company, our services also include the manufacturing
              of high-quality products in Power Generation, Energy Distribution, Control and Automation as well as Enclosures.</p>
            <p>
              Through our various design and fabrication processes, we have set a world-class standard in safety,
              quality, and efficiency. Our facilities is equipped with state-of-the-art equipment and resources, which enable
              us to carry out innovative designs, manufacturing and fabrication that comply with international standards.
            </p>
            <p>We are currently ISO 9001:2015 certified and ISO 45001:2018</p>
          </div>
        </div>
      </div>
    </div>
    <div class="vision-and-mission">
      <div class="container">
        <div class="vision-and-mission__inner">
          <div class="our-vision">
            <p class="vision-page-title">Our vision</p>
            <p class="our-vision__vision">To be a global leader in manufacturing and engineering solutions.</p>
          </div>
          <div class="our-mission">
            <p class="mission-page-title">Our mission</p>
            <p class="our-mission__mission">To be a cutting-edge, value-driven, solutions-oriented and innovative company offering
            products and solutions for individuals, businesses and communities.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="core-values">
      <div class="container">
        <div class="core-values__title">
          <div class="core-values__title-inner">
            <h1>Our values</h1>
            <p>
              With new developments in the 21st Century and increasing customer expectations, our focus at Tranos
              is value-added work. We don’t just put in a lot of time to what we do but ‘quality time’ supported
              by effective planning through every single project.
            </p>
          </div>
        </div>
        <div class="core-values__inner">
          <div class="core-value">
            <div class="core-value__title">
              <span>Can-do attitude</span>
            </div>
            <p>
              We approach situations and challenges with the mindsets that we have the ability to solve the problem or surpass
              the challenge. We aspire to maintain a positive attitude by always expecting the best possible outcome in every situation.
              In the course of duties and responsibilities. We always exhibit a can-do attitude which is a reflection of our results
              and obvious in our interactions with our colleagues and clients.

            </p>
          </div>
          <div class="core-value">
            <div class="core-value__title">
              <span>Proactive problem solving</span>
            </div>
            <p>
              We anticipate problems before they occur by thinking ahead. We don't wait for problems to occur before finding solutions.
              We proactively identify future problems and challenges, show resilience in the face of challenges, proactively manage
              tasks, monitor progress and finish work before deadlines. We belief in discovering and applying practical solutions to
              difficult problems
            </p>
          </div>
          <div class="core-value">
            <div class="core-value__title">
              <span>Surpassing expectations</span>
            </div>
            <p style="margin-bottom: 10px">
              By consistently having a sense of urgency, walking the extra mile,
              and delivering high-quality services, we strive to surpass customers’
              expectations and earn their trust.
            </p>
            <p>
              Our people are exemplary individuals who delight in going the extra mile to
              meet the needs and expectations of our clients.
              This we achieve through Customer-oriented relationships, Professionalism,
              Exceptional Service Delivery and Unequalled Teamwork
            </p>
          </div>
          <div class="core-value">
            <div class="core-value__title">
              <span>Continuous learning</span>
            </div>
            <p>
              For every member of the Tranos Family, pursuing growth and continuous learning is
              what we hold dear as part of our daily activities. This way our capacity for
              innovation and developing sustainable solutions becomes limitless.
            </p>
          </div>
          <div class="core-value">
            <div class="core-value__title">
              <span>Responsibility and accountability</span>
            </div>
            <p>
              A very important part of our culture at Tranos is Responsibility and Accountability.
              This sums up the whole of what we do. An individual in Tranos is always responsible
              and accountable for their results no matter the outcome. With sense of ownership,
              we are responsible and accountable to all our customers alike and our fellow employees
              as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.about {
  position: relative;
  top: 60px;
}
.about-banner {
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
.about-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  position: absolute;
  left: 0;
  top: 0;
}
h2.about-page-title__title {
  font-size: 25px;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: 5px;
  font-weight: 400;
}
.about-banner-text {
  width: 100%;
  height: 200px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}
.about-banner-text span {
  text-transform: uppercase;
  font-size: 20px;
  color: var(--white);
  display: block;
}
.who-we-are {
  width: 100%;
  background: white;
  padding: 70px 0;
}
.who-we-are__inner {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
}
.who-we-are-text__text {
  grid-column: 1/11 !important;
}
.who-we-are-text__text p {
  font-size: 16px;
  line-height: 200%;
  font-weight: 400;
  margin-bottom: 20px;
}
.who-we-are-text__text p:nth-child(2) {
  font-weight: 400;
  font-size: 20px;
}
.vision-and-mission {
  width: 100%;
}
.vision-and-mission__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.our-vision {
  background: #f5f5f5;
  padding: 70px;
}
.our-mission {
  background: var(--primary);
  padding: 70px;
}
.vision-page-title,
.mission-page-title {
  font-size: 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.vision-page-title {
  color: var(--primary);
}
.mission-page-title {
  color: white;
}
.our-vision__vision,
.our-mission__mission {
  font-size: 18px;
  line-height: 200%;
}
.our-mission__mission {
  color: white;
  font-weight: 200;
}
.core-values {
  padding: 70px 0;
  width: 100%;
}
.core-values__inner {
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-gap: 40px;
  justify-content: space-between;
}
.core-values__title {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 40px;
}
.core-values__title-inner {
  grid-column: 1/11;
}
.core-values__title-inner h1 {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
}
.core-values__title-inner p {
  line-height: 200%;
  font-size: 16px;
}
.core-value__title {
  padding: 10px 0;
  border-bottom: 2px solid black;
  margin-bottom: 15px;
}
.core-value__title span {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  /*white-space: nowrap;*/
}
.core-value p {
  font-size: 16px;
  line-height: 180%;
}
.who-we-are-text__text {
  grid-column: 1/3;
}

@media screen and (max-width: 1000px) {
  .who-we-are__inner {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  .core-values__inner {
    grid-template-columns: 1fr 1fr;
  }
  .vision-and-mission__inner {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 800px) {
  .core-values__inner {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 600px) {
  .our-vision,
  .our-mission {
    padding: 40px;
  }
}
</style>