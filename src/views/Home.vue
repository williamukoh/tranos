<template>
  <div class="home">
    <Banner />
    <Products />
    <IndustryWeServe />
    <Why />
    <Projects />
    <Thoughts />
    <Clients />
    <Newsletter />
  </div>
</template>

<script>
import Banner from "../components/banner";
import Products from "../components/products";
import IndustryWeServe from "../components/industry-we-serve";
import Why from "../components/why";
import Projects from "../components/projects";
import Thoughts from "../components/thoughts";
import Clients from "../components/clients";
import Newsletter from "../components/newsletter";
export default {
  name: 'Home',
  components: {Newsletter, Clients, Thoughts, Projects, Why, IndustryWeServe, Products, Banner},
}
</script>

<style scoped>
.home {
  position: relative;
  top: 60px;
}
</style>
