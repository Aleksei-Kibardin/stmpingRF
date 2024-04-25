<template>
  <div id="section5" class="row">
    <div class="container">
      <h1>Контакты компании</h1>
      <div class="contacts">
        <div class="contacts-items col-6">
          <h3>Контактные данные</h3>
          <div class="phone contacts--item">
            <span>Телефон:</span> +7800553535
          </div>
          <div class="address contacts--item">
            <span>Адресс:</span> г. Санкт-Петербург ул. **************
          </div>
          <div class="email contacts--item">
            <span>Email</span> ******@mail.com
          </div>
          <div class="btn--wrap">
            <div class="btn">
              <span>Оставить заявку</span>
            </div>
            <div class="btn--item"><div class="btn--arrow"></div></div>
          </div>
        </div>
        <div class="map col-6">
          <img
            src="https://static-maps.yandex.ru/v1?ll=30.358134,59.925083&size=650,450&z=16&pt=30.358134,59.925083,pm2rdl&apikey=625b26d9-342a-4cd9-a91b-6af62e134a40"
            alt=""
          />
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
          <div class="nav-ancor">Главная</div>
          <div class="nav-ancor">Деятельность</div>
          <div class="nav-ancor">Наша продукция</div>
          <div class="nav-ancor">Услуги</div>
          <div class="nav-ancor">Контакты</div>
        </div>
        <div class="phone contacts--item">+7800553535</div>
      </div>
      <div class="footer-row">
        <span>© Все права защищены. 2022</span>
        <div class="address contacts--item">
          г. Санкт-Петербург ул. **************
        </div>
        <div class="email contacts--item">******@mail.com</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.row {
  background: #f6f6f6;
}
footer {
  background: #323232;
  @include fluid("font-size", 18);
  @include fluid("height", 200);
  .footer {
    color: #b8b8b8;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
.container {
  text-align: center;
  h1 {
    margin-bottom: 50px;
  }
}
.contacts {
  display: flex;
  @include fluid("gap", 250);
}
.contacts--item {
  span {
    margin-right: 20px;
    color: #494848;
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
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #007fa7;
  border-radius: 6px 0 0 6px;
  width: 100%;
  cursor: pointer;
  @include fluid("min-width", 220);
  @include fluid("font-size", 25);
  @include fluid("height", 48);
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
}
.logo {
  @include fluid("width", 200);
}
</style>
