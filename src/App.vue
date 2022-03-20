<template>
  <div id="app">
<!--    <Header-->
<!--        :nav-links=navLinks-->
<!--        :is-mobile-nav-out="isMobileNavOut"-->
<!--        @toggle-out-mobile-menu="toggleOutMobileNav"-->
<!--        @toggle-in-mobile-menu="toggleInMobileNav"-->
<!--    />-->
<!--    <MobileNav-->
<!--        @go-to-home="goToHome"-->
<!--        @navigate="navigate($event)"-->
<!--        :is-mobile-menu-out="isMobileNavOut"-->
<!--        :menu="navLinks"-->
<!--    />-->
    <router-view/>
<!--    <FooterComponent />-->
  </div>
</template>

<style>
</style>
<script>
// import Header from "./components/header";
// import FooterComponent from "./components/footer-component";
// import MobileNav from "./components/mobile-nav";
export default {
  // components: {MobileNav, FooterComponent, Header},
  data() {
    return {
      navLinks: [
        { path: '/about', name: 'About' },
        { path: '/products', name: 'Products' },
        { path: '/industry-we-serve', name: 'Industry we serve' },
        { path: '/services', name: 'Services' },
        { path: '/projects', name: 'Projects' },
        { path: '/careers', name: 'Careers' },
        { path: '/contacts', name: 'Contacts' },
      ],
      isMobileNavOut: false,
    }
  },
  methods: {
    toggleOutMobileNav()  {
      this.isMobileNavOut = true
    },

    toggleInMobileNav() {
      this.isMobileNavOut = false
    },
    goToHome() {
      this.isMobileNavOut = false
    },
    navigate(event) {
      this.$router.push(event)
      this.isMobileNavOut = false
    }
  }
}
</script>

<style scoped>
@import "./assets/styles/style.css";

</style>