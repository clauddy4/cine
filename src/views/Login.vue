<template>
  <div class="login">
    <h2 class="content__section-title">Войти</h2>
    <UiInput
        v-model="login"
        placeholder="Логин или почта"
    />
    <UiInput
        v-model="password"
        placeholder="Пароль"
    />
    <span>
      Ещё нет аккаунта?
      <router-link
        :to="{name: 'Registration'}"
        class="link login__link"
      >
        Создайте
      </router-link>
    </span>

    <UiBtn @click="handleLogin">Войти</UiBtn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      let userData = {
        'login': this.login,
        'password': this.password
      }

      this.$store.dispatch('auth/login', userData)
          .then((data) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

            this.$router.push({name: 'Home'});
          })
          .catch((error) => {
            console.log(error)
          });
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  margin: 100px auto;
  text-align: -webkit-center;

  &__link {
    color: #FD3AE9
  }
}
</style>