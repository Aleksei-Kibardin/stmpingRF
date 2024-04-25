<template>
  <div id="section4" class="container">
    <div class="title--services col-12">
      <h1>Услуги</h1>
      <p>
        Our expert developers utilize the latest frameworks and components to
        create easy-to-use software solutions with a strong technical foundation
      </p>
    </div>
    <div class="row services--items">
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
      <div class="services--item col-3">
        <h1>Заголовок</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. nibh feugiat lacinia tempor.
          Amet suspendisse praesent ipsum enim adipiscing
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.title--services {
  text-align: center;
  p {
    @include fluid("margin-top", 40);
  }
}
.services--items{
  justify-content: center;
  @include fluid("gap", 20);
  @include fluid("margin-top", 100);
  @include fluid("margin-bottom", 100);
}
.services--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @include fluid("border-radius", 16);
  @include fluid("height", 290);
  border: 1px solid #c8c8c8;
  h1{
    @include fluid("font-size", 25);
  }
  p{
    @include fluid("font-size", 18);
  }
}
</style>
