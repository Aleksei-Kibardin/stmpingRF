<template>
  <div id="section4" class="container">
    <div class="title--services col-12">
      <h1>Услуги</h1>
      <p>
        Помимо холодной листовой штамповки, мы осуществляем прокат тонких
        профилей, холодную объемную штамповку, сварку больших партий из черных и
        нержавеющих сталей, контактную сварку, сборку изделий, литье пластмасс.
      </p>
    </div>
    <div class="row services--items">
      <div class="services--item col-3">
        <h1>Холодная штамповка</h1>
        <p>
          Мы предлагаем широкий спектр услуг по холодной штамповке, гарантируя
          высокое качество и точность изготовления деталей для различных
          отраслей промышленности.
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Нанесение защитных покрытий</h1>
        <p>
          Наши услуги по нанесению защитных покрытий обеспечивают долговечность
          и надежность вашей продукции, защищая её от повреждений и обеспечивая
          сохранность в эксплуатации.
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Проектирование штампов и деталей</h1>
        <p>
          Наши услуги в этой области включают в себя создание оптимальных и
          эффективных конструкций, учитывая требования заказчика к
          функциональности, прочности и экономичности производства.
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Фасовка</h1>
        <p>
          Мы гарантируем точное соблюдение всех стандартов качества и
          безопасности, обеспечивая надежную защиту вашей продукции во время
          транспортировки и хранения.
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.title--services {
  text-align: center;
  @include fluid("margin-top", 100);
  p {
    @include fluid("margin-top", 40);
  }
}
.services--items {
  justify-content: center;
  @include fluid("gap", 20);
  @include fluid("margin-top", 100);
  @include fluid("margin-bottom", 100);
}
.services--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @include fluid("border-radius", 16);
  @include fluid("height", 290);
  border: 1px solid #c8c8c8;
  h1 {
    @include fluid("font-size", 24);
  }
  p {
    @include fluid("font-size", 16);
  }
}
@media (max-width: 991px) {
  .services--items {
    justify-content: center;
    @include fluid("gap", 80);
  }
  .services--item {
    box-shadow: 0px 3px 4px 1px #8f8f8f5b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @include fluid("border-radius", 16);
    @include fluid("height", 290);
    width: 90%;
    border: 1px solid #c8c8c8;
    h1 {
      @include fluid("font-size", 36);
    }
    p {
      @include fluid("font-size", 33);
    }
  }
}
</style>
