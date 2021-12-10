<template>
  <div class="industry-we-serve">
    <p class="page-title">industry we serve</p>
    <p class="industry-page-subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
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
p.industry-page-subtitle {
  text-align: center;
  width: min(900px, 95%);
  max-width: 90%;
  margin: 0 auto 40px auto;
  line-height: 200%;
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
</style>