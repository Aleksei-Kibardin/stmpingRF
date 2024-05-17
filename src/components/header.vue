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
              Добро пожаловать на страницу производственной компании
              ШТАМПОВКА.РФ! <br />
              Наше предприятие выполняет все виды объёмной холодной штамповки
              чёрных и цветных металлов на современных металлообрабатывающих
              комплексов с ЧПУ.<br />
              Мы производим серийные и мелкосерийные партии изделий по образцам
              и чертежам заказчиков.<br />
              Выполняем все виды смежных работ от разработки технической
              документации на изделия до их брендирования и индивидуальной
              упаковки. Оказываем помощь в приобретении оборудования для
              металлообработки<br />
            </p>
          </div>
          <div class="btn--wrap" @click="modalActive = !modalActive">
            <div class="btn">
              <span>Обсудить проект</span>
            </div>
            <div class="btn--item"><div class="btn--arrow"></div></div>
          </div>
        </div>
        <img
          class="img"
          src="http://admin29.solinepro.ru/progresstamp2//upload/user/new%20foto/ZH_00544_HDR.jpg"
          alt=""
        />
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
  box-shadow: var(--box-x) 100px 0 0 #b5cbd4;
  @include fluid("width", 600);
  @include fluid("height", 600);
}

.content-header {
  color: #000;
  h1 {
    @include fluid("font-size", 50);
  }
  .txt {
    @include fluid("margin-top", 30);
    width: 70%;
  }
  p {
    @include fluid("margin-top", 20);
    @include fluid("font-size", 18);
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
  background: #bb9760 !important;
  font-weight: 700;
  cursor: pointer;
  width: auto;
  text-align: center;
  @include fluid("margin-top", 50);
  @include fluid("width", 230);
  @include fluid("padding", 10);
  @include fluid("font-size", 20);
  border-radius: 0;
}
</style>
