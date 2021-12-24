<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Sections from './components/Sections.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Sections />
  <Footer />
</template>
<style>
*,
::after,
::before {
  margin: 0;
  padding: 0;
  position: relative;
}
body,
html {
  background: #000;
  color: #fff;
  overflow-x: hidden;
  user-select: none;
  height: 100%;
  width: 100%;
}

a {
  text-decoration: none;
  color: #f0f0f0;
}
section {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
button {
  cursor: pointer;
}
@font-face {
  font-family: 'Mordern H';
  src: url(https://5s8t8.csb.app/ModernH-EcoLight.v1.0_0.ttf);
}
@font-face {
  font-family: 'Mordern H Bold';
  src: url(https://5s8t8.csb.app/ModernH.ttf);
}
@font-face {
  font-family: 'Leto Sans';
  src: local('Leto Sans Thin'), local('Leto-Sans-Thin'),
    url('https://5s8t8.csb.app/LetoSans-Thin.woff2') format('woff2'),
    url('https://5s8t8.csb.app/LetoSans-Thin.woff') format('woff'),
    url('https://5s8t8.csb.app/LetoSans-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Leto Sans';
  src: local('Leto Sans Bold'), local('Leto-Sans-Bold'),
    url('https://5s8t8.csb.app/LetoSans-Bold.woff2') format('woff2'),
    url('https://5s8t8.csb.app/LetoSans-Bold.woff') format('woff'),
    url('https://5s8t8.csb.app/LetoSans-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Leto Sans';
  src: local('Leto Sans Regular'), local('Leto-Sans-Regular'),
    url('https://5s8t8.csb.app/LetoSans-Regular.woff2') format('woff2'),
    url('https://5s8t8.csb.app/LetoSans-Regular.woff') format('woff'),
    url('https://5s8t8.csb.app/LetoSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Leto Sans Condensed';
  src: local('Leto Sans Condensed Thin'), local('Leto-Sans-Condensed-Thin'),
    url('https://5s8t8.csb.app/LetoSansCondensed-Thin.woff2') format('woff2'),
    url('https://5s8t8.csb.app/LetoSansCondensed-Thin.woff') format('woff'),
    url('https://5s8t8.csb.app/LetoSansCondensed-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
</style>
