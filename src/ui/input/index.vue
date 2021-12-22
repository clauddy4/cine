<template>
    <input
        :placeholder="placeholder"
        v-model="modelValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :disabled="disabled"
        :type="password ? 'password' : 'input'"
        class="ui-input"
        :class="{
                  'ui-input__focused': isFocused,
                  'ui-input__disabled': disabled
        }"
    />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      val: '',
      modelValue: this.$props.value,
      interactions: 0,
      isFocused: false
    }
  },
  watch: {
    modelValue() {
      this.$emit('input', this.modelValue)
    }
  },
}
</script>

<style lang="scss">
.ui-input {
  display: block;
  margin-bottom: 16px;
  padding: 10px 8px;
  border: 1px solid;
  border-radius: 4px;
  width: 250px;
  font-weight: 600;
  font-size: 14px;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #444
  }

  &__focused {
    border: 2px solid #112877;
    background: #F0FDFF;
  }
}
</style>