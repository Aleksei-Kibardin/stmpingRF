<template>
  <div id="section7" class="row">
    <div class="container">
      <h1>Контакты компании</h1>
      <div class="contacts">
        <div class="contacts-items col-6">
          <h3>Контактные данные:</h3>
          <div class="phone contacts--item">
            <span>Телефон:</span> +7-901-971-46-64
          </div>
          <div class="address contacts--item">
            <span>Адрес:</span> г. Санкт-Петербург, Лиговский проспект, 52 К
          </div>
          <div class="email contacts--item">
            <span>Email:</span> spb9714664@yandex.ru
          </div>
          <modal-form :btnTxt="'Заказать обратный звонок'"></modal-form>
        </div>
        <div class="map col-6">
          <h2>О нас:</h2>
          <p class="footer-txt">
            Штамповка.рф- обособленное подразделение.
            <a class="link" href="">Соржинского инструментального завода</a>.
            специализирующийся на автоматической листовой и ручной объемной
            штамповке. Более 22 лет производим металлопродукцию для различных
            отраслей промышленности.
          </p>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="container footer">
      <div class="footer-row">
        <div class="logo">
          <img
            src="https://static.tildacdn.com/tild3936-3536-4362-b232-613362633237/__.png"
            alt=""
          />
        </div>
        <div class="nav-ancors">
          <div class="nav-ancor" @click="scrollToAnchor('#section1')">
            Главная
            <div class="ancor-line"></div>
          </div>
          <div class="nav-ancor" @click="scrollToAnchor('#section2')">
            Деятельность
            <div class="ancor-line"></div>
          </div>
          <div class="ancor" @click="scrollToAnchor('#section4')">
            Услуги
            <div class="ancor-line"></div>
          </div>
          <div class="nav-ancor" @click="scrollToAnchor('#section3')">
            Наша продукция
            <div class="ancor-line"></div>
          </div>
          <div class="ancor" @click="scrollToAnchor('#section5')">
            Видео
            <div class="ancor-line"></div>
          </div>
          <div class="ancor" @click="scrollToAnchor('#section6')">
            Другая Деятельность
            <div class="ancor-line"></div>
          </div>
          <div class="ancor" @click="scrollToAnchor('#section7')">
            контакты
            <div class="ancor-line"></div>
          </div>
        </div>
        <div class="phone contacts--item">+7-901-971-46-64</div>
      </div>
      <div class="footer-row">
        <span>© Все права защищены. 2024</span>
        <div class="email contacts--item">spb9714664@yandex.ru</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import modalForm from "../components/modalForm.vue";

const modalActive = ref(false);

const scrollToAnchor = (anchor) => {
  const element = document.querySelector(anchor);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
</script>

<style lang="scss" scoped>
.link {
  border-bottom: 1px rgb(253, 255, 252) solid;
  font-weight: 700;
}
@import "../fluid.sass";
.row {
  background: #5f5f5f;
  color: #fff;
}
.footer-txt {
  @include fluid("margin", 50);
  text-align: left;
}
footer {
  background: #5f5f5f;
  @include fluid("font-size", 18);
  @include fluid("height", 200);
  .footer {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
.container {
  text-align: center;
  h1 {
    @include fluid("margin-top", 10);
    @include fluid("margin-bottom", 50);
  }
}
.contacts {
  display: flex;
  @include fluid("gap", 250);
}
.contacts--item {
  span {
    margin-right: 20px;
  }
}
.contacts-items {
  text-align: start;
  display: flex;
  flex-direction: column;
  @include fluid("gap", 25);
}
.btn--wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.btn--item {
  position: relative;
  border-radius: 0 6px 6px 0;
  background: #006f92;
  align-self: flex-end;
  height: 100%;
  @include fluid("width", 57);
  cursor: pointer;
  transition: all 0.5s ease;
}
.btn--item:hover {
  background: #007fa7;
}
.btn--item::before {
  content: "";
  position: absolute;
  border: #fff solid;
  @include fluid("border-width", 1);
  @include fluid("width", 19);
  @include fluid("top", 24);
  @include fluid("left", 11);
}
.btn--item::after {
  content: "";
  position: absolute;
  border: 0px #fff solid;
  @include fluid("border-bottom-width", 2);
  @include fluid("border-right-width", 2);
  @include fluid("width", 10);
  @include fluid("height", 10);
  @include fluid("top", 20);
  @include fluid("left", 21);
  transform: rotate(-45deg);
}
.footer-row {
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
}
.nav-ancors {
  display: flex;
  @include fluid("gap", 20);
  cursor: pointer;
}
.ancor-line {
  opacity: 0;
  border: 1px #fff solid;
  width: 0px;
  transition: all 1s ease;
}
.nav-ancor:hover {
  .ancor-line {
    opacity: 1;
    width: 100%;
  }
}
.logo {
  @include fluid("width", 200);
}
@media (min-width: 200px) and (max-width: 500px) {
  .contacts {
    flex-direction: column;
  }
  .btn {
    @include fluid("height", 100);
    @include fluid("width", 500);
    @include fluid("font-size", 55);
  }
  .btn--item {
    @include fluid("height", 100);
    @include fluid("width", 100);
  }
  .btn--item::before {
    @include fluid("border-width", 1);
    @include fluid("width", 50);
    @include fluid("top", 50);
    @include fluid("left", 20);
  }
  .btn--item::after {
    @include fluid("border-bottom-width", 5);
    @include fluid("border-right-width", 5);
    @include fluid("width", 30);
    @include fluid("height", 30);
    @include fluid("top", 38);
    @include fluid("left", 40);
  }
  .footer {
    flex-direction: row !important;
  }
  .footer-row {
    justify-content: space-around;
    flex-direction: column;
  }
  .nav-ancors {
    flex-direction: column;
  }
  footer {
    width: 100%;
    height: 300px;
    @include fluid("font-size", 35);
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  .nav-ancors {
    display: none;
  }
}
</style>
