<template>
  <div id="section2" class="container">
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
    <div class="row cards">
      <div
        class="card col-3"
        v-for="(t, i) in cards"
        :key="(t, i)"
        :style="{ background: t.color }"
        @click="currentCard = t"
      >
        <div class="wrap-circl--card">
          <div class="circl--card" :style="{ background: t.color }">
            {{ i + 1 }}
          </div>
        </div>
        <div class="card--title">{{ t.title }}</div>
        <div>
          {{ t.txt }}
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="desc--activiti col-12"
        :style="{ background: currentCard.color }"
      >
        <h1>{{ currentCard.title }}</h1>
        <p>
          {{ currentCard.txt }}
        </p>
      </div>
    </div>
  </div>
  <div class="activiti--footer">
    <div class="container activiti--footer--items">
      <div class="foo">
        <img src="../assets/industry 1@2x.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
          tempor.
        </p>
      </div>
      <div class="foo">
        <img src="../assets/like (3) 1@2x.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
          tempor.
        </p>
      </div>
      <div class="foo">
        <img src="../assets/stopwatch 1@2x.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia
          tempor.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentCard = ref({
  title: "Title",
  txt: "Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia tempor.",
  color: "#1379fe5e",
});

const cards = [
  {
    title: "Title",
    txt: "Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia tempor.",
    color: "#1379fe5e",
  },
  {
    title: "Title",
    txt: "Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia tempor.",
    color: "#feee135e",
  },
  {
    title: "Title",
    txt: "Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia tempor.",
    color: "#fe4a135e",
  },
  {
    title: "Title",
    txt: "Lorem ipsum dolor sit amet consectetur. Tortor nibh feugiat lacinia tempor.",
    color: "#56fe135e",
  },
];
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
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
  @include fluid("font-size", 18);
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
    h1{
      @include fluid("font-size", 39);
    }
    p{
      @include fluid("font-size", 26);
    }
  }
  .card {
    margin-bottom: 50px;
    @include fluid("font-size", 26);
    .card--title{
      @include fluid("font-size", 36);
    }
  }
  .desc--activiti{
    h1{
      @include fluid("font-size", 39);
    }
    p{
      @include fluid("font-size", 26);
    }
  }
  .activiti--footer {
    height: 100%;
    width: 100%;
    .activiti--footer--items{
      flex-direction: column;
      @include fluid("gap", 50);
      img{
        width: 18%;
        height: 18%;
      }
      p{
        @include fluid("font-size", 26);
      }
    }
  }
}
</style>
