<template>
  <div class="cars-wrap"> 
      <swiper class="swiper" ref="mySwiper" :options="swiperOption" style="padding: 20px;">
        <swiper-slide :key="1"><carItem height="820px" /></swiper-slide>
        <swiper-slide :key="2"><carItem /></swiper-slide>
        <swiper-slide :key="3"><carItem /></swiper-slide>
        <swiper-slide :key="4"><carItem /></swiper-slide>
        <swiper-slide :key="5"><carItem /></swiper-slide>
        <swiper-slide :key="6"><carItem /></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import carItem from "@/components/carItem";
export default {
  name: "Cars",
  components: { Swiper, SwiperSlide, carItem },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 60,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
      }
    };
  },
  directive: {
    swiper: directive
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext();
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>