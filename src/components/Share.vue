<template>
  <div class="share">
    <span class="share__text">Поделиться</span>
    <div class="share__social">
      <a class="link share__link">
        <svg class="share__icon" aria-hidden="true" focusable="false" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.52466 0H2.42153C1.07623 0 0 1.07623 0 2.42153V9.79372C0 11.139 1.07623 12.2152 2.42153 12.2152H9.57848C10.9238 12.2152 12 11.139 12 9.79372V2.42153C11.9462 1.07623 10.87 0 9.52466 0ZM9.09417 2.58296C9.09417 2.85202 9.30942 3.12108 9.63229 3.12108C9.95516 3.12108 10.1704 2.90583 10.1704 2.58296C10.1704 2.3139 9.95516 2.04484 9.63229 2.04484C9.36323 2.04484 9.09417 2.26009 9.09417 2.58296ZM3.06726 6.08072C3.06726 7.69507 4.35874 8.98655 5.97309 8.98655C7.58744 8.98655 8.87892 7.69507 8.87892 6.08072C8.87892 4.46637 7.58744 3.17489 5.97309 3.17489C4.35874 3.17489 3.06726 4.46637 3.06726 6.08072Z" fill="#000000"/>
        </svg>
        <span class="visually-hidden">Копировать.</span>
      </a>
      <a class="link share__link">
        <svg class="share__icon" aria-hidden="true" focusable="false" width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1342 0.0544041L0.605315 4.49955C-0.184867 4.80845 -0.170917 5.24589 0.469798 5.44917L3.42127 6.36988L10.2679 2.05926C10.5857 1.84801 10.8807 1.96758 10.6395 2.17982L5.09929 7.18498L4.88705 10.2271C5.19594 10.2271 5.33046 10.0926 5.4899 9.93318L6.93175 8.54413L9.92109 10.7473C10.4661 11.0562 10.8558 10.8967 11.0012 10.2411L12.9642 0.993057L12.9632 0.994054C13.1366 0.184939 12.6693 -0.138907 12.1342 0.0544041Z" fill="#000000"/>
        </svg>
        <span class="visually-hidden">Telegram.</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Share",
};
</script>

<style scoped>
.share {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: fit-content;
  width: 100%;
  margin-left: auto;
}

.share__text {
  margin-right: 20px;
  font-size: 18px;
  line-height: 20px;
  text-transform: uppercase;
}

.share__social {
  display: flex;
  flex-wrap: wrap;
}

.share__link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding: 5px;
}

.share__link:last-child {
  margin-right: 0;
}

.share__icon {
  width: 24px;
  height: 24px;
}
</style>
