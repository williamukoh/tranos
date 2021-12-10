<template>
  <div class="projects">
    <div class="projects__inner">
      <header>
        <h1>Recent projects</h1>
        <nav>
          <router-link :to="_nav.path" v-for="(_nav, index) in nav" :key="index">{{ _nav.name }}</router-link>
        </nav>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "projects",
  data() {
    return {
      nav: [
        { name: 'All projects', path: '/' },
        { name: 'Power & Energy', path: '/power-and-energy' },
        { name: 'Oil & Gas', path: '/oil-and-gas' },
        { name: 'Manufacturing & industry', path: '/manufacturing-and-industry' },
        { name: 'Residential & commercial', path: '/residential-and-commercial' },
        { name: 'Telecommunications', path: '/telecommunications' },
      ]
    }
  },
}
</script>

<style scoped>
.projects {
  width: 100%;
  padding: 40px;
  background: var(--primary);
}
.projects__inner {
  width: min(1100px, 100%);
  margin: 0 auto;
}
.projects__inner header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.projects__inner header h1 {
  color: var(--white);
  font-weight: 500;
  font-size: 20px;
  width: 20%;
  flex-shrink: 0;
}
.projects__inner header nav {
  display: grid;
  grid-template-columns: repeat(6, auto);
  width: 80%;
}
.projects__inner header nav a {
  text-decoration: none;
  color: var(--white);
  font-size: 12px;
  border-right: 1px solid white;
  padding: 0 5px;
  white-space: pre-wrap;
  text-align: center;
}
.projects__inner header nav a:last-child {
  border-right: none;
}

@media screen and (max-width: 1200px) {
  .projects {
    padding: 40px;
  }
  .projects__inner header {
    flex-direction: column;
  }
  .projects__inner header h1 {
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }
  .projects__inner header nav {
    width: 100%;
  }
  .projects__inner header nav a {
    font-size: 10px;
    padding: 0;
    border-right: none;
  }
}
.nav-btn {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.nav-btn button {
  width: auto;
  padding: 5px;
  border: 1px solid grey;
  background: transparent;
  color: grey;
  cursor: pointer;
}
button.prev-btn {
  margin-right: 5px;
}

@media screen and (max-width: 768px) {
  .projects__inner header nav {
    grid-column-gap: 5px;
  }
  .projects__inner header nav a {
    text-align: center;
    font-size: 8px;
  }
}

@media screen and (max-width: 550px) {
  .projects {
    padding: 20px 10px;
  }
}

</style>