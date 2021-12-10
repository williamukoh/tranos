<template>
  <div class="clients">
    <p class="page-title">Our clients & partners</p>
    <div class="container client-cards">
      <Carousel
          :perPage="10"
          :navigationEnabled="true"
          :paginationEnabled="false"
          :perPageCustom="[[300, 1], [400, 2], [768, 4], [1024, 10]]"
          :autoplay="true"
      >
        <Slide v-for="(client, index) in clients" :key="index">
          <div class="client-card">
            <img :src="require(`../assets/images/${client}`)" alt="">
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "clients",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      clients: ['coy.png', 'google.jpg', 'intel.png', 'kp.png', 'your.png', 'coy.png', 'google.jpg', 'intel.png', 'kp.png', 'your.png', 'coy.png', 'google.jpg', 'intel.png', 'kp.png', 'your.png']
    }
  }
}
</script>

<style scoped>
.clients {
  padding: 100px 40px;
  width: 100%;
  background: var(--white);
}
p.page-title {
  text-align: center;
  font-size: 28px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 30px;
}
.client-cards {
  width: min(1100px, 95%);
}
.client-card {
  width: 100px;
  height: 100px;
  border: 1px solid #e8e8e8;
  margin-right: 10px;
  display: flex;
  padding: 10px;
}
.client-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  margin: auto;
}

@media screen and (max-width: 400px) {
  .client-card {
    width: 100%;
    height: auto;

  }
}
</style>