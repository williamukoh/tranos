<template>
  <div class="industry-we-serve">
    <p class="page-title">Our services <br> <span>& the industries we serve</span></p>
    <div class="our-services">
      <div class="service">
        <span class="service-title">Fabrication</span>
        <p>
          We design and fabricate various structural and process modules,
          skids, equipment and parts to a very high level of equality and precision.
        </p>
        <p>
          We have an in-house team of engineers with in-depth knowledge and experience
          with various design software.
        </p>
      </div>
      <div class="service">
        <span>Installation & commissioning</span>
        <p>We don't just manufacture, we follow through to the last stage with installation and commissioning
        to ensure that all equipment manufactured or supplied are installed to give our customers peace of mind.</p>
      </div>
      <div class="service">
        <span>Maintenance</span>
        <p>
          We understand that maintaining sound operational conditions for Oil & Gas facilities is crucial in
        optimizing operations without compromising operational safety. It is with this understanding that we
        provide corrective and preventive maintenance services with a focus on minimizing any impact on customers
        operations
        </p>
      </div>
    </div>
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from "./carousel";
export default {
  name: "industry-we-serve",
  components: {MyComponent}
}
</script>

<style scoped>

.industry-we-serve {
  --page-title-text-transform: capitalize;
  --page-title-text-weight: 600;
  --title-margin: 0 auto 40px auto;
  --page-title-underline-position: 50%;
  --page-title-underline-position-transform: -50%;
  --page-title-underline-width: 40%;
  position: relative;
  width: min(1100px, 95%);
  margin: 0 auto;
  padding: 100px 0;
}
p.page-title {
  text-transform: capitalize;
  font-weight: 600;
  color: var(--primary);
  position: relative;
  font-size: 30px;
  width: min-content;
  margin: var(--title-margin, 0);
  text-align: center;
  white-space: nowrap;
  line-height: 100%;
}
p.page-title:after {
  content: '';
  position: absolute;
  top: 120%;
  height: 2px;
  width: 100px;
  background: #5EC4D0;
  left: 50%;
  transform: translateX(-50%);
}
p.page-title span {
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  color: darkgray;
}
.our-services {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-gap: 40px;
  margin-bottom: 40px;
  justify-content: space-between;
}
.our-services span {
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--primary);
  color: var(--primary);
  display: block;
  margin-bottom: 15px;
  padding: 5px 0;
}
.our-services p {
  line-height: 200%;
  font-size: 14px;
}

@media screen and (max-width: 1000px) {
  .industry-we-serve {
    padding: 40px 0;
  }
  .our-services {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 500px) {
  .our-services {
    grid-template-columns: 1fr;
  }
}
</style>