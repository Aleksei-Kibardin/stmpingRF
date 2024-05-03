<template>
  <div id="section1" class="head--container">
    <div class="bg"></div>
    <header class="container">
      <div class="row">
        <div class="content-header col-6">
          <h1>Балтийский центр штамповки</h1>
          <p>
            Штамповка.рф – компания, специализирующаяся на штамповочных работах
            полного цикла. Наш опытный коллектив занимается производством
            изделий методом холодной листовой штамповки с 1994 года. Расположены
            мы в городе Санкт-Петербурге.
          </p>
          <p>
            Мы готовы предложить вам широкий спектр услуг. Для начала
            сотрудничества достаточно связаться с нами и предоставить рисунок,
            эскиз, чертеж или фотографию вашего изделия. Наши специалисты
            проведут прочностные расчеты, учтут технологичность производства и
            рабочие характеристики вашего продукта, а также рассчитают стоимость
            запуска и производства.
          </p>
          <p>
            Помимо холодной листовой штамповки, мы выполняем прокат тонких
            профилей, холодную объемную штамповку, сварку больших партий из
            черных и нержавеющих сталей, контактную сварку, сборку изделий и
            литье пластмасс.
          </p>
          <p>
            При необходимости, мы можем организовать фасовку продукции в
            фирменную упаковку с вашим логотипом и дизайном.
          </p>
          <p>
            Мы гарантируем качество выпускаемой продукции и стремимся к
            долгосрочному и взаимовыгодному сотрудничеству с каждым клиентом.
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
  h1 {
    @include fluid("font-size", 40);
  }
  p {
    @include fluid("margin-top", 20);
    @include fluid("font-size", 18);
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
    h1 {
      @include fluid("font-size", 70);
    }
    p {
      @include fluid("font-size", 26);
    }
  }
}
</style>
