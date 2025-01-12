<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style>
dialog {
  background-color: #0c0c0d;
  border-radius: 15px;
  position: fixed;
  top: 20vh;
  width: 30%;
  color: #fff;
}
</style>
