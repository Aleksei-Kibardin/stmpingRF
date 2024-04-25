<template>
  <div id="section1" class="head--container">
    <div class="bg"></div>
    <header class="container">
      <div class="row">
        <div class="content-header col-6">
          <h1>Балтийский центр штамповки</h1>
          <p>
            Штамповка.рф – предприятие полного цикла штамповочных работ. Если Вы
            ищете подрядчика для изготовления изделий методом холодной листовой
            штамповки – Вы пришли по адресу! Работаем с 1994 года, находимся в
            Санкт-Петербурге. Просто позвоните нам и пришлите
            рисунок/эскиз/чертеж/фотографию изделия. Мы проведём прочностные
            расчёты, подумаем о технологичности, о рабочих характеристиках,
            рассчитаем стоимость запуска и производства данного изделия. При
            необходимости, организуем фасовку продукции в фирменную упаковку с
            Вашим логотипом и дизайном. Помимо холодной листовой штамповки, мы
            осуществляем прокат тонких профилей, холодную объемную штамповку,
            сварку больших партий из черных и нержавеющих сталей, контактную
            сварку, сборку изделий, литье пластмасс.
          </p>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../fluid.sass";
.head--container {
  @include fluid("margin-top", 70);
  height: 100vh;
}
.bg {
  position: absolute;
  background: url("../assets/Rectangle 18@1x.png") no-repeat;
  background-size: cover;
  filter: brightness(70%);
  width: 100%;
  height: 100%;
  z-index: 0;
}
.content-header {
  color: #fff;
  h1{
    @include fluid("font-size", 40);
  }
  p {
    @include fluid("margin-top", 20);
    @include fluid("font-size", 16);
    text-shadow: 1px 1px #000000;
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
  h1{
    @include fluid("font-size", 70);
  }
  p {
    @include fluid("font-size", 26);
  }
}
}
</style>
