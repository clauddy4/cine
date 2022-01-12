<template>
    <input
        :placeholder="placeholder"
        v-model="modelValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :disabled="disabled"
        :type="password ? 'password' : 'text'"
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
  height: 23px;
  margin-bottom: 40px;
  padding: 10px 8px;
  border: none;
  box-shadow: 0 0 0 1px #000000;
  border-radius: 4px;
  max-width: 640px;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 16px;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #444
  }

  &__focused {
    box-shadow: 0 0 0 1px #112877;
    background: #F0FDFF;
  }
}
</style>