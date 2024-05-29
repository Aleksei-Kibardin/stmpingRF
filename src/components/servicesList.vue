<template>
  <div class="wrap--tab-container">
    <div class="tab-container">
      <div class="tab--list">
        <div
          class="tab-btn"
          v-for="t in tabs"
          :key="t"
          :class="{ activeTab: currentTab.title === t.title }"
          @click="currentTab = t"
        >
          {{ t.title }}
          <div class="ancor-line"></div>
        </div>
      </div>
      <div class="wrap--tab--content">
        <div class="tab--content">
          <div>
            <img
              class="tab--img"
              :src="`/img/${currentTab.url}.jpeg`"
              :alt="`${currentTab.title}`"
            />
          </div>
          <span>Об услуге:</span>
          <div class="tab--txt">{{ currentTab.description }}</div>
          <br />
        
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    id: 0,
    url: "Холодная листовая штамповка",
    title: "Автоматическая холодная листовая штамповка",
    description:
      "Строительные крепления, монтажные кляймеры, клипсы, электрические зажимы и контакты, нестандартные и стандартные шайбы, уголки, колпачки, держатели, прижимы и прочее прочее. Наша основная работа. Автоматической штамповкой изготавливаются детали крупных партий. Этот метод обработки металлов дешевле, быстрее и удобнее иных видов обработки металлов.",
  },
  {
    id: 1,
    url: "Покраска",
    title: "Нанесение защитных покрытий",
    description:
      "Наши услуги по нанесению защитных покрытий обеспечивают долговечность и надежность вашей продукции, защищая её от повреждений и обеспечивая сохранность в эксплуатации.",
  },
  {
    id: 2,
    url: "раздеталей",
    title: "Проектирование штампов и деталей",
    description:
      "Наши услуги в этой области включают в себя создание оптимальных и эффективных конструкций, учитывая требования заказчика к функциональности, прочности и экономичности производства.",
  },
  {
    id: 3,
    url: "фасовка",
    title: "Фасовка",
    description:
      "Мы гарантируем точное соблюдение всех стандартов качества и безопасности, обеспечивая надежную защиту вашей продукции во время транспортировки и хранения.",
  },
  {
    id: 4,
    url: "проект",
    title: "Проектирование Автоматизированных Линий Штамповки",
    description:
      "Мы предлагаем инновационные решения по созданию и изготовлению автоматизированных линий штамповки, обеспечивая высокую эффективность и надежность в производстве деталей.",
  },
  {
    id: 5,
    url: "60758243_xl_normal_none",
    title: "Производство Штампов для Холодной Листовой Штамповки",
    description:
      "Мы производим высококачественные штампы, для холодной листовой штамповки. Наши штампы обеспечивают точность и эффективность производства деталей в различных отраслях промышленности.",
  },
  {
    id: 6,
    url: "реверс",
    title: "Прототипирование и реверс-инжиниринг",
    description:
      "Предоставляем предварительные прототипы с использованием различных технологий внутри завода. Мы создаем прототипы, используя лазерную резку, механическую обработку или штамповку деталей в соответствии с вашими потребностями.",
  },
  {
    id: 7,
    url: "Ручная",
    title: "Ручная холодная листовая штамповка",
    description:
      "Для небольших партий продукции рекомендуется ручная штамповка. Листовая холодная штамповка применяется для операций глубокой и обычной вытяжки, производства деталей с петлями, резьбой, отбортовкой. Для изготовления также могут применяться и другие операции, которые требуют ручного труда оператора и строгого визуального контроля. ",
  },
  {
    id: 8,
    url: "Сварка",
    title: "Серийная сварка изделий из черных и цветных металлов",
    description:
      "Для серийного выпуска металлических опор, закладных, уголков, сварных фланцев, деталей основания используются автоматизированные посты ручной и автоматизированной сварки. Такие изделия отличаются высокой геометрической стабильностью, постоянным качеством стыков и швов. Для выпуска используется серийная сварка, что сокращает время на выпуск продукции с сохранением качества. ",
  },
]);

const currentTab = ref(tabs.value[0])

</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.wrap--tab-container {
  display: flex;
  height: 100%;
  justify-content: center;
}
.tab-container {
  background-color: #ffffff;
  display: flex;
  @include fluid("padding", 20);
  @include fluid("gap", 40);
  @include fluid("margin-top", 40);
  
}
.tab--list {
  display: flex;
  flex-direction: column;
  @include fluid("gap", 20);
  position: relative;
  @include fluid("margin-top", 50);
}
.tab-btn {
  text-align: left;
  @include fluid("font-size", 18);
  @include fluid("width", 400);
  cursor: pointer;
  transition: all 0.2s ease 0.01s;
  border-left: 3px #4e70af solid;
  padding-left: 10px;
}
.activeTab {
  color: #4e70af;
  font-weight: 500;
  .ancor-line {
    opacity: 1;
    width: 100%;
  }
}
.tab-btn:hover {
  color: #4e70af;
}
.wrap--tab--content {
  @include fluid("margin-left", 100);
  display: flex;
  @include fluid("gap", 10);
  justify-content: center;
  flex-direction: column;
}
.title--content {
  @include fluid("margin-bottom", 30);
}
.tab--content span {
  font-weight: 600;
  @include fluid("font-size", 16);
}
.tab--txt {
  @include fluid("margin-top", 10);
  @include fluid("font-size", 18);
  transition: all 0.5s ease 0.01s;
}
.ancor-line {
  opacity: 0;
  border: 1px #000 solid;
  width: 0px;
  transition: all 1s ease;
}
.tab-btn:hover {
  .ancor-line {
    opacity: 1;
    width: 100%;
  }
}
@media (min-width: 800px) and (max-width: 1000px) {
}
@media (min-width: 200px) and (max-width: 1000px) {
  .wrap--tab-container {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .tab-container {
    box-shadow: none;
    background-color: unset;
  }
  .tab--list {
    margin-top: 50px;
  }
  .wrap--tab--content h1 {
    @include fluid("font-size", 37);
  }
  .wrap--tab--content span {
    @include fluid("font-size", 24);
  }
}
.tab--img {
  @include fluid("margin-bottom", 30);
  transition: all 0.5s ease 0.01s;
}
</style>
