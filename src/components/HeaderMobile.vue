<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><router-link class="menu__item" :to="{ name: 'Home' }">Новое</router-link></li>
      <li><router-link class="menu__item" :to="{ name: 'Articles' }">Статьи</router-link></li>
      <li><router-link class="menu__item" :to="{ name: 'Reviews' }">Рецензии</router-link></li>
      <li><router-link class="menu__item" :to="{ name: 'Movies' }">Фильмы</router-link></li>
      <li><router-link class="menu__item" :to="{ name: 'About' }">О проекте</router-link></li>
      <li>
        <a class="menu__item" href="#">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6696 21.5777C24.1101 22.0183 24.1101 22.7327 23.6696 23.1733C23.229 23.6138 22.5146 23.6138 22.074 23.1733L18.1253 19.2245C17.6847 18.7839 17.6847 18.0696 18.1253 17.629C18.5659 17.1884 19.2802 17.1884 19.7208 17.629L23.6696 21.5777ZM11.0256 19.555C6.04092 19.555 2 15.5141 2 10.5293C2 5.54458 6.04092 1.50366 11.0256 1.50366C16.0104 1.50366 20.0513 5.54458 20.0513 10.5293C20.0513 15.5141 16.0104 19.555 11.0256 19.555ZM11.0256 17.2986C14.7642 17.2986 17.7949 14.2679 17.7949 10.5293C17.7949 6.79076 14.7642 3.76007 11.0256 3.76007C7.2871 3.76007 4.25641 6.79076 4.25641 10.5293C4.25641 14.2679 7.2871 17.2986 11.0256 17.2986Z" fill="#F1ECFF"/>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderMobile"
}
</script>

<style scoped>
.hamburger-menu {
  display: none;
}
@media (max-width: 991px) {
  .hamburger-menu {
    display: block;
  }
}
#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  right: 0;
}

.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 37px;
  right: 30px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #f1ecff;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  right: -100%;

  width: 300px;
  height: 100%;

  margin: 0;
  padding: 80px 0;

  list-style: none;

  background-color: #6E7FB7;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);

  transition-duration: .25s;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  color: #f1ecff;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  transition-duration: .25s;
}
.menu__item:hover {
  text-decoration: underline;
}
</style>