<template>
  <div class="why">
    <div class="container">
      <div class="why__inner">
        <div class="column left">
          <p class="page-title">why choose us</p>
          <span>
            Customer satisfaction is very central to our quality
          management system. From the deployment of high
          precision CNC machines and the engagement of
          competent personnel to the institution of standard errorproof processes, we guarantee the quality of our
          products and services. Our Quality Management
          System is certified to meet the requirements of the ISO
          9001:2015 standard.
          </span>
        </div>
        <div class="column right">
          <video src="../assets/videos/tranos-video.mp4" autoplay loop muted></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "why",
}
</script>

<style scoped>
.why {
  background: #f5f5f5;
  position: relative;
  /*height: 600px;*/
  height: 600px;
}
.why__inner {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  position: relative;
}
.column {
  height: 500px;
  padding: 80px 0;
}
.left {
  --page-title-text-transform: capitalize;
  --page-title-text-weight: 600;
  --title-margin: 0 0 40px 0;
  background: #f5f5f5;
}
.right {
  height: 100%;
  float: right;
  width: 100%;
}
.right video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p.page-title {
  text-transform: var(--page-title-text-transform, uppercase);
  font-weight: var(--page-title-text-weight, 400);
  color: var(--primary);
  position: relative;
  font-size: 30px;
  margin: var(--title-margin, 0);
}
p.page-title:after {
  content: '';
  position: absolute;
  top: 120%;
  left: 0;
  height: 2px;
  width: 100px;
  background: #5EC4D0;
}
.left span {
  line-height: 200%;
  font-size: 14px;
}

@media screen and (max-width: 3000px) {
  .columns {
    /*grid-template-columns: repeat(8, 1fr);*/
    width: 100%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1200px) {
  .columns {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 0 auto;
  }
  .left {
    grid-area: 1/1/2/2;
    padding: 40px 10px;
  }
  .right {
    grid-area: 1/2/2/-1;
  }
}

@media screen and (max-width: 1000px) {
  .why {
    height: auto;
  }
  .why__inner {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    padding: 40px 0;
  }
  .column {
    height: auto;
  }
  .left {
    padding: 0 !important;
  }
  .right {
    grid-area: 2/1/3/-1;
  }
}

@media screen and (max-width: 850px) {
  .left {
    padding: 20px 10px;
  }
}
</style>