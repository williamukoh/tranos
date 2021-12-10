<template>
  <div class="spinner">
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "spinner"
}
</script>

<style scoped>
.spinner {
  width: var(--spinner-width, 30px);
  height: var(--spinner-height, 30px);
  position: relative;
  margin-left: var(--spinner-margin-left, 5px);
}
.spinner div {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: var(--spinner-border-width, 4px) solid transparent;
  border-top-color: var(--spinner-color, grey);
  border-radius: 50%;
  animation: spinnerOne 1.2s linear infinite;
}
.spinner div:nth-child(2) {
  border: var(--spinner-border-width, 4px) solid transparent;
  border-bottom-color: var(--spinner-color, grey);
  animation: spinnerTwo 1.2s linear infinite;
}

@keyframes spinnerOne {
  0% { transform: rotate(0deg); border-width: var(--spinner-border-width, 4px)}
  50% { transform: rotate(180deg); border-width: 1px}
  100% { transform: rotate(360deg); border-width: var(--spinner-border-width, 4px)}
}
@keyframes spinnerTwo {
  0% { transform: rotate(0deg); border-width: 1px}
  50% { transform: rotate(180deg); border-width: var(--spinner-border-width, 4px)}
  100% { transform: rotate(360deg); border-width: 1px}
}

</style>