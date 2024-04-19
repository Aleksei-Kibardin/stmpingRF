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
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="cards">
        <div class="card col-3">
          <div></div>
          <div></div>
        </div>
        <div class="card col-3">
          <div></div>
          <div></div>
        </div>
        <div class="card col-3">
          <div></div>
          <div></div>
        </div>
        <div class="card col-3">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="desc col-12"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

const cards = [
    {
        title: "",
        txt: "",
        color: 1
    }
]

</script>

<style lang="scss" scoped>
@import "../fluid.sass";
.container {
  @include fluid("max-height", 991);
}
.title--activiti{
    h1{
        font-size: 30px;
    }
}
</style>
