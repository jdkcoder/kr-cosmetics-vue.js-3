<script setup>
import Header from "./components/Header.vue";
import Section1 from "./components/Section1.vue";
import Section2 from "./components/Section2.vue";
import Section3 from "./components/Section3.vue";
import Footer from "./components/Footer.vue";
</script>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.querySelector("section").scrollIntoView({ behavior: "smooth" });
  },
};
</script>
<template>
  <Header />
  <Section1 />
  <Section2 />
  <Section3 />
  <Footer />
  <div class="nav-dot">
    <a class="navigate" href="#header" v-smooth-scroll></a>
    <a class="navigate" href="#s1" v-smooth-scroll></a>
    <a class="navigate" href="#s2" v-smooth-scroll="{ offset:25 }"></a>
    <a class="navigate" href="#s3" v-smooth-scroll="{ offset:50 }"></a>
    <a class="navigate" href="#footer" v-smooth-scroll></a>
  </div>
</template>
<style>
div.nav-dot {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: grid;
  margin-right: 1.25rem;
}
div.nav-dot > * + * {
  margin-top: 1.5rem;
}
div.nav-dot a.navigate {
  height: 0.5rem;
  width: 0.5rem;
  background: transparent;
  border-radius: 50%;
  border: 2px solid red;
  transition: all 0.4s;
}
*,
::after,
::before {
  margin: 0;
  padding: 0;
  position: relative;
}
body,
html {
  background: #f0f0f0;
  color: #fff;
  user-select: none;
}

a {
  text-decoration: none;
  color: #f0f0f0;
}
section {
  scroll-margin-top: -3rem !important;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
button {
  cursor: pointer;
}
@font-face {
  font-family: "Modern H";
  src: url(https://5s8t8.csb.app/ModernH-EcoLight.v1.0_0.ttf);
}
@font-face {
  font-family: "Modern H Bold";
  src: url(https://5s8t8.csb.app/ModernH.ttf);
}
@font-face {
  font-family: "Leto Sans";
  src: local("Leto Sans Thin"), local("Leto-Sans-Thin"),
    url("https://5s8t8.csb.app/LetoSans-Thin.woff2") format("woff2"),
    url("https://5s8t8.csb.app/LetoSans-Thin.woff") format("woff"),
    url("https://5s8t8.csb.app/LetoSans-Thin.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "Leto Sans";
  src: local("Leto Sans Bold"), local("Leto-Sans-Bold"),
    url("https://5s8t8.csb.app/LetoSans-Bold.woff2") format("woff2"),
    url("https://5s8t8.csb.app/LetoSans-Bold.woff") format("woff"),
    url("https://5s8t8.csb.app/LetoSans-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Leto Sans";
  src: local("Leto Sans Regular"), local("Leto-Sans-Regular"),
    url("https://5s8t8.csb.app/LetoSans-Regular.woff2") format("woff2"),
    url("https://5s8t8.csb.app/LetoSans-Regular.woff") format("woff"),
    url("https://5s8t8.csb.app/LetoSans-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Leto Sans Condensed";
  src: local("Leto Sans Condensed Thin"), local("Leto-Sans-Condensed-Thin"),
    url("https://5s8t8.csb.app/LetoSansCondensed-Thin.woff2") format("woff2"),
    url("https://5s8t8.csb.app/LetoSansCondensed-Thin.woff") format("woff"),
    url("https://5s8t8.csb.app/LetoSansCondensed-Thin.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}
</style>
