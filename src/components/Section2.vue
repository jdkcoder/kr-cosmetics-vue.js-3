<template>
  <section id="s2">
    <div class="header">
      <div class="title" data-aos="zoom-in-right" data-aos-duration="1500">
        <p>cosmetic</p>
        <p>lines</p>
      </div>

      <div class="s2__button">
        <button type="button" data-aos="fade" data-aos-duration="1700"></button>
      </div>
    </div>
    <div class="lines">
      <div class="line-sub" data-aos="fade-up" data-aos-duration="800">
        <img src="https://data.whicdn.com/images/334758154/original.jpg" />
        <div class="line-text" data-aos="fade-up" data-aos-duration="900">
          <p class="primary">black foundation</p>
          <p class="secondary">24-hour coverage for a chic semi-matte look</p>
        </div>
      </div>
      <!-- <div class="line-sub" data-aos="fade-up" data-aos-duration="1200">
        <img
          src="https://pbs.twimg.com/media/D1crJLzUcAAqEHq?format=jpg&name=large"
        />
        <div class="line-text" data-aos="fade-up" data-aos-duration="1500">
          <p class="primary">sensual spicy nude</p>
          <p class="secondary">24-hour coverage for a chic semi-matte look</p>
        </div>
      </div>
      <div class="line-sub" data-aos="fade-up" data-aos-duration="1400">
        <img
          src="https://sherrodstory.files.wordpress.com/2020/11/sung-hoon-edit.jpg"
        />
        <div class="line-text" data-aos="fade-up" data-aos-duration="1700">
          <p class="primary">for him</p>
          <p class="secondary">The moment your signature presence</p>
        </div>
      </div> -->
    </div>
  </section>
</template>
<style scoped>
section#s2 {
  height: 93vh;
}
section#s2 {
  background: rgb(36, 42, 42);
  background: linear-gradient(
    360deg,
    rgba(36, 42, 42, 1) 0%,
    rgba(14, 14, 17, 1) 60%
  );
  padding: 5rem 0 4rem 10rem;
  position: relative;
}
div.title {
  font-family: 'Leto Sans', sans-serif;
  font-size: 5rem;
  line-height: 0.8;
  color: #838383;
  margin-bottom: 4rem;
}
div.title > p {
  background: #bdbdbd;
  background: -webkit-linear-gradient(
    to bottom right,
    #bdbdbd 25%,
    #c5c5c5 75%
  );
  background: -moz-linear-gradient(to bottom right, #bdbdbd 25%, #c5c5c5 75%);
  background: linear-gradient(to bottom right, #bdbdbd 25%, #c5c5c5 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -6.5px;
}
div.lines {
  display: flex;
  height: 500px;
  width: calc(100% - 21em);
  justify-content: center;
}
div.lines > * + * {
  margin-left: 1.5rem;
}
div.line-sub {
  aspect-ratio: 0.9/1;
}
div.line-sub > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.4s;

  filter: brightness(60%);
}
div.line-sub > img:hover {
  transform: scale(1.07) translateY(-1rem);

  filter: brightness(90%);
  transition: all 0.4s;
}
div.line-text > p.primary,
div.title {
  text-transform: uppercase;
}
div.line-text > p.primary {
  font-family: 'Leto Sans', sans-serif;
  font-size: 1.575rem;
  font-weight: 400;
  margin: 2rem 0 1.25rem 0;
  color: #e8e5e7;
}
div.line-text > p.secondary {
  font-family: 'Leto Sans Condensed', sans-serif;
  font-size: 1.425rem;
  width: 10em;
  color: #979798;
}
.s2__button {
  align-self: center;
}
.s2__button button {
  background: transparent;
  outline: none;
  border: none;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #f0f0f0;
  white-space: nowrap;
  transform: scale(0.7);
}
.s2__button button::before {
  content: url('https://i.imgur.com/OsT4QCf.png');
  position: absolute;
  top: 2rem;
  left: 2.75rem;
}
.s2__button button::after {
  content: 'Go to catalog';
  position: absolute;
  top: 2.125rem;
  left: 9rem;
  color: #f0f0f0;
  font-size: 1rem;
  font-family: 'Leto Sans', sans-serif;
}
div.header {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 28em);
}
div.lines {
  width: 90%;
}

@media screen and (max-width: 768px) {
  .s2__button {
    align-self: unset;
    margin: 1.6vw 0 0 90%;
  }
  .s2__button button::before {
    content: url('https://i.imgur.com/noQEjsN.png');
    top: 26%;
    left: 45%;
  }
  .s2__button button::after {
    font-size: 1.6vw;
    top: 32%;
    left: 5.5rem;
  }
  div.lines {
    margin: 0 auto;
    flex-direction: column;
  }
  div.line-sub {
    display: flex;
    width: calc(100vw - 70%) !important;
    flex-direction: row-reverse;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
  }
}
@media screen and (max-width: 1024px) {
  section#s2 {
    padding-top: 5vw;
    padding-left: 3rem;
  }
  div.title {
    font-size: 6vw;
  }
  div.title > p {
    letter-spacing: -0.75vw;
  }
  .s2__button {
    align-self: unset;
    margin: 1.6vw 0 0 70%;
  }
  .s2__button button {
    height: 6vw;
    width: 6vw;
  }
  .s2__button button::before {
    top: 32%;
    left: 45%;
  }
  .s2__button button::after {
    font-size: 1.6vw;
    top: 32%;
    left: 7.75rem;
  }
  div.line-sub {
    display: flex;
    width: calc(100vw - 60%) !important;
    flex-direction: row-reverse;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
  }
  div.line-sub > * + * {
    margin-right: 2.5rem;
  }
}
</style>
