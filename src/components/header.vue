<template>
  <header>
    <div class="container">
      <div class="header__inner">
        <img src="../assets/images/logo-1.png" alt="logo" @click="$router.push('/')">
        <nav>
          <router-link :to="navLink.path" v-for="(navLink, index) in navLinks" :key="index">{{ navLink.name }}</router-link>
        </nav>
        <svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            @click="$emit('toggle-out-mobile-menu')"
            v-if="!isMobileNavOut"
        ><path d="M0 0h24v24H0V0z" fill="none"/>
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
  props: ["navLinks", "isMobileNavOut"]
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  padding: 20px 0;
  z-index: 999;
  background: white;
}
.header__inner {
  display: flex;
  align-items: center;
}
.header__inner img {
  margin-right: auto;
  width: 150px;
  cursor: pointer;
}
.header__inner nav a {
  margin-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  color: var(--primary);
}
.header__inner nav a:last-child {
  margin-right: 0;
}
svg {
  fill: var(--primary);
  cursor: pointer;
  display: none;
}

@media screen and (max-width: 1000px) {
  .header__inner img {
    width: 150px;
  }
  svg {
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