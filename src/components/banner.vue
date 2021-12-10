<template>
  <div class="banner">
    <img src="../assets/images/factory.jpg" alt="banner">
    <div class="overlay"></div>
    <div class="container">
      <div class="banner__inner">
        <h1>We are building a better world.
          <br>
          <span>Thinking. Further.</span>
        </h1>
        <p>
          TRANOS is the engineering and manufacturing leader adding value to lives through innovative solutions.
        </p>
        <button @click="$router.push('/about')">Read more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 65vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;
  padding: 40px;
}
.overlay {
  width: 100%;
  height: 100%;
  background: var(--primary);
  position: absolute;
  left: 0;
  top: 0;
  opacity: .4;
  z-index: 1;
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  position: absolute;
  left: 0;
  top: 0;
}
.banner__inner {
  position: relative;
  z-index: 2;
}
.banner__inner h1 {
  font-size: 60px;
  line-height: 100%;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 20px;
}
.banner__inner h1 span {
  font-size: 80px;
  color: white;
}
.banner__inner p {
  color: var(--white);
  font-size: 16px;
  line-height: 150%;
  font-weight: 300;
  max-width: 50%;
  margin-bottom: 20px;
}
button {
  padding: 10px 20px;
  background: var(--primary);
  border: 1px solid transparent;
  outline: none;
  color: var(--white);
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .banner {
    height: auto;
  }
  .banner__inner h1 {
    line-height: 120%;
  }
}

@media screen and (max-width: 1000px) {
  .banner__inner h1 {
    font-size: 40px !important;
    line-height: 150%;
  }
}

@media screen and (max-width: 980px) {
  .banner__inner h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 800px) {
  .banner__inner h1 {
    font-size: 55px;
  }
  .banner__inner p {
    max-width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .banner {
    height: auto;
    padding: 40px;
  }
  .banner__inner h1 span {
    font-size: 60px !important;
  }
}

@media screen and (max-width: 600px) {
  .banner {
    padding: 40px 10px;
  }
  .banner h1 {
    font-size: 50px;
  }
}

@media screen and (max-width: 450px) {
  .banner__inner h1 {
    font-size: 35px;
  }
}
</style>