<template>
  <div class="bodycontainer">
    <NavComponent />
    <nuxt />
  </div>
</template>

<script>
import NavComponent from '~/components/NavComponent.vue'

export default {
  components: {
    NavComponent
  }
}
</script>

<style></style>
