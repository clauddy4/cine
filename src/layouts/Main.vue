<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <Header />
    <HeaderMobile />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";

export default {
  components: {
    Header,
    HeaderMobile,
    Footer
  }
};
</script>

<style scoped>
</style>