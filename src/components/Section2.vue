<template>
  <section id="s2">
    <div class="header">
      <div class="title" data-aos="zoom-in-right" data-aos-duration="1500">
        <p>cosmetic</p>
        <p>lines</p>
      </div>

      <div class="s2__button" data-aos="fade" data-aos-duration="2000">
        <button type="button"></button>
      </div>
    </div>
    <div class="lines">
      <div class="line-sub">
        <div class="ls-img" data-aos="fade-up" data-aos-duration="900">
          <img src="https://i.imgur.com/vnWTU17.png" loading="lazy" />
        </div>
        <div class="line-text" data-aos="fade-up" data-aos-duration="900">
          <p class="primary">black foundation</p>
          <p class="secondary">24-hour coverage for a chic semi-matte look</p>
        </div>
      </div>

      <div class="line-sub">
        <div class="ls-img" data-aos="fade-up" data-aos-duration="1300">
          <img src="https://i.imgur.com/FLn5Zhr.png" loading="lazy" />
        </div>
        <div class="line-text" data-aos="fade-up" data-aos-duration="1300">
          <p class="primary">sensual spicy nude</p>
          <p class="secondary">24-hour coverage for a chic semi-matte look</p>
        </div>
      </div>
      
      <div class="line-sub">
        <div class="ls-img"  data-aos="fade-up" data-aos-duration="1600">
          <img src="https://i.imgur.com/kDTTArN.png" loading="lazy" />
        </div>
        <div class="line-text" data-aos="fade-up" data-aos-duration="1700">
          <p class="primary">for him</p>
          <p class="secondary">The moment your signature presence</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
section#s2 {
  background: rgb(36, 42, 42);
  background: linear-gradient(
    360deg,
    rgba(36, 42, 42, 1) 0%,
    rgba(14, 14, 17, 1) 60%
  );
  padding: 5rem 0 0 0;
  position: relative;
}
div.title {
  font-family: "Leto Sans", sans-serif;
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
  width: 100%;
  justify-content: center;
}
div.lines > * + * {
  margin-left: 3.5rem;
}
div.ls-img {
  height: 470px;
  margin-bottom: 3.5rem;
}
div.ls-img > img {
  height: 100%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: all 0.4s;
  width: 100%;
  filter: brightness(70%);
}
div.ls-img > img:hover {
  transform: scale(1.07) translateY(-1rem);
  filter: brightness(95%);
  transition: all 0.4s;
}
div.line-text > p.primary,
div.title {
  text-transform: uppercase;
  margin-left: 9.25rem;
}
div.line-text > p.primary {
  font-family: "Leto Sans", sans-serif;
  font-size: 1.575rem;
  font-weight: 400;
  margin: 2rem 0 1.25rem 0;
  color: #e8e5e7;
}
div.line-text > p.secondary {
  font-family: "Leto Sans Condensed", sans-serif;
  font-size: 1.425rem;
  width: 10em;
  color: #979798;
}
.s2__button {
  margin-top: 1vh;
  margin-right: 16%;
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
}
.s2__button button::before {
  content: url("https://i.imgur.com/OsT4QCf.png");
  position: absolute;
  top: 2rem;
  left: 2.75rem;
}
.s2__button button::after {
  content: "Go to catalog";
  position: absolute;
  top: 2.125rem;
  left: 9rem;
  color: #f0f0f0;
  font-size: 1rem;
  font-family: "Leto Sans", sans-serif;
}
div.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media screen and (max-width: 768px) and (orientation: portrait) {
  section#s2 {
    height: max-content;
  }
  div.title {
    margin-left: 4rem;
    font-size: 3rem;
  }
  .s2__button {
    margin: 1vh 30vw 0 0;
  }
  .s2__button button {
    width: 4rem;
    height: 4rem;
  }
  .s2__button button::before {
    top: 30%;
    left: 50%;
  }
  .s2__button button::after {
    top: 32%;
    left: 100%;
    transform: translateX(55%);
  }
  div.lines {
    overflow: hidden;
    height: max-content;
    display:block;
  }
  div.lines > * + *{
    margin-top:1rem!important;
  }
  div.line-sub {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    margin:0;
  }
  div.line-sub:nth-child(1) {
    flex-direction: row-reverse;
  }
  div.line-sub:nth-child(1) > * + * {
    margin-right: 2rem;
  }
  div.line-sub:nth-child(2) {
    flex-direction: row;
  } div.line-sub:nth-child(2) > * + * {
    margin-left:2rem;
  }
  div.line-sub:nth-child(3) {
    flex-direction: row-reverse;
  }
  div.line-sub:nth-child(3) > * + * {
    margin-right: 2rem;
  }
  div.ls-img {
    width:49%;
  }
  div.line-text {
    align-self: center;
    margin-bottom: 5rem;
  }
}
@media screen and (max-width: 1024px) and (orientation: portrait) {
  section#s2 {
    height: max-content;
  }
  div.title {
    margin-left: 4rem;
    font-size: 3rem;
  }
  .s2__button {
    margin: 1vh 30vw 0 0;
  }
  .s2__button button {
    width: 4rem;
    height: 4rem;
  }
  .s2__button button::before {
    top: 30%;
    left: 50%;
  }
  .s2__button button::after {
    top: 32%;
    left: 100%;
    transform: translateX(55%);
  }
  div.lines {
    overflow: hidden;
    height: max-content;
    display:block;
  }
  div.lines > * + *{
    margin-top:1rem!important;
  }
  div.line-sub {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    margin:0;
  }
  div.line-sub:nth-child(1) {
    flex-direction: row-reverse;
  }
  div.line-sub:nth-child(1) > * + * {
    margin-right: 2rem;
  }
  div.line-sub:nth-child(2) {
    flex-direction: row;
  } div.line-sub:nth-child(2) > * + * {
    margin-left:2rem;
  }
  div.line-sub:nth-child(3) {
    flex-direction: row-reverse;
  }
  div.line-sub:nth-child(3) > * + * {
    margin-right: 2rem;
  }
  div.ls-img {
    width:49%;
  }
  div.line-text {
    align-self: center;
    margin-bottom: 5rem;
  }
}
</style>
