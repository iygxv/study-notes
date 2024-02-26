<template>
  <div class="header" @click="changeTheme">
    <div class="header-left">
      <slot name="left">左边</slot>
    </div>
    <slot name="center" class="">中间</slot>
    <div class="header-right">
      <slot name="right">右边</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      changeTheme () {
        document.documentElement.setAttribute('data-theme', 'theme1')
      }
    }
  }
</script>

<style scoped lang="scss">
@import "./variable.scss";
@import "./mixin.scss";
.header{
  width: 100%;
  height: 100px;
  font-size: $font_medium;
  @include bg_color();
}
</style>
