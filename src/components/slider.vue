<template>
  <div class="slider" ref="slider" id="slider">
    <div class="slider__inner">
      <div class="track" id="track" ref="track">
        <div class="card-container">
          <div class="card" ref="card" id="card">
            <img src="../assets/images/oil-and-gas.jpg" alt="">
            <h1 class="card-text">Power & Energy</h1>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <img src="../assets/images/oil-and-gas-3.jpg" alt="">
            <h1 class="card-text">Oil & Gas</h1>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <img src="../assets/images/oil-and-gas-1.jpg" alt="">
            <h1 class="card-text">Power & Energy</h1>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <img src="../assets/images/oil-and-gas-2.jpg" alt="">
            <h1 class="card-text">Power & Energy</h1>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <img src="../assets/images/oil-and-gas-4.jpg" alt="">
            <h1 class="card-text">Power & Energy</h1>
          </div>
        </div>
        <div class="card-container">
          <div class="card">
            <img src="../assets/images/oil-and-gas-4.jpg" alt="">
            <h1 class="card-text">Power & Energy</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <button class="prev" @click="prev" id="prev" ref="prev">
        <span class="material-icons">
          arrow_left
        </span>
      </button>
      <button class="next" @click="next" id="next" ref="next">
        <span class="material-icons">
          arrow_right
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      sliderWidth: 0,
      index: 0,
      translateValue: 250
    }
  },
  methods: {
    prev() {
      if (this.index > 0) {
        this.$refs.prev.style.display = 'none'
        this.$refs.track.style.transform = `translateX(-${0}px)`
      }
    },
    next() {
      this.$refs.prev.style.display = 'block'
      this.index ++
      if (this.$refs.slider.clientWidth / 5 < this.$refs.card.clientWidth) {
        this.$refs.track.style.transform = `translateX(-${this.$refs.card.clientWidth}px)`
      } else {
        this.$refs.track.style.transform = `translateX(-${this.$refs.card.clientWidth}px)`
      }

    },
    mounted() {
      this.sliderWidth = this.$refs.slider.clientWidth
    }
  }
}
</script>

<style scoped>
.slider {
  width: 5000px;
  max-width: 100%;
  margin: 0 auto;
  min-height: 200px;
}
.slider__inner {
  overflow: hidden;
}
.track {
  display: inline-flex;
  transition: transform .3s ease;
}
.card-container {
  width: 1000px;
  height: 400px;
  flex-shrink: 0;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}
.card:before {
  content: '';
  width: 0;
  height: 0;
  transition: width .3s ease;
  position: absolute;
  left: 0;
  top: 0;
}
.card:hover:before {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
}
.nav {
  position: absolute;
  right: 50px;
  top: 100px;
  display: flex;
}
.nav button {
  width: 30px;
  height: 30px;
  background: var(--primary);
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 5px;
}
.nav button:last-child {
  margin-right: 0;
}
span.material-icons {
  color: white;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h1.card-text {
  position: absolute;
  top: 20px;
  left: 20px;
  /*z-index: 1000;*/
  font-size: 20px;
  color: var(--white);
}
button.prev {
  display: none;
}

@media screen and (max-width: 4000px) {
  .card-container {
    width: 800px;
  }
}

@media screen and (max-width: 3000px) {
  .card-container {
    width: 600px;
  }
}

@media screen and (max-width: 2000px) {
  .card-container {
    width: 400px;
  }
}

@media screen and (max-width: 1440px) {
  .card-container {
    width: 270px;
  }
}
</style>