<template>
  <div id="section3" class="mt-100"></div>
  <div class="container">
    <div class="wrap--gallery">
      <h1 class="title-gallery">
        Примеры продукции
        <hr />
      </h1>
      <div class="row">
      <img
        class="img col-3"
        v-for="index in 17"
        :key="index"
        :src="`/img/${index}.jpeg`"
        alt=""
      />
    </div>
    </div>
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
.img{
  padding: 40px;
  transition: 0.5s all ease;
}
.img:hover{
  padding: 20px;
}
.wrap--gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include fluid("margin-top", 200);
}
.title-gallery {
  @include fluid("font-size", 40);
  @include fluid("width", 396);
  @include fluid("margin-bottom", 70);
}
</style>
