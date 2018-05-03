<template>
    <transition name="fade">
      <div class="m-sliderbar">
        <m-sliderbartag />
      </div>
    </transition>
</template>

<script>
import silderbarTag from './SliderbarTag'
export default {
  components: {
    'm-sliderbartag': silderbarTag
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }
  // .fade-leave-active  {
  //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  // }
  .fade-enter, .fade-leave-to {
    transform: translateX(50%);
    opacity: 0;
  }
  .m-sliderbar {
    position: fixed;
    z-index: 1001;
    background-color: #282828;
    color: #ffffff;
    right: 0;
    bottom: px2rem(100);
    top: px2rem(96);
    width: 50%;
    height: 100%;
  }

</style>
