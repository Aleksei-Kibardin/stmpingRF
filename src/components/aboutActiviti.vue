<template>
  <div id="section2" class="container">
    <div class="mt-100"></div>
    <div class="row wrap-content--activiti">
      <img class="img col-6" src="../assets/rIhFX-UENas.jpg" alt="" />
      <div class="title--activiti col-6">
        <h2>Предприятие штамповка.РФ это:</h2>
        <p>
          обособленное подразделение Соржинского инструментального завода
          (ссылка на sorzha.ru) специализирующееся на автоматической листовой и
          ручной объёмной штамповке
        </p>
        <ul>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/8486/8486609.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Объём:</span
            >
            крупносерийное производство металлических изделий
          </li>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/12225/12225137.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Гибкость:</span
            >
            производство изделий малыми и средними партиями
          </li>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/13665/13665693.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />
              Исследования:</span
            >
            опытное производство изделий, проектирование, прототипирование,
            инжиниринг
          </li>
          <li>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/4258/4258545.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Технологии:</span
            >
            компонентное производство - мехобработка изделий, закалка объёмная и
            индукционная, гальваника
          </li>
          <li><p>
            <span class="t">
              <img
                src="https://cdn-icons-png.freepik.com/512/15570/15570022.png?ga=GA1.1.504983204.1715074229"
                alt=""
              />Контроль качества:</span
            >
              сквозной контроль контролируемых размеров калибрами и измерительным
            инструментом. Документирование. Опытные и контрольные образцы..
            </p>
            
          </li>
        </ul>
        <div class="midle-contacts">
          <div class="midle-contacts--title">
            <span>С чего начать?</span>
          </div>
          <div class="midle-contacts--txt">
            <p>
              Хотите обсудить проект? Есть удобные способы связаться с нами:
            </p>
            <p>Позвоните: <span>+7(901)9714664</span></p>
            <p>Письмо в свободной форме: <span>spb9714664@yandex.ru</span></p>
          </div>
        </div>
        <div class="contact-btn">
          <modal-form :btnTxt="'Обсудить проект'"></modal-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import modalForm from "./modalForm.vue";

const currentCard = ref({
  title: "Космическая отрасль",
  smallDesc: "",
  txt: "Наша компания специализируется на предоставлении услуг для компаний, разрабатывающих продукцию в аэрокосмической отрасли. Мы предлагаем широкий выбор технологий производства и вариантов материалов, чтобы удовлетворить самые требовательные потребности наших клиентов.",
  color: "#1379fe5e",
});

const cards = [
  {
    title: "Космическая отрасль",
    smallDesc:
      "Мы предлагаем широкий выбор технологий производства для аэрокосмической отрасли...",
    txt: "Наша компания специализируется на предоставлении услуг для компаний, разрабатывающих продукцию в аэрокосмической отрасли. Мы предлагаем широкий выбор технологий производства и вариантов материалов, чтобы удовлетворить самые требовательные потребности наших клиентов.",
    color: "#1379fe5e",
  },
  {
    title: "Автомобильная промышленность",
    smallDesc:
      "Штамповка.РФ помогает эффективно закупать детали для автомобильной промышленности...",
    txt: "Штамповка.РФ — ваш надежный партнер в закупке нестандартных деталей для автомобильной промышленности. Мы предоставляем комплексный сервис для различных производственных процессов, чтобы обеспечить эффективность и качество вашей продукции.",
    color: "#feee135e",
  },
  {
    title: "Электроника и энергетика",
    smallDesc:
      "Мы оптимизируем цепочки поставок для энергетических компаний и ускоряем разработку критически важных компонентов...",
    txt: "Мы помогаем энергетическим компаниям оптимизировать свои цепочки поставок и ускорить разработку критически важных компонентов. Это сокращает время выполнения заказов и способствует созданию более гибкой и оперативно реагирующей производственной экосистемы.",
    color: "#fe4a135e",
  },
  {
    title: "Медицинское оборудование",
    smallDesc:
      "Наш опыт в цифровом производстве помогает компаниям в медицинской промышленности...",
    txt: "Наш широкий спектр производственных технологий и вариантов биосовместимых материалов способствует предоставлению опыта цифрового производства компаниям, разрабатывающим продукцию в медицинской промышленности",
    color: "#56fe135e",
  },
];
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.midle-contacts {
  @include fluid("margin-top", 50);
  display: flex;
  align-self: center;
  width: 100%;
  height: 100%;
  .midle-contacts--title {
    display: flex;
    align-items: center;
    align-self: center;
    width: 35%;
    height: 100%;
    border-right: #b5cbd4 solid;
    @include fluid("border-right-width", 5);
    span {
      font-weight: 900;
    }
  }
  .midle-contacts--txt {
    margin-left: 20px;
    span {
      font-weight: 700;
    }
  }
}
.contact-btn {
  @include fluid("margin-top", 20);
  align-self: center;
}
.wrap-content--activiti {
  justify-content: center;
  @include fluid("gap", 100);
}
.title--activiti {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @include fluid("gap", 10);
  @include fluid("font-size", 20);
  h2 {
    @include fluid("font-size", 30);
  }
  p {
    @include fluid("font-size", 16);
  }
  li {
    list-style-type: none;
    @include fluid("margin-top", 20);
    @include fluid("font-size", 18);
  }
  .t {
    display: flex;
    width: 50%;
    gap: 5px;
    font-weight: 700;
  }
  img {
    height: 30px;
    width: 30px;
  }
}
.img {
  box-shadow: var(--midle-box-x) var(--midle-box-y) 0 0 #b5cbd4;
  @include fluid("width", 490);
  @include fluid("height", 517);
}
@media (max-width: 991px) {
  .title--activiti {
    flex-direction: column;
    @include fluid("gap", 20);
    h1 {
      @include fluid("font-size", 39);
    }
    p {
      @include fluid("font-size", 26);
    }
  }
}
</style>
