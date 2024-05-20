<template>
  <div id="section4" class="container">
    <div class="mt-100"></div>
    <div class="title--services col-12">
      <div>
        <h1>Наши услуги</h1>
        <div class="line"></div>
      </div>
    </div>
    <div class="row services--items">
      <div class="prev-services serv-btn col-3">
        <div class="next-slide">Ручная холодная листовая штамповка</div>
        <div class="arrow--prev arrow"></div>
      </div>
      <img class="serv-img col-3" src="../assets/A523Z8WBWHQ.jpg" alt="" />
      <div class="serv-desc col-3">
        <div class="serv--title">
          Автоматическая холодная листовая штамповка
        </div>
        <div class="serv--txt">
          Строительные крепления, монтажные кляймеры, клипсы, электрические
          зажимы и контакты, нестандартные и стандартные шайбы, уголки,
          колпачки, держатели, прижимы и прочее прочее. Наша основная работа.
          Автоматической штамповкой изготавливаются детали крупных партий. Этот
          метод обработки металлов дешевле, быстрее и удобнее иных видов
          обработки металлов.
        </div>
      </div>
      <div class="next-services serv-btn col-3">
        <div class="arrow--next arrow"></div>
        <div class="next-slide">
          Серийная сварка изделий из черных и цветных металлов
        </div>
      </div>
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
.line {
  border: 1px #000 solid;
  @include fluid("width", 250);
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
  justify-content: center;
  @include fluid("height", 400);
  padding: 0;
  @include fluid("margin-top", 70);
}
.serv-desc {
  display: flex;
  @include fluid("gap", 40);
  @include fluid("height", 400);
  @include fluid("padding", 40);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #dceaf0;
  .serv--title {
    @include fluid("font-size", 20);
    font-weight: 700;
  }
  .serv--txt {
    @include fluid("font-size", 12);
  }
}
.serv-img {
  @include fluid("height", 400);
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
