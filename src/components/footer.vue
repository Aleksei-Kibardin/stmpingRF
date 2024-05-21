<template>
  <modal-form :modalActive="modalActive"></modal-form>
  <footer id="section6" class="row">
    <div class="container">
      <h1>Контакты</h1>
      <div class="contacts">
        <div class="map col-6">
          <img
            src="https://static-maps.yandex.ru/v1?ll=30.358134,59.925083&size=650,450&z=16&pt=30.358134,59.925083,pm2rdl&apikey=625b26d9-342a-4cd9-a91b-6af62e134a40"
            alt=""
          />
        </div>
        <div class="contacts-items col-6">
          <h3>Штамповка.рф © 2024</h3>
          <div class="address contacts--item">
            <span>Адресс:</span> г. Санкт-Петербург, Лиговский проспект, 52 К
          </div>
          <div class="address contacts--item">
            <span>Инженерный отдел:</span>
          </div>
          <div class="phone contacts--item">
            <span>Телефон:</span> +7-901-971-46-64
          </div>
          <div class="email contacts--item">
            <span>Электронная почта:</span> spb9714664@yandex.ru
          </div>
          <div class="btn">Связаться</div>
        </div>
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
@import "../fluid.sass";

.container {
  @include fluid("margin-top", 100);
  @include fluid("margin-bottom", 100);
  text-align: center;
  h1 {
    @include fluid("margin-bottom", 150);
    @include fluid("font-size", 40);
    @include fluid("border-width", 1);
    border-bottom: #000 solid;
    @include fluid("width", 200);
    margin: auto;
  }
}
.contacts {
  display: flex;
  @include fluid("gap", 250);
}
.contacts--item {
  span {
    margin-right: 5px;
    color: #494848;
  }
}
.map {
  box-shadow: var(--last-box-x) var(--last-box-y) 0 0 #b5cbd4;
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
.btn {
  background: #cb9a74;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  width: auto;
  text-align: center;
  @include fluid("margin-top", 50);
  @include fluid("width", 230);
  @include fluid("padding", 10);
  @include fluid("font-size", 20);
  border-radius: 0;
  transition: 1s all ease;
}
.btn:hover {
  background: #ff9747;
}

@media (min-width: 200px) and (max-width: 500px) {
  .contacts {
    flex-direction: column;
  }
  .footer {
    flex-direction: row !important;
  }
}
</style>
