<template>
  <section  id="header" class="header" data-aos="fade" data-aos-duration="1000">
    <img src="https://i.imgur.com/xAPntcZ.png" class="jennie" />
    <Nav />
    <div class="bg-1__text">
      <p
        class="hero-text"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        korean cosmetics of the premium segment
      </p>
      <p
        class="normal-text"
        data-aos="fade-right"
        data-aos-duration="1250"
        data-aos-easing="linear"
      >
        Contemporary, luxury-based beauty brand that defines and creates the
        trends in beauty standards
      </p>
    </div>
    <div class="bg-1__button">
      <button
        type="button"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-easing="linear"
      ></button>
    </div>
    <div class="bg-1__sn">
      <svg
        width="256px"
        height="256px"
        viewBox="0 0 256 256"
        id="instagram"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"
        />
      </svg>

      <svg
        width="256px"
        height="256px"
        viewBox="0 0 256 256"
        id="Telegram"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M228.646,34.7676a11.96514,11.96514,0,0,0-12.21778-2.0752L31.87109,105.19729a11.99915,11.99915,0,0,0,2.03467,22.93457L84,138.15139v61.833a11.8137,11.8137,0,0,0,7.40771,11.08593,12.17148,12.17148,0,0,0,4.66846.94434,11.83219,11.83219,0,0,0,8.40918-3.5459l28.59619-28.59619L175.2749,217.003a11.89844,11.89844,0,0,0,7.88819,3.00195,12.112,12.112,0,0,0,3.72265-.59082,11.89762,11.89762,0,0,0,8.01319-8.73925L232.5127,46.542A11.97177,11.97177,0,0,0,228.646,34.7676ZM32.2749,116.71877a3.86572,3.86572,0,0,1,2.522-4.07617L203.97217,46.18044,87.07227,130.60769,35.47461,120.28811A3.86618,3.86618,0,0,1,32.2749,116.71877Zm66.55322,86.09375A3.99976,3.99976,0,0,1,92,199.9844V143.72048l35.064,30.85669ZM224.71484,44.7549,187.10107,208.88772a4.0003,4.0003,0,0,1-6.5415,2.10937l-86.1543-75.8164,129.66309-93.645A3.80732,3.80732,0,0,1,224.71484,44.7549Z"
        />
      </svg>

      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        id="Twitter"
      >
        <defs></defs>
        <g id="ic-social-media-twitter">
          <path
            d="M29.24,7.92a11.24,11.24,0,0,1-3.17.8A5.79,5.79,0,0,0,28.45,5.8,11.12,11.12,0,0,1,25,7.13,5,5,0,0,0,21.17,5.4a5.34,5.34,0,0,0-5.43,5.3,3.69,3.69,0,0,0,.13,1.19A14.47,14.47,0,0,1,5,6.46a4.22,4.22,0,0,0-.8,2.65A5.53,5.53,0,0,0,6.6,13.62a7.33,7.33,0,0,1-2.39-.8V13a4.94,4.94,0,0,0,4.11,5.17,5.09,5.09,0,0,1-1.46.13,3,3,0,0,1-1.06-.13,5.29,5.29,0,0,0,5,3.71,10.92,10.92,0,0,1-6.75,2.25A4.52,4.52,0,0,1,2.76,24a15.81,15.81,0,0,0,9.4,2.65c9.93,0,14.44-8.22,14.44-15.24V10.7A10.38,10.38,0,0,0,29.24,7.92Z"
          />
        </g>
      </svg>
    </div>
  </section>
