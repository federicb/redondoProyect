<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/contact">Contacto</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #FAFAFA;
}

nav {
  padding: 3vh;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 0 .5rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
