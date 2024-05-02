<template>
  <nav>
    <div class="container col-12 wrap-nav">
      <img
        class="logo col-2"
        src="https://static.tildacdn.com/tild3936-3536-4362-b232-613362633237/__.png"
        alt="логотип"
      />
      <div
        class="menu-btn"
        :class="{ active: isActive }"
        @click="isActive = !isActive"
      >
        <span></span>
      </div>
      <div class="nav--ancors col-6" :class="{ active: isActive }">
        <div class="ancor" @click="scrollToAnchor('#section1')">Главная</div>
        <div class="ancor" @click="scrollToAnchor('#section2')">
          Деятельность
        </div>
        <div class="ancor" @click="scrollToAnchor('#section3')">
          Наша продукция
        </div>
        <div class="ancor" @click="scrollToAnchor('#section4')">Услуги</div>
        <div class="ancor" @click="scrollToAnchor('#section5')">Контакты</div>
      </div>
      <div class="nav-contact--btn col-3">
        <span> +7-901-971-46-64</span>
        <div class="btn" @click="modalActive = !modalActive">
          ЗАКАЗАТЬ ЗВОНОК
        </div>
      </div>
    </div>
  </nav>
  <header-vue></header-vue>
  <main>
    <modal-form :modalActive="modalActive"></modal-form>
    <about-activiti></about-activiti>
    <gallery-vue></gallery-vue>
    <services-vue></services-vue>
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
import { ref } from "vue";

const isActive = ref(false);

const modalActive = ref(false);

const scrollToAnchor = (anchor) => {
  const element = document.querySelector(anchor);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
</script>

<style lang="scss">
@import "./fluid.sass";
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
  @include fluid("font-size", 20);
  position: fixed;
  background-color: #e8f0ff;
  width: 100%;
  z-index: 4;
  top: 0;
}
.nav--ancors {
  display: flex;
  justify-content: space-around;
  div {
    cursor: pointer;
  }
}
.anchor {
  z-index: 10;
  cursor: pointer;
}
.wrap-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-contact--btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.btn {
  border-radius: 6px;
  background: #0080a7;
  color: #fff;
  @include fluid("padding", 6);
  @include fluid("font-size", 15);
  transition: 1s all ease;
}
.btn:hover {
  background: #00a3d4;
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
@media (min-width: 200px) and (max-width: 500px) {
  .menu-btn {
    display: flex;
  }
  .nav-contact--btn{
    width: 42%;
  }
  .nav--ancors {
    background: #e8f0ff;
    position: absolute;
    justify-content: center;
    align-self: center;
    opacity: 0;
    align-items: end;
    @include fluid("margin-top", 125);
    @include fluid("gap", 40);
    @include fluid("height", 53);
    transform: translateX(500px);
    transition: all 1s ease 0s;
    left: 0;
    .anchor {
      @include fluid("font-size", 20);
    }
  }
  .nav--ancors.active {
    opacity: 1;
    width: 100%;
    transform: translateX(0px);
  }
}
</style>
