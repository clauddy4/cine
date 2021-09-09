<template>
  <div>
    <router-link :to="{ name: 'Home' }">Популярное</router-link>
    <router-link :to="{ name: 'Articles' }">Статьи</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
