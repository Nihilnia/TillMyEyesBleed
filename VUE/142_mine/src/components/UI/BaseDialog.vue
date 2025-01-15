<template>
  <teleport to="body">
    <div @click="$emit('emit-handle-dialog')"></div>
    <dialog open>
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot></dialog
  ></teleport>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  top: 25%;
  left: 20%;
  position: fixed;
  z-index: 100;
  margin: 0;
  width: 60%;
}
</style>
