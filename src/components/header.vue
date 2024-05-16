<template>
  <div id="section1" class="head--container">
    <modal-form :modalActive="modalActive"></modal-form>
    <header class="container">
      <div class="row">
        <div class="content-header col-6">
          <h1>Штамповка.рф - сложные штампы, простые решения</h1>
          <div class="txt">
            <hr />
            <p>
              До 800 изделий в минуту на одной линии От цветных металлов до
              нержавеющей стали Сборка, фасовка, упаковка.
            </p>
          </div>
          <div class="btn--wrap" @click="modalActive = !modalActive">
            <div class="btn">
              <span>Обсудить проект</span>
            </div>
            <div class="btn--item"><div class="btn--arrow"></div></div>
          </div>
        </div>
        <img class="img" src="../assets/Rectangle 18@1x.png" alt="" />
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import modalForm from "./modalForm.vue";

const modalActive = ref(false);
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.head--container {
  @include fluid("margin-top", 70);
  height: 100vh;
}
.img {
  box-shadow: 230px 100px 0 0 #b5cbd4;
  width: 600px;
  height: 600px;
}

.content-header {
  color: #000;
  h1 {
    @include fluid("font-size", 50);
  }
  .txt {
    margin-top: 30px;
    width: 70%;
  }
  p {
    @include fluid("margin-top", 20);
    @include fluid("font-size", 20);
  }
}
.container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}
@media (max-width: 991px) {
  .content-header {
    h1 {
      @include fluid("font-size", 70);
    }
    p {
      @include fluid("font-size", 26);
    }
  }
}
.btn {
  font-weight: 700;
  cursor: pointer;
  width: auto;
  margin-top: 130px;
  text-align: center;
  width: 230px;
  padding: 10px;
  font-size: 20px;
  background: #bb9760 !important;
  border-radius: 0;
}
</style>
