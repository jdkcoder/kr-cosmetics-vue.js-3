<template>
  <section id="footer" class="footer">
    <div class="top">
      <img
        src="https://i.imgur.com/BYyTg0N.png"
        class="logo-footer"
        data-aos="fade-right"
        data-aos-duration="800"
      />
      <span class="hera" data-aos="fade-up" data-aos-duration="1200">HERA</span>
      <div class="sn" data-aos="fade-left" data-aos-duration="800">
        <svg
          width="256px"
          height="256px"
          viewBox="0 0 256 256"
          id="instagram"
          xmlns="http://www.w3.org/2000/svg"
          fill="#deb3af"
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
          fill="#deb3af"
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
          fill="none"
          stroke="#deb3af"
        >
          <defs></defs>
          <g id="ic-social-media-twitter">
            <path
              d="M29.24,7.92a11.24,11.24,0,0,1-3.17.8A5.79,5.79,0,0,0,28.45,5.8,11.12,11.12,0,0,1,25,7.13,5,5,0,0,0,21.17,5.4a5.34,5.34,0,0,0-5.43,5.3,3.69,3.69,0,0,0,.13,1.19A14.47,14.47,0,0,1,5,6.46a4.22,4.22,0,0,0-.8,2.65A5.53,5.53,0,0,0,6.6,13.62a7.33,7.33,0,0,1-2.39-.8V13a4.94,4.94,0,0,0,4.11,5.17,5.09,5.09,0,0,1-1.46.13,3,3,0,0,1-1.06-.13,5.29,5.29,0,0,0,5,3.71,10.92,10.92,0,0,1-6.75,2.25A4.52,4.52,0,0,1,2.76,24a15.81,15.81,0,0,0,9.4,2.65c9.93,0,14.44-8.22,14.44-15.24V10.7A10.38,10.38,0,0,0,29.24,7.92Z"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="under-top">
      <div class="links">
        <div v-for="(link, index) in links" :key="index">
          <h3 data-aos="zoom-in" data-aos-duration="800">{{ link.big }}</h3>
          <div class="link-item">
            <p data-aos="fade-down" data-aos-duration="1000">{{ link.s1 }}</p>
            <p data-aos="fade-down" data-aos-duration="1200">{{ link.s2 }}</p>
            <p data-aos="fade-down" data-aos-duration="1400">{{ link.s3 }}</p>
          </div>
        </div>
      </div>
       <div v-for="(contactInfo, index) in contact" :key="index" class="contact">
        <h3 data-aos="zoom-in" data-aos-duration="800">
          {{ contactInfo.title }}
        </h3>
        <p class="address" data-aos="zoom-in" data-aos-duration="800">
          {{ contactInfo.address }}
        </p>
        <p class="phone" data-aos="zoom-out" data-aos-duration="1200">
          {{ contactInfo.phone }}
        </p>
      </div>
    </div>
    <div class="bottom-right">
      <form data-aos="fade-right" data-aos-duration="1800">
        <input type="email" placeholder="Enter your email" />
        <button type="submit" data-aos="fade" data-aos-duration="2000"></button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "section.footer",
  data() {
    return {
      links: [
        {
          big: "hera story",
          s1: "Brande story",
          s2: "Hera story",
          s3: "Library",
        },
        {
          big: "makeup",
          s1: "Face",
          s2: "Lips",
          s3: "Eyes",
        },
        {
          big: "skincare",
          s1: "Product line",
          s2: "Skin concept",
          s3: "Product tupe",
        },
        {
          big: "fragrance",
          s1: "Product line",
          s2: "Product tupe",
          s3: "",
        },
      ],
      contact: [
        {
          title: "contact",
          address: "7 lewis circle ste 814482 willmington, 19804-1618 usa.",
          phone: "(484) 5400190",
        },
      ],
    };
  },
};
</script>
<style scoped>
section.footer {
  font-family: "Leto Sans";
  height: 500px;
  background: #950000;
  padding-top: 2.5rem;
  color: #deb3af;
}
div.links {
  display: flex;
  margin:0 2.5rem 0 9rem;
}
img.logo-footer {
  height: 60px;
  align-self: center;
  margin-left: 9rem;
}
section.footer svg {
  height: 2rem;
  width: 2rem;
}
div.sn {
  align-self: center;
  text-align:center;
}
div.sn > * + * {
  margin-left: 1.5rem;
}
span.hera {
    text-align: center;
  font-weight: 400;
  font-size: 8rem;
  background: #870505;
  background: -webkit-linear-gradient(
    to bottom,
    #870505 0%,
    #7a0c0c 25%,
    #7e0909 50%,
    #810707 100%
  );
  background: -moz-linear-gradient(
    to bottom,
    #870505 0%,
    #7a0c0c 25%,
    #7e0909 50%,
    #810707 100%
  );
  background: linear-gradient(
    to bottom,
    #870505 0%,
    #7a0c0c 25%,
    #7e0909 50%,
    #810707 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
 div.top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
div.under-top {
  display: flex;
}
div.links  > * + * {
  margin-left: 2.5rem;
}
div.under-top h3 {
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #f2bab7;
}
div.under-top p {
  font-weight: 100;
  margin: 0.5rem 0;
  color: #c79997;
}
div.under-top p.address {
  width: 8em;
}
div.bottom-right {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem!important;
}
div.bottom-right > * {
  margin-right: 2rem;
}
div.bottom-right input {
  font-family: "Leto Sans";
  background: transparent;
  color: #deb3af !important;
  border: none;
  outline: none;
  border-bottom: 1px #c79997 solid;
  font-weight: 100;
  width: 300px;
  padding-bottom: 0.25rem;
}
::placeholder {
  color: #deb3af !important;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #deb3af !important;
}

::-ms-input-placeholder {
  color: #deb3af !important;
}

div.bottom-right button {
  bottom: 3.5em;
  right: 12em;
  background: transparent;
  outline: none;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #deb3af;
  white-space: nowrap;
  position: relative;
}
div.bottom-right button::before {
  content: url("https://i.imgur.com/noQEjsN.png");
  position: absolute;
  top: 30%;
  left: 50%;
}
div.bottom-right button::after {
  content: "Send";
  position: absolute;
  top: 33%;
  right: -125%;
  transform: translateX(20%);
  color: #deb3af;
  font-size: 1rem;
  font-family: "Leto Sans", sans-serif;
  font-weight: 100;
  letter-spacing: 0.5px;
}

@media screen and (max-width: 768px) and (orientation: portrait) {
  section.footer {
    height:500px!important;
  }
  img.logo-footer,
  div.links {
    margin: 0 0 0 4rem;
  }
  img.logo-footer {
    height: 46px;
  }
  span.hera {
    font-size: 5rem;
  }
  section.footer svg {
    height: 1.75rem;
    width: 1.75rem;
  }
  div.sn {
    text-align: center;
    margin: 0;
  }
 
  div.under-top {
    display:grid;
  }
  div.contact h3 {
    display:none;
  }
  div.contact {
    display:flex;
    font-style: italic!important;
    flex-direction: column;
  }
  div.under-top p.address {
    width:100%;
    margin-left:4rem;
    margin-top:2rem;
  }
  div.under-top p.phone {
    margin-left:4rem!important
  }
}
@media screen and (max-width: 1024px)and (orientation: portrait)  {
div.bottom-right {
    margin-top: 5.5rem;
  }
}
</style>
