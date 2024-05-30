<template>
  <nav>
    <div class="container col-12 wrap-nav">
      <div class="logo">
        <img class="" src="/logo.svg" alt="логотип" />
        Штамповка.рф
      </div>

      <div
        class="menu-btn"
        :class="{ active: isActive }"
        @click="isActive = !isActive"
      >
        <span></span>
      </div>
      <div class="nav--ancors" :class="{ active: isActive }">
        <div class="ancor" @click="scrollToAnchor('#section1')">
          Главная
          <div class="ancor-line"></div>
        </div>
        <div class="ancor" @click="scrollToAnchor('#section2')">
          Деятельность
          <div class="ancor-line"></div>
        </div>
        <div class="ancor" @click="scrollToAnchor('#section4')">
          Услуги
          <div class="ancor-line"></div>
        </div>
        <div class="ancor" @click="scrollToAnchor('#section3')">
          Наша Продукция
          <div class="ancor-line"></div>
        </div>
        <div class="ancor" @click="scrollToAnchor('#section5')">
          Видео
          <div class="ancor-line"></div>
        </div>
        <div class="ancor" @click="scrollToAnchor('#section6')">
          Другая Деятельность
          <div class="ancor-line"></div>
        </div>
        <div class="ancor" @click="scrollToAnchor('#section7')">
          контакты
          <div class="ancor-line"></div>
        </div>
      </div>
      <div class="nav-contact--btn col-3">
        <span> +7-901-971-46-64</span>
        <span> spb9714664@yandex.ru</span>
      </div>
    </div>
  </nav>
  <header-vue></header-vue>
  <main @click="isActive = false">
    <about-activiti></about-activiti>
    <services-vue></services-vue>
    <gallery-vue></gallery-vue>
    <about-work></about-work>
  </main>
  <footerVue></footerVue>
</template>

<script setup>
import aboutActiviti from "./components/aboutActiviti.vue";
import galleryVue from "./components/gallery.vue";
import headerVue from "./components/header.vue";
import servicesVue from "./components/services.vue";
import footerVue from "./components/footer.vue";
import modalForm from "./components/modalForm.vue";
import aboutWork from "./components/aboutWork.vue";
import { ref } from "vue";

const isActive = ref(false);

const modalActive = ref(false);

const scrollToAnchor = (anchor) => {
  const element = document.querySelector(anchor);
  if (element) {
    element.scrollIntoView({
      top: 1000,
      behavior: "smooth",
    });
  }
};
</script>

<style lang="scss">
@import "./fluid.sass";
:root {
  @include fluid("--head-box-x", 230);
  @include fluid("--head-box-y", 100);
  @include fluid("--midle-box-x", -350);
  @include fluid("--midle-box-y", -100);
  @include fluid("--last-box-x", -250);
  @include fluid("--last-box-y", -100);
}
.logo {
  width: 100px;
  display: flex;
  align-items: center;
  font-size: 20px;
  img{
    width: 45px;
  }
}
.container {
  @include fluid("max-width", 1400);
}
body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: #467cf3;
  border-radius: 20px;
  border: 1px solid rgb(255, 255, 255);
}
.row > div {
  @include fluid("padding", 20);
}
nav {
  @include fluid("height", 100);
  @include fluid("font-size", 16);
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 4;
  top: 0;
}
.nav--ancors {
  display: flex;
  justify-content: space-around;
  @include fluid("gap", 30);
  @include fluid("margin-left", 40);
  div {
    cursor: pointer;
  }
}
.ancor-line {
  opacity: 0;
  border: 1px #000 solid;
  width: 0px;
  transition: all 1s ease;
}
.ancor:hover {
  .ancor-line {
    opacity: 1;
    width: 100%;
  }
}
.wrap-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-contact--btn {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: right;
  cursor: pointer;
  span {
    @include fluid("font-size", 18);
  }
}

.menu-btn.active::before {
  position: relative;
  transform: rotate(45deg);
  @include fluid("top", 10);
}

.menu-btn.active::after {
  position: relative;
  transform: rotate(-90deg);
  cursor: default;
}
.menu-btn.active::after {
  position: relative;
  transform: rotate(-45deg);
  @include fluid("bottom", 8);
}

.menu-btn.active span {
  transform: scale(0);
}

.menu-btn {
  display: none;
  justify-content: center;
  flex-direction: column;
  @include fluid("gap", 6.5);
  @include fluid("width", 40);
  @include fluid("height", 30);
  position: relative;
  cursor: pointer;
}
.menu-btn span {
  background-color: #0080a7;
  height: 1px;
  @include fluid("width", 45);
  @include fluid("top", 14);
  transition: all 0.3s ease 0s;
}

.menu-btn::before,
.menu-btn::after {
  content: "";
  background-color: #0080a7;
  height: 1px;
  @include fluid("width", 45);
  transition: all 0.3s ease 0s;
}
@media (max-width: 991px) {
  .menu-btn {
    display: flex;
    left: 18%;
  }
  .nav-contact--btn {
    width: 42%;
  }
  .btn {
    border-radius: 16px;
    @include fluid("font-size", 20);
    @include fluid("padding", 16);
  }
  .nav--ancors {
    background: #e8f0ff;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 100%;
    @include fluid("top", 100);
    @include fluid("gap", 40);
    @include fluid("height", 800);
    transform: translateX(500px);
    transition: all 1s ease 0s;
    left: 0;
    .ancor {
      @include fluid("font-size", 40);
    }
  }
  .nav--ancors.active {
    opacity: 1;
    width: 100%;
    transform: translateX(0px);
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  .btn {
    border-radius: 16px;
    @include fluid("font-size", 16);
    @include fluid("padding", 6);
  }
}
@media (min-width: 200px) and (max-width: 1100px) {
  .swiper-button-prev::before,
  .swiper-button-next::before {
    content: "";
    @include fluid("width", 60);
  }
}
.swiper-button-prev,
.swiper-button-next {
  color: black !important;
  @include fluid("top", -90);
}
.swiper-button-prev {
  background: url(./assets/left.svg);
  left: 40%;
}
.swiper-button-next {
  background: url(./assets/right.svg);
  right: 40%;
}
.swiper-button-prev::before,
.swiper-button-next::before {
  content: "";
  position: absolute;
  z-index: 1000;
  border: #000 solid;
  @include fluid("border-width", 2);
  @include fluid("width", 40);
  @include fluid("border-radius", 10);
}
.swiper {
  overflow-x: clip !important;
  overflow-y: clip;
  overflow: visible;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  position: absolute;
  @include fluid("font-size", 40);
}
.swiper-button-next:after {
  @include fluid("right", -9);
}
.swiper-button-prev:after {
  @include fluid("left", -9);
}
.swiper-wrapper {
  @include fluid("gap", 100);
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  @include fluid("top", -97);
}
.mt-100 {
  @include fluid("height", 100);
}
</style>
