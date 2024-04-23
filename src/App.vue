<template>
  <nav>
    <div class="container col-12 wrap-nav">
      <img
        class="logo col-2"
        src="https://static.tildacdn.com/tild3936-3536-4362-b232-613362633237/__.png"
        alt="логотип"
      />
      <div class="nav--btns col-6">
        <div class="ancor">Главная</div>
        <div class="ancor">Деятельность</div>
        <div class="ancor">Наша продукция</div>
        <div class="ancor">Услуги</div>
        <div class="ancor">Контакты</div>
      </div>
      <div class="nav-contact--btn col-4">
        <span> +7-901-971-46-64</span>
        <span>ЗАКАЗАТЬ ЗВОНОК</span>
      </div>
    </div>
  </nav>
  <header-vue></header-vue>
  <main>
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
</script>

<style lang="scss">
@import "./fluid.sass";
.container{
    @include fluid("max-width", 1400);
}
.row > div{
  @include fluid("padding", 20);
}
nav {
  @include fluid("height", 70);
  @include fluid("font-size", 20);
  position: fixed;
  background-color: #e8f0ff;
  width: 100%;
  z-index: 4;
  top: 0;
}
.nav--btns {
  display: flex;
  justify-content: space-around;
  div{
    cursor: pointer;
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
  cursor: pointer;
}
</style>