</template>
<script>
import Nav from "./Nav.vue";
export default {
  name: "Header",
  components: {
    Nav,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.jennie {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: auto;
}
section.header {
  background: #242a2a;
  width: 100%;
  height: 810px;
  user-select: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
section.header::after {
  font-family: "Modern H Bold", sans-serif;
  content: "W";
  position: absolute;
  bottom: 4rem;
  left: 10rem;
  text-transform: bold;
  font-size: 1.25rem;
  background: #b39872;
  background: -webkit-linear-gradient(to bottom, #b39872 0%, #dabb87 69%);
  background: -moz-linear-gradient(to bottom, #b39872 0%, #dabb87 69%);
  background: linear-gradient(to bottom, #b39872 0%, #dabb87 69%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-1__text,
.bg-1__sn,
.bg-1__button {
  position: absolute;
}
.bg-1__text {
  top: 26%;
  left: 10rem;
  width: 55em;
}
.bg-1__text p.hero-text {
  font-family: "Modern H", sans-serif;
  font-size: 5.5rem;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 0.9;
  background: #c9a15e;
  background: -webkit-radial-gradient(
    circle farthest-corner at bottom center,
    #c9a15e 0%,
    #f6d49b 100%
  );
  background: -moz-radial-gradient(
    circle farthest-corner at bottom center,
    #c9a15e 0%,
    #f6d49b 100%
  );
  background: radial-gradient(
    circle farthest-corner at bottom center,
    #c9a15e 0%,
    #f6d49b 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-1__text p.normal-text {
  margin-top: 1.75rem;
  font-size: 1rem;
  width: 19em;
  font-family: "Leto Sans", sans-serif;
  font-weight: 100;
}
.bg-1__button {
  left: 9.5rem;
  top: 75%;
}

.bg-1__button button {
  background: transparent;
  outline: none;
  border: none;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #f0f0f0;
  white-space: nowrap;
}
.bg-1__button button::before {
  content: url("https://i.imgur.com/OsT4QCf.png");
  position: absolute;
  top: 27%;
  left: 50%;
}
.bg-1__button button::after {
  content: "Go to catalog";
  position: absolute;
  top: 30%;
  left: 100%;
  transform: translateX(55%);
  color: #f0f0f0;
  font-size: 1rem;
  font-family: "Leto Sans", sans-serif;
  font-weight: 100;
}
.bg-1__sn {
  bottom: 4rem;
  right: 4.75rem;
  display: flex;
  flex-direction: row;
}
.bg-1__sn > * + * {
  margin-left: 1rem;
}
section.header svg {
  height: 2rem;
  width: 2rem;
  fill: #f0f0f0;
}
section.header svg#Twitter {
  fill: none;
  stroke: #f0f0f0;
  stroke-linecap: round;
  stroke-linejoin: round;
}
@media screen and (max-width: 768px) and (orientation: portrait) {
  section.header {
    height: 40vh;
  }
  section.header::after {
    font-size: 2vw;
    left: 3rem !important;
    bottom: 1.5rem;
  }
  .bg-1__sn > * + * {
    margin-left: 1.5vw;
  }
  section.header svg {
    height: 2.4vw;
    width: 2.4vw;
  }
  section.header::after,
  .bg-1__text {
    left: 3em;
  }
  .bg-1__text {
    width: 50%;
  }
  .bg-1__text p.hero-text {
    font-size: 5vw;
  }
  .bg-1__text p.normal-text {
    margin-top: 1rem;
    font-size: 1.6vw;
  }
  .bg-1__button {
    left: 3em;
    top: 75%;
  }
  .bg-1__button button {
    width: 1.75rem;
    height: 1.75rem;
  }
  .bg-1__button button::after {
    top: 20%;
    font-size: 0.75rem;
    transform: translateX(45%);
  }
  .bg-1__button button::before {
    content: url("https://i.imgur.com/JrcAvGH.png");
    top: 7%;
    left: 35%;
  }
  .bg-1__sn {
    bottom:1rem;
    right: 2rem!important;
  }
}
@media screen and (max-width: 1024px) and (orientation: portrait) {
  section.header {
    height: 40vh;
  }
  section.header::after {
    font-size: 2vw;
    left: 3rem !important;
    bottom: 1.5rem;
  }
  .bg-1__sn > * + * {
    margin-left: 1.5vw;
  }
  section.header svg {
    height: 2.4vw;
    width: 2.4vw;
  }
  section.header::after,
  .bg-1__text {
    left: 3em;
  }
  .bg-1__text {
    width: 50%;
  }
  .bg-1__text p.hero-text {
    font-size: 5vw;
  }
  .bg-1__text p.normal-text {
    margin-top: 1rem;
    font-size: 1.6vw;
  }
  .bg-1__button {
    left: 3em;
    top: 75%;
  }
  .bg-1__button button {
    width: 1.75rem;
    height: 1.75rem;
  }
  .bg-1__button button::after {
    top: 20%;
    font-size: 0.75rem;
    transform: translateX(45%);
  }
  .bg-1__button button::before {
    content: url("https://i.imgur.com/JrcAvGH.png");
    top: 7%;
    left: 35%;
  }
  .bg-1__sn {
    bottom:1.5rem;
    right:3rem!important;
  }
}
</style>
