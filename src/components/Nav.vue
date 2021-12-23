<template>
  <nav>
    <img src="https://i.imgur.com/TieyMZq.png" class="logo" />
    <div class="right-corner">
      <a href="#" v-for="(link, index) in links" :key="index">
        {{ link.name }}
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        { name: 'hera story' },
        { name: 'makeup' },
        { name: 'skincare' },
        { name: 'fragrance' },
      ],
    };
  },
};
</script>
<style scoped>
nav {
  font-family: 'Leto Sans', sans-serif;
  position: absolute;
  top: 0rem;
  left: 0rem;
  padding: 3rem 0 1rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  font-weight: 100;
}
nav img.logo {
  height: 60px;
  margin-right: 30em;
}
nav div.right-corner {
  align-self: center;
}
nav div.right-corner > * + * {
  margin-left: 2rem;
}
nav a {
  color: #f0f0f0;
  transition: color 0.4s;
}
nav a:hover {
  color: #dabb87;
  transition: color 0.4s;
}
</style>
