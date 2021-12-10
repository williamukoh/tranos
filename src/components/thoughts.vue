<template>
  <div class="thoughts">
      <div class="thoughts__inner">
        <p class="page-title">Thoughts <br> & Insights</p>
        <div class="cards">
          <div class="card" v-for="(cardDetail, index) in cardDetails" :key="index">
            <div class="card-image-wrapper">
<!--              <img :src="require(`../assets/images/${cardDetail.cardImage}`)" alt="">-->
            </div>
            <h3 class="h3">{{  cardDetail.cardTitleText }}</h3>
            <p>{{ cardDetail.cardSubtitle }}</p>
            <button>
              Read More
              <svg
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M10 17l5-5-5-5v10z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "thoughts",
  data() {
    return {
      cardDetails: [
        {
          cardImage: 'machine.jpg',
          cardTitleText: 'Title Text',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis '
        },
        {
          cardImage: 'machine.jpg',
          cardTitleText: 'Title Text',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis '
        },
        {
          cardImage: 'machine.jpg',
          cardTitleText: 'Title Text',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis '
        },
        {
          cardImage: 'machine.jpg',
          cardTitleText: 'Title Text',
          cardSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis '
        },
      ]
    }
  }
}
</script>

<style scoped>
.thoughts {
  width: 100%;
  padding: 40px;
  background: #f5f5f5;
}
.thoughts__inner {
  position: relative;
  width: min(1100px, 95%);
  margin: 0 auto;
}
.thoughts__inner p.page-title {
  font-size: 30px;
  color: var(--primary);
  font-weight: 600;
  line-height: 100%;
  position: relative;
  width: min-content;
  margin-bottom: 40px;
  white-space: nowrap;
}
.thoughts__inner p.page-title:after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(0);
  height: 2px;
  width: 60%;
  background: #5EC4D0;
  margin-top: 5px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-gap: 20px;
  justify-content: space-between;
}
.card-image-wrapper {
  width: 100%;
  height: 260px;
  background: var(--primary);
  margin-bottom: 20px;
}
.card button {
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  outline: none;
  background: transparent;
  color: var(--primary);
  cursor: pointer;
}
.card button svg {
  fill: var(--primary);
}
.card h3 {
  color: var(--primary);
  font-size: 18px;
}
.card p {
  font-size: 14px;
  margin-bottom: 10px;
}
.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(4, 200px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 200px;
  }
}

@media screen and (max-width: 1050px) {
  .cards {
    grid-template-columns: repeat(3, 260px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 260px;
  }
}

@media screen and (max-width: 900px) {
  .cards {
    grid-template-columns: repeat(2, 300px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 300px;
  }
}

@media screen and (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 300px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 300px;
  }
}

@media screen and (max-width: 750px) {
  .thoughts {
    padding:  40px 20px;
  }
  .cards {
    grid-template-columns: repeat(2, 280px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 280px;
  }
}

@media screen and (max-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 260px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 260px;
  }
}

@media screen and (max-width: 650px) {
  .cards {
    grid-template-columns: repeat(2, 240px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 240px;
  }
}

@media screen and (max-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 220px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 220px;
  }
}

@media screen and (max-width: 550px) {
  .cards {
    grid-template-columns: repeat(2, 200px);
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 200px;
  }
}

@media screen and (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
    justify-content: space-between;
  }
  .card-image-wrapper {
    height: 220px;
  }
}

/*@media screen and (max-width: 1300px) {*/
/*  .card-image-wrapper {*/
/*    width: 200px;*/
/*    height: 200px;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 1200px) {*/
/*  .card {*/
/*    width: 200px;*/
/*    height: 200px;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 750px) {*/
/*  .thoughts {*/
/*    padding: 20px 10px;*/
/*  }*/
/*  .cards {*/
/*    grid-template-columns: 1fr 1fr;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 400px) {*/
/*  .cards {*/
/*    grid-template-columns: 1fr;*/
/*  }*/
/*}*/
</style>