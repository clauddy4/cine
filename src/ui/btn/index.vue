<template>
  <component :is="tag"
             :href="href"
             :target="href ? '_blank' : ''"
             :to="to"
             class="ui-btn"
             @click="click"
  >
    <span class="ui-btn__content">
      <span class="ui-btn__text"><slot/></span>
    </span>
    <!--     usage:
             <UiBtn @click="myFunc">         - чтобы использовать, как кнопку
             <UiBtn :to="{name: 'myLink'}">  - чтобы использовать, как ссылку
    -->
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: null
    },
  },
  computed: {
    tag() {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'router-link'
      } else {
        return 'button'
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.ui-btn {
  display: block;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 16px 0;
  background: linear-gradient(90deg, #616EB5 0%, rgba(253, 58, 233, 0.76) 100%);
  border-radius: 18px;
  padding: 15px 35px;
  color: #F1ECFF;
  font-weight: 700;
}
</style>