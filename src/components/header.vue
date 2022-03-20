<template>
  <header>
    <div class="container">
      <div class="header__inner">
        <img src="../assets/images/logo-1.png" alt="logo" @click="goHome">
        <nav>
          <ul>
            <li v-for="(navLink, index) in navLinks" :key="index">
              <div
                  class="products-dropdown"
                  v-if="navLink.name.toLowerCase()==='products'"
              >
                <span>
                  {{ navLink.name }}
                  <svg
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#172673"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
                </span>
                <div>
                  <router-link to="/products/power-protection-and-distribution">Power Protection & Distribution</router-link>
                  <router-link to="/products/cable-management">Cable Management & Support System</router-link>
                  <router-link to="/products">Enclosures</router-link>
                  <router-link to="/products/warehouse">Warehouse storage system</router-link>
                  <router-link to="/products/gaskets">Gaskets</router-link>
                  <router-link to="/products/power-generation">Power generation and backup</router-link>
                  <router-link to="/products/lights">Lights & wiring devices</router-link>
                </div>
              </div>
              <router-link v-else :to="navLink.path">{{ navLink.name }}</router-link>
            </li>
          </ul>
        </nav>
        <svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            @click="$emit('toggle-out-mobile-menu')"
            v-if="!isMobileNavOut"
            class="hamburger"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
        <svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            @click="$emit('toggle-in-mobile-menu')"
            v-else
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19
          12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component",
  props: ["navLinks", "isMobileNavOut"],
  methods: {
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  /*padding: 20px 0;*/
  z-index: 999;
  background: white;
}
.header__inner {
  display: flex;
  align-items: center;
  height: 60px;
}
.header__inner img {
  margin-right: auto;
  width: 150px;
  cursor: pointer;
}
.header__inner nav {
  position: relative;
  height: 100%;
}
.header__inner nav ul {
  display: flex;
  gap: 20px;
  height: 100%;
}
.header__inner nav ul li {
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
}
.header__inner nav ul li a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  color: var(--primary);
}
.header__inner nav a:last-child {
  margin-right: 0;
}
.hamburger {
  fill: var(--primary);
  cursor: pointer;
  display: none;
}
.products-dropdown {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}
.products-dropdown div {
  position: absolute;
  top: 100%;
  background: var(--primary);
  width: auto;
  padding: 20px;
  display: none;
  flex-direction: column;
  gap: 20px;
}
.products-dropdown div a {
  white-space: nowrap;
  color: var(--white) !important;
  font-size: 14px !important;
  text-transform: capitalize !important;
  font-weight: 300 !important;
}
.products-dropdown span {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  color: var(--primary);
  cursor: pointer;
  display: flex;
  align-items: center;
}
.products-dropdown:hover div {
  display: flex !important;
}

@media screen and (max-width: 1000px) {
  .header__inner img {
    width: 150px;
  }
  .hamburger {
    display: block;
  }
  nav {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .header__inner img {
    width: 100px;
  }
}

</style>