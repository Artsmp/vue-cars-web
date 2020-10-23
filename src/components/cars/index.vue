<template>
  <div class="cars-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/img/cars-logo.png" alt="">
          <span>Mustang 2019款</span>
        </h4>
        <p class="attr">新能源汽车  5座</p>
      </header>
      <div class="cars-content"></div>
      <footer></footer>
    </section>
    <span @click="test">汽车列表</span>
  </div>
</template>

<script>
  export default {
    name: 'Cars',
    methods: {
      test() {
        this.$router.push('/user')
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>