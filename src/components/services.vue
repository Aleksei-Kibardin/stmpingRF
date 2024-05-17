<template>
  <div id="section4" class="container">
    <div class="title--services col-12">
      <div>
        <h1>Наши услуги</h1>
        <div class="line"></div>
      </div>
    </div>
    <div class="row services--items">
      <!-- <div class="services--item col-3">
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
        <h1>Проектирование Автоматизированных Линий Штамповки</h1>
        <p>
          Мы предлагаем инновационные решения по созданию и изготовлению
          автоматизированных линий штамповки, обеспечивая высокую эффективность
          и надежность в производстве деталей.
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Производство Штампов для Холодной Листовой Штамповки</h1>
        <p>
          Мы производим высококачественные штампы, для холодной листовой штамповки. Наши штампы
          обеспечивают точность и эффективность производства деталей в различных
          отраслях промышленности.
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Прототипирование и реверс-инжиниринг</h1>
        <p>
          Предоставляем предварительные прототипы с использованием различных
          технологий внутри завода. Мы создаем прототипы, используя лазерную
          резку, механическую обработку или штамповку деталей в соответствии с
          вашими потребностями.
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.line{
  border: 1px #000 solid;
  margin-top: 50px;
  width: 250px;
  margin: 20px auto auto auto;
}
.title--services {
  text-align: center;
  @include fluid("font-size", 20);
  font-weight: 500;
  @include fluid("margin-top", 100);
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
  @include fluid("height", 330);
  border: 1px solid #c8c8c8;
  transition: 0.6s all ease;
  h1 {
    @include fluid("font-size", 22);
  }
  p {
    @include fluid("font-size", 16);
  }
}
.services--item:hover {
 box-shadow: 6px 10px 4px 4px #3030304d;
transform: matrix3d(1.05, 0, 0, 0,
                        0, 1.05, 0, 0,
                        0, 0, 1.05, 0,
                        0, 0, 0, 1);
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
