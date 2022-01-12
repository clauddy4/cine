<template>
  <component :is="tag"
             :href="href"
             :target="href ? '_blank' : ''"
             :to="to"
             class="ui-btn"
             :class="disabled ? 'ui-btn__disabled' : ''"
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
    disabled: {
      type: Boolean,
      default: false
    }
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
      if (!this.disabled)
        this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.ui-btn {
  display: block;
  margin-left: 0;
  margin-right: auto;
  border: none;
  outline: none;
  cursor: pointer;
  background: #112877;
  padding: 9px 103px;
  color: #F1ECFF;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: -0.09em;
  &__disabled {
    background: #112877;
    cursor: pointer;
    color: #eee
  }

  &:hover {
    background: #1737a4;
  }
}

</style>