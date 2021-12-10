<template>
  <p>{{ title }}</p>
</template>

<script>
export default {
  name: "page-title",
  props: ["title"]
}
</script>

<style scoped>
p {
  text-transform: var(--page-title-text-transform, uppercase);
  font-weight: var(--page-title-text-weight, 400);
  color: var(--page-title-color, var(--primary));
  white-space: var(--page-title-white-space, nowrap);
  position: relative;
  width: min-content;
  font-size: 20px;
  text-align: var(--page-title-text-align, center);
  margin: var(--title-margin, 0);
}
p:after {
  content: '';
  position: absolute;
  top: 120%;
  left: var(--page-title-underline-position, 0);
  transform: translateX(var(--page-title-underline-position-transform, 0));
  height: 2px;
  width: var(--page-title-underline-width, 80%);
  background: var(--page-title-underline-color, #5EC4D0);
}

@media screen and (max-width: 400px) {
  p {
    font-size: 14px;
  }
}
</style>