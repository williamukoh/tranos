<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="footer-top__inner">
          <header>
            <img src="../assets/images/logo-white.png" alt="">
            <p>Contacts</p>
            <p>Helpful links</p>
          </header>
          <div class="footer-top-body">
            <div class="about-tranos">
              <p>TRANOS is the engineering and
                manufacturing leader adding value to
                lives through innovative solutions.
              </p>
              <p>In over a decade of existence, Tranos
                has grown into a reputable and
                internationally recognised brand.
              </p>
            </div>
            <div class="contacts">
              <p class="emergency">Contacts</p>
              <div class="address">
                <div class="circle">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <p>22A Guinness Road, <br>Off ACME Road, <br>Ogba, Ikeja, <br> Lagos - Nigeria
                </p>
              </div>
              <div class="phone">
                <div class="circle">
                  <i class="fas fa-phone"></i>
                </div>
                <p>+234 803 444 8566</p>
              </div>
              <div class="email">
                <div class="circle">
                  <i class="fas fa-envelope"></i>
                </div>
                <p>info@tranos.ng</p>
              </div>
            </div>
            <div class="links">
              <router-link to="/about">About</router-link>
              <router-link to="/products">Products</router-link>
              <router-link to="/industry-we-serve">Industry we serve</router-link>
              <router-link to="/services">Services</router-link>
              <router-link to="/projects">Projects</router-link>
            </div>
            <div class="socials">
              <a href="https://www.facebook.com/tranos" class="social-circle" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/tranos" class="social-circle" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/tranos" class="social-circle" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/tranos" class="social-circle" target="_blank">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component"
}
</script>

<style scoped>
footer {
  width: 100%;
  position: relative;
  top: 60px;
}
.footer-top {
  width: 100%;
  padding: 100px 0;
  background: var(--primary);
}
.footer-top__inner header{
  width: min(1100px, 95%);
  margin: 0 auto 30px auto;
  display: grid;
  grid-template-columns: 40% 25% repeat(2, 1fr);
  align-items: flex-end;
  border-bottom: 1px solid var(--white);
  padding-bottom: 20px;
  grid-column-gap: 30px;
}
.footer-top-body {
  width: min(1100px, 95%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40% 25% repeat(2, 1fr);
  grid-column-gap: 30px;
}
.footer-top__inner header img {
  width: 150px;
}
.footer-top__inner header p {
  color: var(--white);
}
.about-tranos {
  width: 60%;
}
.about-tranos p {
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--white);
  font-weight: 200;
}
.footer-top-body .contacts .address,
.footer-top-body .contacts .phone,
.footer-top-body .contacts .email {
  display: flex;
  margin-bottom: 10px;
}
.footer-top-body .contacts .email {
  margin-bottom: 0;
}
.footer-top-body .contacts .address p,
.footer-top-body .contacts .phone p,
.footer-top-body .contacts .email p {
  font-size: 14px;
  font-weight: 200;
  color: var(--white);
  line-height: 150%;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--white);
  flex-shrink: 0;
  margin-right: 20px;
  display: flex;
}
.links a {
  list-style: none;
  color: var(--white);
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 10px;
  display: block;
  text-decoration: none;
}
.links a:last-child {
  margin-bottom: 0;
}
.socials {
  display: flex;
  justify-content: space-between;
}
.social-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid var(--white);
  display: flex;
  text-decoration: none !important;
}
.fab {
  margin: auto;
  color: var(--white);
  font-size: 12px;
}
.circle .fas {
  font-size: 10px;
  color: var(--primary);
  margin: auto;
}
.emergency {
  color: var(--white);
  font-size: 14px;
  margin-bottom: 10px;
  text-decoration: underline;
  font-weight: 400 !important;
  display: none;
}

@media screen and (max-width: 1000px) {
  .footer-top {
    padding: 20px 10px;
  }
  .footer-top__inner header,
  .footer-top-body {
    grid-template-columns: repeat(4, 1fr);
  }
  .about-tranos {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .footer-top-body {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  .socials {
    justify-content: flex-start;
  }
  .social-circle {
    margin-right: 10px;
  }
  .footer-top__inner header p {
    display: none;
  }
  .emergency {
    display: block;
  }
}
</style>