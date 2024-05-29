<template>
  <div id="section5" class="container">
    <div class="mt-100"></div>
    <div class="row cards">
      <div class="cards--title">
        <h1 class="title">Видео процесса производства деталей</h1>
        <div class="videos">
          <div class="video">
            <iframe
              width="400"
              height="215"
              src="https://www.youtube.com/embed/hWZlfi39AX4?si=Qj4uk8sq0CJePqoj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video">
            <iframe
              width="400"
              height="215"
              src="https://www.youtube.com/embed/hWZlfi39AX4?si=Qj4uk8sq0CJePqoj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video">
            <iframe
              width="400"
              height="215"
              src="https://www.youtube.com/embed/hWZlfi39AX4?si=Qj4uk8sq0CJePqoj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video">
            <iframe
              width="400"
              height="215"
              src="https://www.youtube.com/embed/hWZlfi39AX4?si=Qj4uk8sq0CJePqoj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video">
            <iframe
              width="400"
              height="215"
              src="https://www.youtube.com/embed/hWZlfi39AX4?si=Qj4uk8sq0CJePqoj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video">
            <iframe
              width="400"
              height="215"
              src="https://www.youtube.com/embed/hWZlfi39AX4?si=Qj4uk8sq0CJePqoj"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div id="section6" class="container">
      <h1 class="title activiti">Другие направления деятельности</h1>
      <div class="cards">
        <div class="card col-4">
          <div class="wrap-img">
            <img
              class="img--card"
              src="/img/Холодная листовая штамповка.jpeg"
              alt=""
            />
          </div>

          <p class="txt--card">
            Проектирование и изготовление оснастки для холодной листовой
            штамповки
          </p>
        </div>
        <div class="card col-4">
          <div class="wrap-img">
            <img
              class="img--card"
              src="/img/Холодная листовая штамповка.jpeg"
              alt=""
            />
          </div>
          <p class="txt--card">
            Проектирование и запуск в эксплуатацию линий автоматизированной
            штамповки
          </p>
        </div>
        <div class="card col-4">
          <div class="wrap-img">
            <img
              class="img--card"
              src="/img/Холодная листовая штамповка.jpeg"
              alt=""
            />
          </div>
          <p class="txt--card">
            разработка конструктивной документации и построение вспомогательной
            оснастки для нужд инструментального производства
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../fluid.sass";
.cards--title {
  @include fluid("margin-top", 100);
  @include fluid("margin-bottom", 100);
  width: 100%;
  .title {
    @include fluid("width", 680);
  }
}
#section6{
  @include fluid("padding-top", 100);
}
.title {
  margin: auto;
  font-weight: 700;
  @include fluid("width", 680);
  @include fluid("font-size", 40);
  @include fluid("border-width", 1);
  @include fluid("margin-bottom", 50);
  border-bottom: #000 solid;
}
.activiti {
  @include fluid("width", 610);
}
.videos {
  display: flex;
  flex-wrap: wrap;
  @include fluid("gap", 20);
  gap: 20px;
}
.cards {
  display: flex;
  justify-content: space-between;
}

.wrap-img{
  @include fluid("width", 400);
  @include fluid("height", 224);
  overflow: hidden;
}
.img--card {
  @include fluid("width", 400);
  transition: 0.4s all ease;
}

.img--card:hover {
  transform: scale(1.2);
}

.txt--card {
  @include fluid("margin-top", 20);
  @include fluid("margin-bottom", 100);
  @include fluid("font-size", 18);
  font-weight: 700;
}
</style>
