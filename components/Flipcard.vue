<template>
  <div class="wrap">
    <div class="flipcard"  @mouseover="FlareRight" @mouseleave="FlareLeft">
      <div class="back backflare shadow"><span v-html="backHtml"></span></div>
      <div class="front flare bigshadow" :class="FlipClass"><span><img :src="frontPic"></span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlipCard',
  props: ['frontPic', 'backHtml', 'link'],
  data() {
    return {
      FlipClass: ""
    }
  },
  mounted() {
  },
  methods: {
    FlareRight() {
      this.FlipClass = "flare_right"
    },
    FlareLeft() {
      this.FlipClass = "flare_Left"
    }
  }
}
</script>

<style scoped>
img {
  object-fit: cover;
  max-width: 14rem;
  max-height: 14rem;
  margin: 1rem;
}
.wrap{
  display: flex;  
  justify-content: center;
  align-items: center;
}
.flipcard{
  cursor: pointer;
  width: 16rem;
  height: 16rem;
  position: relative;
  perspective: 1000px;
}
.flipcard:hover .back{
}
.flipcard .front{
/* background: linear-gradient(to bottom, rgb(223, 212, 252) 0%, rgb(239, 237, 245) 100%);*/
  background-color: rgb(231, 223, 253);
  position: absolute;
  border: 1px solid rgb(215, 215, 215);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;  
  justify-content: center;
  align-items: center;
  transition: 600ms ease-out;
  backdrop-filter: blur(7px);
}
.flipcard:hover .front{
  background-color: rgb(197, 176, 253);
  transform: rotatex(-45deg) translateY(-2rem);
/*    background: linear-gradient(to bottom, rgb(129, 123, 146) 0%, rgb(239, 237, 245) 100%);*/
}
.back {
  background: white;
  position: absolute;  
  border: 1px solid rgb(215, 215, 215);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;  
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 1rem;
  height: 4rem;
  width: calc(100% - 2rem);
}
</style>