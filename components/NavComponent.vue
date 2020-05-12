<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/mainchart">Chart</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {}
</script>

<style>
ul {
  display: flex;
}
ul li {
  display: block;
  padding: 1rem;
}
</style>