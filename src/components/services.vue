<template>
  <div id="section4" class="container">
    <div class="mt-100"></div>
    <div class="title--services col-12">
      <div>
        <h1>Наши возможности для вас</h1>
        <div class="line"></div>
      </div>
    </div>
    <div class="row services--items">
      <services-list></services-list>
    </div>
  </div>
</template>

<script setup>
import servicesList from "./servicesList.vue";
</script>

<style lang="scss" scoped>
@import "../fluid.sass";

.line {
  border: 1px #000 solid;
  @include fluid("width", 517);
  @include fluid("margin-top", 20);
  margin: 20px auto auto auto;
}
.title--services {
  text-align: center;
  @include fluid("font-size", 20);
  font-weight: 500;
  @include fluid("margin-top", 100);
}
.serv-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  @include fluid("gap", 50);
  color: #fff;
  @include fluid("font-size", 20);
  font-weight: 700;
  background: #b5cbd4;
}
.services--items {
  display: flex;
  justify-content: left;
  padding: 0;
}
.services--item {
  padding: 0;
  margin-top: 50px;
  display: flex;
  border-bottom: 4px #b5cbd4 solid;
  height: 100px;
  .service-name {
    vertical-align: bottom;
    font-weight: 700;
    width: 350px;
    height: 100%;
    border-right: 4px #b5cbd4 solid;
  }
  .service-desc {
    width: 70%;
    margin-left: 20px;
  }
}
.serv-desc {
  display: flex;
  @include fluid("gap", 40);
  @include fluid("height", 500);
  @include fluid("padding", 40);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #dceaf0;
  .serv--title {
    font-family: "Arsenal" !important;
    @include fluid("font-size", 25);
    font-weight: 900;
    opacity: 1;
    transition: 0.5s all ease;
  }
  .serv--txt {
    @include fluid("font-size", 15);
    opacity: 1;
    transition: 0.5s all ease;
  }
}
.next-slide {
  font-family: "Arsenal" !important;
  opacity: 1;
  transition: 0.5s all ease;
}
.anim-active {
  opacity: 0 !important;
}
.serv-img {
  @include fluid("height", 500);
  padding: 0;
}
.current-services {
  gap: 0;
  display: flex;
  padding: 0;
}
.arrow {
  @include fluid("padding", 15);
  border: #fff solid;
  border-top: 1px;
  border-left: 1px;
}
.arrow--next {
  transform: rotate(-45deg);
}
.arrow--prev {
  transform: rotate(135deg);
}
</style>
