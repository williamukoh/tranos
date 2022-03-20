<template>
  <div class="card" @click="$emit('card-action')">
    <div class="overlay"></div>
    <img :src="require(`../assets/images/${cardImage}`)" alt="">
    <h3 class="card-title" :class="{mag: cardTitleAfter === ''}">{{cardTitleBefore }} <br> {{ cardTitleAfter }}</h3>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["cardTitleBefore", "cardTitleAfter", "cardImage"],
}
</script>

<style scoped>
.card {
  width: var(--card-width, 100%);
  height: var(--card-height, 100%);
  position: relative;
  cursor: pointer;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .6);
  width: 100%;
  height: 100%;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity .3s ease;
  background: var(--primary);
  opacity: 0;
  z-index: 100;
}
.card:hover::before {
  width: 100%;
  height: 100%;
  opacity: 1;
}
.card h3.card-title {
  z-index: 100;
  position: absolute;
  top: 10px;
  font-size: 20px;
  text-transform: capitalize;
  color: var(--white);
  padding: 5%;
}
.card:hover h3.card-title {
  color: var(--card-title-hover-color, white);
}
svg {
  position: absolute;
  bottom: 20px;
  width: 40px;
  height: 40px;
}
.card:hover svg {
  fill: white;
}
.mag {
  width: 70%;
}

@media screen and (max-width: 1920px) {
  .card {
    --card-height: 270px;
  }
  .card h3.card-title {
    font-size: 20px;
  }
}

@media screen and (max-width: 1200px) {
  .card {
    --card-height: 220px;
  }
}
</style>