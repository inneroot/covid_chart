<template>
    <p>
      <slot></slot> {{ current_view }}
      (<span v-if="current_change >= 0">+</span>
      {{ current_change }})
    </p>
</template>

<script>
export default {    
  name: 'DayPlus',
  props: ['current', 'change'],
  data() {
    return {
      current_view: 0,
      current_change: 0
    }
  },
  mounted() {
    this.current_view = 0
    this.current_change = 0
    const id = setInterval(frame, 5);
    function frame() {
    if (this.current_view >= this.current - 10) {
      clearInterval(id);
      this.current_view = this.current
    } else {
      this.current_view+=10
    }
  }
    this.animate()
  },
  methods: {
    animate() {
      this.current_view = this.current
      this.current_change = this.change
    }
  }
}
</script>

<style></style>