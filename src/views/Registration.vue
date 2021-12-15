<template>
  <div>
    <div class="registration">
      <h2 class="content__section-title">Регистрация</h2>
      <UiInput
          v-model="userName"
          placeholder="Псевдоним"
      />
      <UiInput
          v-model="email"
          placeholder="Email"
      />
      <UiInput
          v-model="password"
          placeholder="Пароль"
      />
      <UiInput
          v-model="firstName"
          placeholder="Имя"
      />
      <UiInput
          v-model="lastName"
          placeholder="Фамилия"
      />
      <textarea
          v-model="about"
          placeholder="О себе"
      >
      </textarea>

      <span>
        Уже есть аккаунт?
        <router-link
            :to="{name: 'Login'}"
            class="link registration__link"
        >
          Войдите
        </router-link>
      </span>

      <UiBtn @click="register">Зарегистрироваться</UiBtn>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      about: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    register() {
      let userData = {
        'userName': this.userName,
        'email': this.email,
        'password': this.password,
        'firstName': this.firstName,
        'lastName': this.lastName,
        'about': this.about,
      }


      this.$store.dispatch('auth/registration', userData)
          .then(() => {
            let loginData = {
              'login': this.email,
              'password': this.password
            }
            this.$store.dispatch('auth/login', loginData)
                .then((data) => {
                  axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

                  this.$router.push({name: 'Home'});
                })
                .catch((error) => {
                  console.log(error)
                });
          })
          .catch((error) => {
            console.log(error)
          });
    }
  }
}
</script>

<style scoped lang="scss">
.registration {
  margin: 100px auto;
  text-align: -webkit-center;

  &__link {
    color: #FD3AE9
  }

  textarea {
    resize: none;
    display: block;
    width: 250px;
    padding: 10px 8px;
    font-weight: 600;
    font-size: 14px;
    border-radius: 4px;
    margin-bottom: 16px;

    &::placeholder {
      color: #444
    }
  }
}
</style>