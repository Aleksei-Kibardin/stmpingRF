<template>
  <div id="section1" class="head--container">
    <header class="container">
      <div class="row row-wrap">
        <div class="content-header col-6">
          <div class="txt">
            <p>
              <span>КРУПНОСЕРИЙНАЯ ШТАМПОВКА МЕТАЛЛИЧЕСКИХ ИЗДЕЛИЙ</span><br />
              <br />
              ЛИСТОВАЯ АВТОМАТИЧЕСКАЯ <br />
              ОБЪЁМНАЯ РУЧНАЯ ШТАМПОВКА. <br />
              ИНЖИНИРИНГ. ИМПОРТОЗАМЕЩЕНИЕ. <br />
              СКВОЗНОЙ КОНТРОЛЬ КАЛИБРАМИ И ИЗМЕРИТЕЛЬНЫМ ИНСТРУМЕНТОМ
            </p>
          </div>
          <div class="modal-btn">
            <modal-form :btnTxt="'Заказать обратный звонок'"></modal-form>
          </div>
        </div>
        <div class="slider--wrap">
          <div class="img--wrap">
            <img
              v-for="(t, i) in slides"
              class="img"
              :key="t"
              :class="{ 'active-img': currentSlide === i }"
              :src="`${t.src}`"
              alt=""
            />
          </div>
          <div class="wrap-btn-slider">
            <div class="prev" @click="prevSlide(intervalId)"></div>
            <div class="pagination">
              <div
                class="dot"
                v-for="(t, i) in slides"
                :key="t"
                @click="currentSlide = i"
                :class="{ active: currentSlide === i }"
              ></div>
            </div>
            <div class="next" @click="nextSlide(intervalId)"></div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import modalForm from "./modalForm.vue";

const modalActive = ref(false);
const slides = [
  {
    src: "https://domart.com/sites/default/files/inline-images/holodnaya_shtampovka.jpg",
  },
  {
    src: "https://cly-del.com/media/pages/services/precision-metal-stamping/progressive-stamping/b4b823bdf6-1684331756/services-progressive-metal-stamping-1920x-q72.jpg",
  },
  {
    src: "https://avatars.dzeninfra.ru/get-zen_doc/3753737/pub_63c51301431ef9119c890df5_63c51317ccc0933e4ca638c1/scale_1200",
  },
  {
    src: "https://tdc-zavod.ru/img/catalog/c10.jpg",
  },
];
const nextSlide = (interval) => {
  currentSlide.value = currentSlide.value === 3 ? 0 : currentSlide.value + 1;
  if (interval) {
    clearInterval(interval);
  }
};
const prevSlide = (interval) => {
  currentSlide.value = currentSlide.value === 0 ? 3 : currentSlide.value - 1;
  if (interval) {
    clearInterval(interval);
  }
};
const currentSlide = ref(0);
const intervalId = setInterval(() => {
  nextSlide();
}, 4000);
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.modal-btn {
  @include fluid("margin-top", 50);
}
.head--container {
  @include fluid("margin-top", 70);
  @include fluid("height", 900);
}
.slider--wrap {
  @include fluid("height", 600);
  padding: 0;
  position: relative;
}
.img--wrap {
  position: relative;
  @include fluid("width", 600);
  @include fluid("height", 600);
}
.img {
  position: absolute;
  box-shadow: var(--head-box-x) var(--head-box-y) 0 0 #b5cbd4;
  @include fluid("width", 600);
  @include fluid("height", 600);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: 0.5s all ease;
}
.wrap-btn-slider {
  position: absolute;
  @include fluid("bottom", 20);
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.pagination {
  display: flex;
  @include fluid("gap", 20);
  align-items: center;
}
.dot {
  @include fluid("width", 15);
  @include fluid("height", 15);
  background: #fff;
  opacity: 0.5;
  border-radius: 50%;
  transition: 1s all ease;
}
.active-img {
  display: block;
  opacity: 1;
}
.active {
  opacity: 1;
}
.prev,
.next {
  border: 0 #fff solid;
  border-top-width: 2px;
  border-left-width: 2px;
  @include fluid("border-top-width", 3);
  @include fluid("border-left-width", 3);
  @include fluid("width", 30);
  @include fluid("height", 30);
}
.prev {
  transform: rotate(-45deg);
}
.next {
  transform: rotate(130deg);
}

.row-wrap {
  justify-content: center;
}

.content-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  .txt {
    @include fluid("margin-top", 30);
    text-align: right;
    width: 100%;
  }
  span {
    @include fluid("font-size", 40);
    font-weight: 900;
  }
  p {
    @include fluid("margin-top", 20);
    @include fluid("font-size", 24);
  }
}
.container {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}
@media (max-width: 991px) {
  .head--container {
    height: 100%;
    margin-bottom: 20%;
    margin-top: 10%;
  }
  .content-header {
    h1 {
      @include fluid("width", 700);
    }
    p {
      @include fluid("font-size", 26);
    }
    .txt {
      text-align: center;
    }
  }
}
</style>
