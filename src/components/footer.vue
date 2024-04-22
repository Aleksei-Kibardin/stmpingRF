<template>
  <div class="container">
    <h1>Контакты компании</h1>
    <div class="contacts">
      <div class="contacts-txt"></div>
      <div class="map"></div>
    </div>
  </div>
  <footer></footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../fluid.sass";
footer{
  background: #323232;
  @include fluid("height", 142);
}
</style>