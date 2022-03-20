<template>
  <nav :class="{'mobile-menu-out': isMobileMenuOut}">
    <div class="mobile-menu-header">
      <img src="../assets/images/logo-white.png" alt="logo" @click="goToHome">
    </div>
    <div
        class="mobile-menu-link"
        v-for="(_menu, index) in menu"
        :key="index"
    >
      <div class="mobile-menu-dropdown" v-if="_menu.name.toLowerCase()==='products'">
        <span
            @click="toggleMobileDropdown"
        >
          {{ _menu.name }}
          <svg
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#ffffff"
          >
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M7 10l5 5 5-5H7z"/>
                  </svg>
        </span>
        <ul v-if="showMobileDropdown">
          <li @click="$emit('navigate', '/products/power-protection-and-distribution')">Power Protection & Distribution</li>
          <li @click="$emit('navigate', '/')">Cable Management & Support System</li>
          <li @click="$emit('navigate', '/')">Enclosures</li>
          <li @click="$emit('navigate', '/')">Warehouse storage system</li>
          <li @click="$emit('navigate', '/')">Gaskets</li>
          <li @click="$emit('navigate', '/')">Power generation and backup</li>
          <li @click="$emit('navigate', '/')">Lights & wiring devices</li>
        </ul>
      </div>
      <ul class="mobile-menu__main-menu" v-else>
        <li @click="$emit('navigate', _menu.path)">{{ _menu.name }}</li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: "mobile-nav",
  props: ["menu", "isMobileMenuOut"],
  data() {
    return {
      showMobileDropdown: false
    }
  },
  methods: {
    goToHome() {
      if (this.$route.path!=='/') {
        this.$router.push('/')
      }
      this.$emit('go-to-home')
    },
    toggleMobileDropdown() {
      this.showMobileDropdown = !this.showMobileDropdown
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 70%;
  height: 100vh;
  z-index: 1000;
  background: var(--primary);
  padding: 20px 40px;
  transition: all .5s ease;
  transform: translateX(-100%);
}
.mobile-menu__main-menu li {
  display: block;
  margin-block-end: 10px;
  color: var(--white);
  font-size: 14px;
  text-decoration: none;
}
.mobile-menu-out {
  transform: translateX(0);
}
.mobile-menu-header {
  margin-bottom: 40px;
}
.mobile-menu-header img {
  width: 100px;
}
.mobile-menu-dropdown {
  margin-bottom: 10px;
}
.mobile-menu-dropdown > span {
  margin-block-end: 5px;
  color: var(--white);
  font-size: 14px;
  display: flex;
  align-items: center;
}
.mobile-menu-dropdown ul li {
  list-style: none;
  margin-block-end: 10px;
  color: var(--white);
  font-size: 14px;
}
</style>