<template>
  <div class="wrap--title-gallery">
    <h1 class="title-gallery">Примеры продукции <hr></h1>
  </div>

  <div class="slider" id="section3">
    <swiper
      :modules="modules"
      :slides-per-view="5"
      :space-around="50"
      :watchSlidesProgress="true"
      navigation
      :pagination="{ dynamicBullets: true }"
      :loop="true"
    >
      <swiper-slide class="swiper__img" v-for="index in 17" :key="index"
        ><img class="img" :src="`/img/${index}.jpeg`" alt=""
      /></swiper-slide>
    </swiper>
    <hr />
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
.slider {
  @include fluid("margin-top", 100);
  user-select: none;
}
.swiper__img {
  display: flex;
  align-self: center;
}
.wrap-btn-slider {
  position: relative;
}
.wrap--title-gallery {
  display: flex;
  justify-content: center;
  @include fluid("margin-top", 200);
}
.title-gallery {
  @include fluid("font-size", 40);
  @include fluid("width", 400);
}
</style>
