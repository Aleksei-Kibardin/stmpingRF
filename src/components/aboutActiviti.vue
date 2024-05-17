<template>
  <div id="section2" class="container">
    <div class="row">
      <img class="img" src="../assets/rIhFX-UENas.jpg" alt="">
      <div class="title--activiti col-6">
        <h1>
          О нас
          <hr />
        </h1>
        <h2>Предприятие штамповка РФ это:</h2>
        <p>
          2.5 тысяч тонн выпускаемой продукции ежегодно. Ручная,
          полуавтоматическая, автоматическая и прогрессивная штамповка. Расчёт и
          экономическое обоснование предлагаемых моделей производства.
          Сопутствующие услуги по покрытиям, сборке, фасовке и комплектации
          продукции. Проектирование и реверс-инжиниринг силами собственного
          конструкторского бюро.
          <br />
          3 шага до начала производства: Направление чертежа\образца продукции
          Согласование требуемых характеристик готового продукта Заключение
          договора и старт производства
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
.title--activiti {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @include fluid("height", 200);
  @include fluid("font-size", 16);
  @include fluid("margin-top", 100);
  @include fluid("margin-left", 100);
  h1 {
    @include fluid("font-size", 40);
  }
  h2{
    @include fluid("font-size", 30);
  }
}
.img{
  box-shadow: -350px -100px 0  0 #b5cbd4;
}
.cards {
  width: 100%;
  display: flex;
  height: 100%;
  @include fluid("margin-top", 100);
  justify-content: space-between;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  @include fluid("font-size", 14);
  @include fluid("padding-top", 20);
  @include fluid("gap", 20);
  @include fluid("height", 275);
  border-radius: 10px;
  cursor: pointer;
}
.card:hover {
  .wrap-circl--card {
    @include fluid("top", -80);
  }
  .wrap-circl--card::after {
    @include fluid("height", 20);
  }
  .wrap-circl--card::before {
    @include fluid("top", 70);
  }
}
.card--title {
  @include fluid("font-size", 22);
  font-weight: 500;
}
.circl--card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1379fe;
  @include fluid("font-size", 24);
  border-width: 0px 1px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.wrap-circl--card {
  position: absolute;
  border: 1px #00000059 solid;
  @include fluid("height", 75);
  @include fluid("width", 75);
  @include fluid("top", -100);
  padding: 2px;
  align-self: center;
  border-radius: 50%;
  transition: 0.5s all ease;
}
.wrap-circl--card:hover {
  border: 1px #00000000 solid;
}
.wrap-circl--card::after {
  content: "";
  position: absolute;
  display: block;
  @include fluid("height", 40);
  @include fluid("left", 36);
  width: 0;
  border: #000 1px solid;
  transition: 0.5s all ease;
}
.wrap-circl--card::before {
  content: "";
  position: absolute;
  display: block;
  @include fluid("height", 20);
  @include fluid("width", 20);
  @include fluid("left", 27);
  @include fluid("top", 90);
  width: 0;
  border: #000;
  border-style: solid;
  border-top: 0;
  border-left: 0;
  @include fluid("border-bottom-width", 2);
  @include fluid("border-right-width", 2);
  transform: rotate(45deg);
  transition: 0.5s all ease;
}
.desc--activiti {
  background-color: #1379fe31;
  @include fluid("border-radius", 16);
  @include fluid("margin-top", 50);
  @include fluid("height", 200);
  @include fluid("font-size", 16);
  @include fluid("gap", 50);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s all ease;
  h1 {
    @include fluid("font-size", 30);
  }
}
.activiti--footer {
  width: 100%;
  @include fluid("margin-top", 100);
  @include fluid("height", 200);
  background-image: url(../assets/activitiFooter.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.activiti--footer--items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.foo {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  @include fluid("font-size", 16);
  img {
    @include fluid("height", 60);
  }
  p {
    text-shadow: 1px 1px #000000;
  }
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
  .card {
    margin-bottom: 50px;
    @include fluid("height", 350);
    @include fluid("font-size", 26);
    .card--title {
      @include fluid("font-size", 36);
    }
  }
  .desc--activiti {
    @include fluid("height", 300);
    h1 {
      @include fluid("font-size", 39);
    }
    p {
      @include fluid("font-size", 26);
    }
  }
  .activiti--footer {
    height: 100%;
    width: 100%;
    .activiti--footer--items {
      flex-direction: column;
      @include fluid("gap", 50);
      img {
        width: 18%;
        height: 18%;
      }
      p {
        @include fluid("font-size", 26);
      }
    }
  }
}
</style>
