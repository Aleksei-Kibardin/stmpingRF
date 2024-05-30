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
    <!-- <div class="row services--items">
      <transition-group name="bounce">
        <div class="prev-services serv-btn col-3" @click="changePrevSlide()">
          <div class="next-slide" :class="{ 'anim-active': animActive }">
            {{ slides[prevSlide].title }}
          </div>
          <div class="arrow--prev arrow"></div>
        </div>
        <img class="serv-img col-3" src="../assets/A523Z8WBWHQ.jpg" alt="" />
        <div class="serv-desc col-3">
          <div class="serv--title" :class="{ 'anim-active': animActive }">
            {{ slides[currentSlide].title }}
          </div>
          <div class="serv--txt" :class="{ 'anim-active': animActive }">
            {{ slides[currentSlide].txt }}
          </div>
        </div>
        <div class="next-services serv-btn col-3" @click="changeNextSlide()">
          <div class="arrow--next arrow"></div>
          <div class="next-slide" :class="{ 'anim-active': animActive }">
            {{ slides[nextSlide].title }}
          </div>
        </div>
      </transition-group>
    </div> -->
  </div>
</template>

<script setup>
import servicesList from "./servicesList.vue";
// import { reactive, ref } from "vue";

// const slides = [
//   {
//     id: 0,
//     url: "1",
//     title: "Автоматическая холодная листовая штамповка",
//     description: "Строительные крепления, монтажные кляймеры, клипсы, электрические зажимы и контакты, нестандартные и стандартные шайбы, уголки, колпачки, держатели, прижимы и прочее прочее. Наша основная работа. Автоматической штамповкой изготавливаются детали крупных партий. Этот метод обработки металлов дешевле, быстрее и удобнее иных видов обработки металлов.",
//   },
//   {
//     id: 1,
//     url: "2",
//     title: "Нанесение защитных покрытий",
//     description: "Наши услуги по нанесению защитных покрытий обеспечивают долговечность и надежность вашей продукции, защищая её от повреждений и обеспечивая сохранность в эксплуатации.",
//   },
//   {
//     id: 2,
//     url: "2",
//     title: "Проектирование штампов и деталей",
//     description: "Наши услуги в этой области включают в себя создание оптимальных и эффективных конструкций, учитывая требования заказчика к функциональности, прочности и экономичности производства.",
//   },
//   {
//     id: 3,
//     url: "3",
//     title: "Фасовка",
//     description: "Мы гарантируем точное соблюдение всех стандартов качества и безопасности, обеспечивая надежную защиту вашей продукции во время транспортировки и хранения.",
//   },
//   {
//     id: 4,
//     url: "4",
//     title: "Проектирование Автоматизированных Линий Штамповки",
//     description: "Мы предлагаем инновационные решения по созданию и изготовлению автоматизированных линий штамповки, обеспечивая высокую эффективность и надежность в производстве деталей.",
//   },
//   {
//     id: 5,
//     url: "5",
//     title: "Производство Штампов для Холодной Листовой Штамповки",
//     description: "Мы производим высококачественные штампы, для холодной листовой штамповки. Наши штампы обеспечивают точность и эффективность производства деталей в различных отраслях промышленности.",
//   },
//   {
//     id: 6,
//     url: "6",
//     title: "Прототипирование и реверс-инжиниринг",
//     description: "Предоставляем предварительные прототипы с использованием различных технологий внутри завода. Мы создаем прототипы, используя лазерную резку, механическую обработку или штамповку деталей в соответствии с вашими потребностями.",
//   },
//   {
//     id: 7,
//     url: "7",
//     title: "Ручная холодная листовая штамповка",
//     description: "Для небольших партий продукции рекомендуется ручная штамповка. Листовая холодная штамповка применяется для операций глубокой и обычной вытяжки, производства деталей с петлями, резьбой, отбортовкой. Для изготовления также могут применяться и другие операции, которые требуют ручного труда оператора и строгого визуального контроля. ",
//   },
//   {
//     id: 8,
//     url: "8",
//     title: "Серийная сварка изделий из черных и цветных металлов",
//     description: "Для серийного выпуска металлических опор, закладных, уголков, сварных фланцев, деталей основания используются автоматизированные посты ручной и автоматизированной сварки. Такие изделия отличаются высокой геометрической стабильностью, постоянным качеством стыков и швов. Для выпуска используется серийная сварка, что сокращает время на выпуск продукции с сохранением качества. ",
//   },
// ];

// const currentSlide = ref(0);

// const prevSlide = ref(8);

// const nextSlide = ref(1);

// const animActive = ref(false);

// const checkSlide = () => {
//   if (currentSlide.value === slides.length - 1) {
//     nextSlide.value = 0;
//     prevSlide.value = slides.length - 2;
//   } else if (currentSlide.value === 0) {
//     prevSlide.value = slides.length - 1;
//     nextSlide.value = 1;
//   } else {
//     prevSlide.value = currentSlide.value - 1;
//     nextSlide.value = currentSlide.value + 1;
//   }
// };

// const changeNextSlide = () => {
//   animActive.value = true;
//   setTimeout(() => {
//     animActive.value = false;
//     if (currentSlide.value === slides.length - 1) {
//       currentSlide.value = 0;
//       nextSlide.value = 1;
//       checkSlide();
//     } else {
//       currentSlide.value++;
//       checkSlide();
//       console.log(prevSlide.value, currentSlide.value, nextSlide.value);
//     }
//     checkSlide();
//   }, 500);
// };
// const changePrevSlide = () => {
//   animActive.value = true;
//   setTimeout(() => {
//     animActive.value = false;
//     if (currentSlide.value === 0) {
//       currentSlide.value = slides.length - 1;
//       checkSlide();
//     } else {
//       currentSlide.value--;
//       checkSlide();
//       console.log(prevSlide.value, currentSlide.value, nextSlide.value);
//     }
//   }, 500);
// };
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
