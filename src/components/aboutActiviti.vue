<template>
  <div class="container">
    <div class="row">
      <div class="title--activiti col-12">
        <h1>Направление деятельности</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
          tempor. Amet suspendisse praesent ipsum enim adipiscing. Eget risus
          molestie sed feugiat dictumst pulvinar viverra
        </p>
      </div>
    </div>
    <div class="row">
      <div class="cards">
        <div class="card col-3">
          <div class="wrap-circl--card">
            <div class="circl--card">1</div>
          </div>
          <div class="card--title">Title</div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
            tempor.
          </div>
        </div>
        <div class="card col-3">
          <div class="wrap-circl--card">
            <div class="circl--card">2</div>
          </div>
          <div class="card--title">Title</div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
            tempor.
          </div>
        </div>
        <div class="card col-3">
          <div class="wrap-circl--card">
            <div class="circl--card">3</div>
          </div>
          <div class="card--title">Title</div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
            tempor.
          </div>
        </div>
        <div class="card col-3">
          <div class="wrap-circl--card">
            <div class="circl--card">4</div>
          </div>
          <div class="card--title">Title</div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
            tempor.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="desc--activiti col-12">
        <h1>Engagement models</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
    </div>
  </div>
  <div class="activiti--footer">

  </div>
</template>

<script setup >
const cards = [
  {
    title: "",
    txt: "",
    color: 1,
  },
];
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.container {
  @include fluid("max-height", 991);
}
.title--activiti {
  display: flex;
  justify-content: center;
  align-items: center;
  @include fluid("height", 200);
  @include fluid("font-size", 16);
  h1 {
    @include fluid("font-size", 30);
  }
}
.cards {
  width: 100%;
  display: flex;
  @include fluid("gap", 65);
  @include fluid("margin-top", 100);
  justify-content: space-between;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  @include fluid("font-size", 18);
  @include fluid("padding-top", 20);
  @include fluid("gap", 20);
  @include fluid("height", 275);
  border-radius: 10px;
  background-color: #1379fe5e;
}
.card--title {
  @include fluid("font-size", 24);
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
  border: 1px #000 solid;
  @include fluid("height", 75);
  @include fluid("width", 75);
  @include fluid("top", -100);
  left: 35%;
  padding: 2px;
  border-radius: 50%;
}
.wrap-circl--card::after {
  content: "";
  position: absolute;
  display: block;
  @include fluid("height", 40);
  left: 50%;
  width: 0;
  border: #000 1px solid;
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
  h1 {
    @include fluid("font-size", 30);
  }
}
.activiti--footer{
  width: 100%;
  @include fluid("margin-top", 100);
  @include fluid("height", 200);
  background-image: url(../assets/activitiFooter.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
