<template>
  <div class="all-projects">
    <carousel
    :margin="20"
    :dots="false"
    :responsive="{0:{items:1, nav:true}, 600:{items:3, nav:true}, 1200: {items: 3, nav: true}, 1920: {items: 3, nav: true}}"
    :navText="[`<span style='color: #003491; font-size: 20px'><</span>`, `<span style='color: #003491; font-size: 20px'>></span>`]"
    >
      <div class="card" v-for="(cardDetail, index) in cardDetails" :key="index">
        <img :src="require(`../../assets/images/${cardDetail.cardImage}`)" alt="">
        <div class="card-text">
          <h1>{{ cardDetail.cardTitle }}</h1>
          <p>{{ cardDetail.cardSubtitle }}</p>
          <button>Read more</button>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: "all-projects",
  components: {carousel},
  data() {
    return {
      cardDetails: [
        {
          cardImage: 'power.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
        {
          cardImage: 'power.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
        {
          cardImage: 'machine.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
        {
          cardImage: 'machine.jpg',
          cardTitle: 'REFURBISHING OLD GEARS',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacinia enim vel blandit. In placerat, ex nec sodales elementum.'
        },
      ]
    }
  }
}
</script>

<style scoped>
.card {
  width: 350px;
  height: 350px;
  position: relative;
  cursor: pointer;
}
.card-text {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.card:before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  transition: width .3s ease;
}
.card:hover:before {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.card:hover .card-text {
  display: flex;
}
.card-text h1 {
  color: var(--white);
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.card-text p {
  color: var(--white);
  font-size: 14px;
  margin-bottom: 40px;
}
.card-text button {
  width: min-content;
  padding: 10px 20px;
  white-space: nowrap;
  font-weight: 600;
  background: var(--primary);
  color: var(--white);
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .card {
    height: 300px;
    width: 300px;
  }
}

@media screen and (max-width: 850px) {
  .card {
    height: 200px;
    width: 200px;
  }
}

@media screen and (max-width: 600px) {
  .card {
    height: 100%;
    width: 100%;
  }
}

</style>