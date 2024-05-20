<template>
  <div id="section5" class="container">
    <div class="mt-100"></div>
    <div class="cards--title">
      <h1>Этапы работы</h1>
    </div>
    <div class="row cards">
      <div class="card w col-3">
        <div class="card--circle">1</div>
        <div class="card--title">Коммерческое обоснование</div>
        <div class="card--txt">
          На основании Ваших требований к продукту, мы выработаем оптимальный
          алгоритм работы. На его основании определим затраты на материалы,
          производство и упаковку продукции. После чего мы составим коммерческое
          предложение с подробным разъяснением всего технологического процесса и
          сроков производства.
        </div>
      </div>
      <div class="card g col-3">
        <div class="card--circle">2</div>
        <div class="card--title">Старт</div>
        <div class="card--txt">
          После заключения договора мы приступаем к проектированию оснастки,
          согласовываем сроки поставки сырья, упаковки и комплектующих с
          субподрядчиками. От сложности изделия и процесса его производства
          зависят сроки проектирования, изготовления оснастки, и
          подготовительных работ. Обычно полный процесс производства от чертежа
          до упаковки занимает от одного до трёх месяцев.
        </div>
      </div>
      <div class="card w col-3">
        <div class="card--circle">3</div>
        <div class="card--title">Процесс работы</div>
        <div class="card--txt">
          После создания оснастки, и утверждения опытного образца мы приступаем
          к работе. Средний срок производства установочной партии – две недели.
          Документальное оформление не займет много времени, в комплекте с
          документами мы можем вложить сертификаты на использованные материалы и
          другие необходимые справки и лицензии.
        </div>
      </div>
      <div class="card g col-3">
        <div class="card--circle">4</div>
        <div class="card--title">Поставки крупносерийных партий</div>
        <div class="card--txt">
          Начиная с этого этапа Вы просто заказываете очередную партию товаров
          по мере необходимости. По согласованию с Вами мы можем формировать
          складской запас, и отгружать день-в-день, либо же производить
          продукцию по мере поступления заказов на неё. Все вопросы по
          поддержанию и обновлению оснастки, заказу упаковки, соответствию
          маркировок мы берём на себя.
        </div>
      </div>
    </div>
  </div>
  <h1></h1>
</template>

<script></script>

<style lang="scss" scoped>
@import "../fluid.sass";
.cards--title {
  @include fluid("margin-top", 100);
  @include fluid("margin-bottom", 100);
  width: 100%;
  h1 {
    margin: auto;
    font-weight: 700;
    @include fluid("width", 276);
    @include fluid("font-size", 40);
    @include fluid("border-width", 1);
    border-bottom: #000 solid;
  }
}
.cards {
  justify-content: center;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include fluid("gap", 20);
  @include fluid("padding", 40);
  @include fluid("padding-top", 60);
  @include fluid("height", 550);
  transition: 1s all ease;
}
.w {
  background: #dceaf0;
  color: #000;
  border-color: #000;
}
.g {
  background: #b5cbd4;
  color: #fff;
  border-color: #fff;
}
.card--circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-radius: 50%;
  @include fluid("width", 100);
  @include fluid("height", 100);
  @include fluid("font-size", 30);
  @include fluid("border-width", 2);
  transition: 0.4s all ease;
}
.card--title {
  align-self: flex-start;
  @include fluid("font-size", 25);
  font-weight: 700;
}
.card--txt {
  @include fluid("font-size", 12);
}
.card:hover {
  .card--circle{
    @include fluid("width", 80);
  @include fluid("height", 80);
  }
}
</style>
