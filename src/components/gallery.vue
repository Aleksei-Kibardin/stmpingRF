<template>
  <div class="slider" id="section3">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-around="50"
      :watchSlidesProgress="true"
      navigation
      :pagination="{ dynamicBullets: true, }"
      :loop="true"
    >
      <swiper-slide class="swiper__img" v-for="index in 14" :key="index"
        ><img class="img" :src="`/img/${index}.jpeg`" alt="" loading="lazy"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.slider{
  @include fluid("margin-top", 100);
  user-select: none;
}
.swiper__img{
  display: flex;
  align-self: center;
}
</style>
