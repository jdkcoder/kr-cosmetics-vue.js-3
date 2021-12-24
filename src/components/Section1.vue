<template>
  <section id="s1">
    <div class="content">
      <div class="left">
        <div>
          <p class="hero-text" data-aos="fade-right" data-aos-duration="1500">
            HERE<br />
            NOW <br />
            MYSELF
          </p>
          <p
            class="md-text"
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-easing="linear"
          >
            contemporary seoul beauty
          </p>
          <p
            class="sm-text"
            data-aos="fade-right"
            data-aos-duration="1250"
            data-aos-easing="linear"
          >
            Seoul beauty is about finding one's natural beauty that lies deeply
            in having a strong <span>inner sense of confidence</span> <br />and
            bringing it out to shine - This is the philosophy of HERA.
          </p>
        </div>
      </div>
      <div class="img">
        <img
          src="https://i.imgur.com/wvqq2ni.jpg"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
section#s1 {
  background: #f0f0f0;
  color: #303030;
  padding: 2rem 0;
  display: grid;
  place-items: center;
}

div.content {
  width: calc(100vw - 8rem);
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
div.img {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  filter: brightness(70%);
  transition: all 0.4s;
}
section#s1:hover div.img {
  filter: brightness(90%);
  transition: all 0.4s;
}
div.img > img {
  aspect-ratio: 12/10.5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-left: 5em;
}
div.left {
  width: 40%;
  height: 100%;
}
p.hero-text,
p.md-text {
  text-transform: uppercase;
}
p.hero-text {
  font-family: 'Leto Sans', sans-serif;
  font-size: 13rem;
  line-height: 0.75;
  letter-spacing: -1rem;
}
p.md-text {
  letter-spacing: -4px;
  font-size: 2.5rem;
  word-spacing: 0px;
  font-weight: 200;
}
p.md-text,
p.sm-text,
p.sm-text-inner {
  font-weight: 100;
  font-family: 'Leto Sans', sans-serif;
}
p.sm-text {
  margin-top: 1.5rem;
  width: 23em;
  font-size: 1.25rem;
}
p.sm-text-inner {
  width: 70%;
}
p.md-text,
p.sm-text {
  margin: 1rem 0 0 1rem;
}
p.sm-text > span {
  font-family: 'Leto Sans Condensed', sans-serif;
  font-weight: 300;
}
div.left > * {
  position: absolute;
  top: calc(100% - 50rem);
  right: calc(100% - 51.5rem);
  z-index: 2;
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  section#s1 {
    padding: 0.5vw 0;
    display: inline-block;
  }
  div.img > img {
    width: 100% !important;
    margin: 0;
  }
  div.left > * {
    top: 14%;
    left: 26%;
  }
  p.hero-text {
    font-size: 10.8vw;
    letter-spacing: -0.6rem;
  }

  p.md-text {
    font-size: 2.09vw !important;
    letter-spacing: -0.125rem;
    font-weight: 200;
    margin-left: 1vw;
  }
  p.sm-text {
    margin-left: 1vw;
    font-size: 1.04vw !important;
  }
}
</style>
