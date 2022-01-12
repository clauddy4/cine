<template>
  <div class="table">
    <div class="table-row" v-for="item in articles"
        :key="item.id">
      <router-link
          class="table-row__title"
          :to="{ name: 'ArticleEdit', params: { id: item.id } }"
      >{{ item.title }}</router-link
      >
      <div class="table-row__date">{{ item.createdAt | formatDate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesList",
  props: {
    articles: Array
  }
}
</script>

<style scoped lang="scss">
.table {
  box-shadow: 0 0 0 2px inset #000000;
}

.table-row {
  display: flex;
  box-shadow: 0 0 0 1px inset #000000;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 110%;
}

.table-row__title {
  max-width: 740px;
  width: 100%;
  padding: 15px 20px;
  color: #000000;
  border-right: 2px solid #000000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.table-row__date {
  padding: 15px 20px;
}
</style>