<template>
  <carousel
      :autoplay="true"
      :nav="false"
      :items="5"
      :dots="false"
      :margin="10"
      :autoplayHoverPause="true"
      :responsive="{0: {items: 1, nav: false}, 600:{items:3, nav:false}, 1000:{items:4, nav:false}, 1200: {items: 5, nav: false}, 1920: {items: 5, nav: false}}"
  >
    <div class="card" v-for="(cardDetail, index) in cardDetails" :key="index">
      <img :src="require(`../assets/images/${cardDetail.image}`)" alt="oil">
      <div class="card-text">
        <h1>{{ cardDetail.cardTextBefore }} <br> {{ cardDetail.cardTextAfter }} </h1>
        <button>
          <span>Learn more</span>
          <svg
              height="16px"
              viewBox="0 0 24 24"
              width="16px"
              fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
          </svg>
        </button>
      </div>
    </div>

  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'MyComponent',
  components: { carousel },
  data() {
    return {
      cardDetails: [
        { image: 'site.jpg', cardTextBefore: 'Power &', cardTextAfter: ' Energy' },
        { image: 'site.jpg', cardTextBefore: 'Oil &', cardTextAfter: ' gas' },
        { image: 'site.jpg', cardTextBefore: 'Residential &', cardTextAfter: 'commercial' },
        { image: 'site.jpg', cardTextBefore: 'Industrial &', cardTextAfter: 'manufacturing' },
        { image: 'site.jpg', cardTextBefore: 'Power &', cardTextAfter: 'Energy' },
      ],
    }
  }
}
</script>

<style scoped>
.carousel {
  /*width: 100%;*/
}
.card {
  width: 212px;
  height: 336px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 3px;
}
.card-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
}
.card-text h1 {
  color: white;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 400;
  margin-bottom: auto;
}
.card-text button {
  position: absolute;
  height: 30px;
  width: 30px;
  background: white;
  border: none;
  outline: none;
  padding: 5px;
  bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: width .2s ease;
  border-radius: 5px;
}
.card-text button:after {

  /*width: 150px;*/
}
.card-text button span {
  display: none;
  font-size: 12px;
  margin-right: 4px;
  color: var(--primary);
  white-space: nowrap;
}
.card-text button svg {
  fill: var(--primary);
}
.card:hover .card-text button {
  width: min-content;
}
.card:hover .card-text button span {
  display: block;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s ease;
}
.card:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  background: black;
  transition: opacity .3s ease;
}
.card:hover:before {
  opacity: .3;
}

@media screen and (max-width: 1920px){
  .card {
    height: 336px;
  }
}

@media screen and (max-width: 1920px){
  .card {
    width: 100%;
  }
}

</style>