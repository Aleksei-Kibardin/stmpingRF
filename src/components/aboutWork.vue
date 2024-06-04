<template>
  <div id="section5" class="container">
    <div class="mt-100"></div>
    <div class="row cards">
      <div class="cards--title">
        <div class="title">
          <h1>Видео процесса производства деталей</h1>
          <div class="line"></div>
        </div>
        <div class="videos">
          <div class="video">
          <iframe
            src="https://www.youtube.com/embed/mUaI-5ntmSU?si=qKZyZbya6DrjYdHC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/NpyWqxIyPUY?si=kNfDNrOB91B_8oSg&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/UyymQuUUSNs?si=7WY4uVBAItOwRKQ0&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/mNmg-HxY4qU?si=64hgvu1sWttffH1n&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/RfsqNKvpOZM?si=TQLTb7Wk5fmVRoKN&amp;controls=0"
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
      <div class="title activiti">
        <h1>Другие направления деятельности</h1>
        <div class="line"></div>
      </div>
      <div class="cards row">
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
  .line {
    border: 1px #000 solid;
    @include fluid("width", 680);
    @include fluid("margin-top", 20);
    margin: 20px auto auto auto;
  }
}
#section6 {
  @include fluid("padding-top", 100);
}
.title {
  margin: auto;
  font-weight: 700;
  @include fluid("width", 680);
  @include fluid("margin-bottom", 50);
  h1 {
    @include fluid("font-size", 40);
  }
}
.activiti {
  @include fluid("width", 610);
  .line {
    border: 1px #000 solid;
    @include fluid("width", 610);
    height: 1px;
    @include fluid("margin-top", 20);
    margin: 20px auto auto auto;
  }
}
.videos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @include fluid("gap", 20);
  gap: 20px;
}
.cards {
  display: flex;
  justify-content: space-between;
}

.wrap-img {
  @include fluid("height", 224);
  overflow: hidden;
}
.img--card {
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
.video-item {
  @include fluid("width", 400);
  @include fluid("height", 215);
}
@media (max-width: 1000px) {
  .cards {
    gap: 20px;
    justify-content: center;
  }
  .wrap-img{
    height: 70%;
  }
  .txt--card{
    @include fluid("font-size", 30);
  }
}
</style>
