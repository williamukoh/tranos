<template>
  <nav :class="{'mobile-menu-out': isMobileMenuOut}">
    <div class="mobile-menu-header">
      <img src="../assets/images/logo-white.png" alt="logo" @click="goToHome">
    </div>
    <ul>
      <li
          v-for="(_menu, index) in menu"
          :key="index"
          @click="$emit('navigate', _menu.path)"
      >
        {{ _menu.name }}
      </li>
    </ul>

  </nav>
</template>

<script>
export default {
  name: "mobile-nav",
  props: ["menu", "isMobileMenuOut"],
  methods: {
    goToHome() {
      this.$emit('go-to-home')
      this.$router.push('/')
    },
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
nav ul li {
  display: block;
  margin-bottom: 20px;
  color: var(--white);
  font-size: 14px;
  text-decoration: none;
}
nav a:last-child {
  margin-bottom: 0;
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
</style>