<template>
  <div class="products">
<!--    <h1 class="products-title_text__title">We are building a better world. <br><span>Thinking. Further.</span></h1>-->
    <div class="product-cards">
      <div class="first-card">
        <h3>Our products</h3>
      </div>
      <Card
          v-for="(cardDetail, index) in cardDetails"
          :key="index"
          :card-background="require(`../assets/images/${cardDetail.cardImage}`)"
          :card-title-before="cardDetail.cardTitleBefore"
          :card-title-after="cardDetail.cardTitleAfter"
          :card-image="cardDetail.cardImage"
          @card-action="$router.push(cardDetail.path)"
      />
    </div>
  </div>
</template>

<script>
import Card from "./card";
export default {
  name: "products",
  components: {Card},
  data() {
    return {
      cardDetails: [
        // { cardTitleBefore: 'Our products', cardTitleAfter: '', path: '/our-products', cardImage: 'factory-2.jpg' },
        { cardTitleBefore: 'Power protection', cardTitleAfter: '& Distribution', path: '/products/power-protection-and-distribution', cardImage: 'power.jpg' },
        { cardTitleBefore: 'Cable management', cardTitleAfter: '& support system', path: '/products/cable-management', cardImage: 'cables.jpg' },
        { cardTitleBefore: 'Enclosures', cardTitleAfter: '', path: '/products', cardImage: 'factory-2.jpg' },
        { cardTitleBefore: 'Warehouse storage system', cardTitleAfter: '', path: '/products/warehouse', cardImage: 'warehouse.jpg' },
        { cardTitleBefore: 'Gaskets', cardTitleAfter: '', path: '/products/gaskets', cardImage: 'factory-2.jpg' },
        { cardTitleBefore: 'Power generation', cardTitleAfter: '& back-up', path: '/products/power-generation', cardImage: 'factory-2.jpg' },
        { cardTitleBefore: 'Lights &', cardTitleAfter: 'wiring devices', path: '/products/lights', cardImage: 'factory-2.jpg' },
      ]
    }
  }
}
</script>

<style scoped>
.products {
  /*max-width: 99%;*/
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  background: #F2F2F2;
}
.product-cards {
  width: min(1100px, 95%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: 270px 270px;
  --card-width: 100%;
  --card-height: 100%;
  grid-gap: 1px;
  justify-content: center;
}
.first-card {
  width: 270px;
  height: 270px;
  background: var(--primary);
}
.first-card h3 {
  font-size: 20px;
  text-transform: capitalize;
  color: var(--white);
  padding: 10% 5%;
}

@media screen and (max-width: 1920px) {
  .product-cards {
    grid-template-columns: repeat(4, 270px);
    grid-template-rows: 270px 270px;
  }
}

@media screen and (max-width: 1200px) {
  .product-cards {
    grid-template-columns: repeat(4, 220px);
    grid-template-rows: 220px 220px;
  }
  .first-card {
    width: 220px;
    height: 220px;
  }
}

@media screen and (max-width: 1100px) {
  .product-cards {
    grid-template-columns: repeat(3, 1fr);
  }
  .first-card {
    width: 100%;
    height: 220px;
  }
}

@media screen and (max-width: 800px) {
  .products {
    padding: 40px 0;
  }
  .product-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .product-cards {
    grid-template-columns: 1fr;
  }
}
</style>