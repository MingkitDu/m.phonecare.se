<template>
  <div class="catalog">
    <m-header />
    <m-bottom />
  </div>
</template>

<script>
import header from '../component/Header'
import bottom from '../component/Bottom'
export default {
  name: 'catalog',
  components: {
    'm-header': header,
    'm-bottom': bottom
  }
}
</script>

<style lang="scss" scoped>

</style>
