<template>
  <section id="s3">
    <div class="header">
      <div class="title" data-aos="fade-right" data-aos-duration="1400">
        sales hits
      </div>
    </div>
    <div class="products">
      <div class="item" v-for="(product, index) in products" :key="index">
        <img
          :src="product.img"
          class="product-img"
          data-aos="zoom-in"
          data-aos-duration="1200"
        />
        <img
          :src="product.texture"
          class="product-texture"
          data-aos="zoom-in"
          data-aos-duration="1200"
        />
        <div class="heart" data-aos="fade" data-aos-duration="900">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M354.766,34.512c-36.085,0-70.798,13.133-98.766,37.18c-27.969-24.045-62.681-37.18-98.766-37.18
				C70.535,34.512,0,109.652,0,202.011c0,66.502,41.049,132.214,122.008,195.308c54.674,42.609,108.875,69.129,111.156,70.238
				l18.268,8.88c1.443,0.701,3.005,1.051,4.568,1.051c1.563,0,3.125-0.35,4.568-1.051l18.268-8.88
				c2.281-1.109,56.482-27.628,111.156-70.238C470.951,334.225,512,268.514,512,202.011C512,109.652,441.465,34.512,354.766,34.512z
				 M377.145,380.873c-52.958,41.273-105.242,66.892-107.444,67.962L256,455.694l-13.702-6.388c-0.001,0-0.001,0-0.002,0
				c-2.199-1.045-54.484-26.925-107.442-68.197C59.237,322.179,20.898,261.802,20.898,202.073
				c0-80.836,61.16-146.633,136.336-146.633c33.817,0,66.308,13.456,91.486,37.913c4.055,3.939,10.506,3.933,14.562-0.005
				c25.178-24.457,57.668-37.926,91.486-37.926c75.174,0,136.334,65.773,136.334,146.61
				C491.102,261.76,452.763,321.942,377.145,380.873z"
                  />
                  <path
                    d="M354.766,76.308c-40.807,0-78.131,23.572-98.766,60.596c-20.635-37.024-57.959-60.596-98.766-60.596
				c-63.653,0-115.438,56.39-115.438,125.703c0,29.53,11.39,60.061,33.855,90.745c17.471,23.864,41.711,47.952,72.048,71.596
				c51.218,39.915,101.613,64.583,103.733,65.613c1.442,0.7,3.004,1.051,4.567,1.051c1.563,0,3.125-0.35,4.567-1.051
				c2.12-1.03,52.517-25.698,103.733-65.613c30.336-23.643,54.577-47.732,72.048-71.596c22.464-30.685,33.855-61.215,33.855-90.745
				C470.204,132.698,418.419,76.308,354.766,76.308z M256,408.85C226.326,393.47,62.694,303.994,62.694,202.011
				c0-57.79,42.41-104.805,94.54-104.805c39.574,0,75.277,27.692,88.84,68.908c1.411,4.286,5.414,7.183,9.925,7.183
				c4.512,0,8.515-2.896,9.925-7.183c13.564-41.216,49.266-68.908,88.84-68.908c52.13,0,94.54,47.016,94.54,104.805
				C449.306,303.994,285.673,393.47,256,408.85z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <p class="name" data-aos="fade" data-aos-duration="900">
          {{ product.name }}
        </p>
        <p class="desc" data-aos="fade" data-aos-duration="1500">
          {{ product.desc }}
        </p>
        <div class="go-to">
          <a :href="product.link" data-aos="fade-right" data-aos-duration="1100"
            >Go to sell place</a
          >
          <span class="price" data-aos="fade-left" data-aos-duration="1200">{{
            product.price
          }}</span>
        </div>
      </div>
    </div>
    <div class="s3__button">
      <button
        type="button"
        class="left"
        data-aos="fade"
        data-aos-duration="1800"
      ></button>
    </div>

    <div class="s3__button--right">
      <button
        type="button"
        class="prev"
        data-aos="fade"
        data-aos-duration="1800"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z"
          />
        </svg>
      </button>
      <button
        type="button"
        class="next"
        data-aos="fade"
        data-aos-duration="1800"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
<style scoped>
section#s3 {
  background: #f0f0f0;
  padding: 3.5rem 0 4rem 10rem;
  position: relative;
}
div.title {
  text-transform: uppercase;
  color: #303030;
  font-family: 'Leto Sans', sans-serif;
  font-weight: 400;
  font-size: 5rem;
  letter-spacing: -9px;
}
div.products {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #303030;
  font-family: 'Leto Sans', sans-serif;
  width: calc(100vw - 21em);
}
div.products > * + * {
  margin-left: 9rem;
}
div.item {
  display: grid;
  position: relative;
}
img.product-img {
  height: 350px;
}
img.product-texture {
  height: 80px;
}
div.item > p.name {
  letter-spacing: -2.45px;
  font-size: 1.25rem;
  margin: 4rem 0 0.5rem 0;
}
div.item > p.desc {
  width: 18em;
  height: 64px;
  font-weight: 100;
  letter-spacing: -1.5px;
}
div.go-to {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
div.go-to a {
  color: #303030;
  border: 2px #303030 solid;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  transition: 0.4s;
}
div.go-to a:hover {
  transition: 0.4s;
  background: #303030;
  color: #f0f0f0;
  border: 2px #303030 solid;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
}
div.go-to > .price {
  align-self: center;
  font-size: 2.25rem;
}
div.item svg {
  height: 1.5rem;
  width: 1.5rem;
}
div.heart,
div.heart-liked {
  position: absolute;
  top: 2em;
  right: 0;
}
div.heart {
  fill: #303030;
  cursor: pointer;
  transition: 0.4s;
}
div.heart:hover {
  fill: #c62921;
  transition: 0.2s;
}
.s3__button {
  position: absolute;
  bottom: 5em;
}
.s3__button button.left {
  background: transparent;
  outline: none;
  border: none;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #303030;
  white-space: nowrap;
  transform: scale(0.7);
}
.s3__button button.left::before {
  content: url('https://i.imgur.com/HwHSnvS.png ');
  position: absolute;
  top: 2rem;
  left: 2.75rem;
}
.s3__button button.left::after {
  content: 'Go to catalog';
  position: absolute;
  top: 1.9rem;
  left: 9rem;
  color: #303030;
  font-size: 1.25rem;
  font-family: 'Leto Sans', sans-serif;
}
.s3__button--right {
  position: absolute;
  right: 30em;
  bottom: 7em;
}
.s3__button--right button {
  background: transparent;
  outline: none;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  white-space: nowrap;
  margin: 0 1.5rem;
  transform: scale(1.5);
}
.s3__button--right button:hover {
  box-shadow: 0 0 0 1px #303030;
}
</style>
<script>
export default {
  name: 'Section3',
  data() {
    return {
      liked: false,
      unlike: true,
      products: [
        {
          img: 'https://www.hera.com/int/en/products/__icsFiles/afieldfile/2021/02/18/20210218_final_sensual-fresh-nude-tint_pdp_thumb_233_pc_1.png',
          texture:
            'https://www.hera.com/int/en/products/__icsFiles/afieldfile/2021/02/18/20210218_final_sensual_fresh_nude-tint_pdp_texture_233_pc.png',
          name: 'SENSUAL FRESH NUDE TINT',
          desc: 'Lip tint that absorbs with a moist sensation and blossoms a fresh color on your lips',
          price: '$30',
          link: 'https://www.hera.com/int/en/products/sensual-fresh-nude-tint.html',
        },
        {
          img: 'https://www.hera.com/int/en/products/__icsFiles/afieldfile/2020/01/30/20191223_final_blackfoundation_21n1_pdp_thumb.png',
          texture:
            'https://www.hera.com/int/en/products/__icsFiles/afieldfile/2020/01/30/20191222_final_blackfoundation_21n1_pdp_texture_pc.png',
          name: 'BLACK FOUNDATION SPF 15 / PA+',
          desc: '24-hour coverage for a chic semi-matte look',
          price: '$50',
          link: 'https://www.hera.com/int/en/products/black-foundation.html',
        },
        {
          img: 'https://www.hera.com/int/en/products/__icsFiles/afieldfile/2020/01/07/20191220_final_facedesigningbronzer_pdp_thumb_1.png',
          texture:
            'https://www.hera.com/int/en/products/__icsFiles/afieldfile/2020/01/07/20191222_final_facedesigningbronzer_pdp_texture_pc.png',
          name: 'FACE DESIGNING BRONZER',
          desc: 'A shading pact to add dimension to the face with a clear, natural shading effect',
          price: '$49',
          link: 'https://www.hera.com/int/en/products/face-designing-bronzer.html',
        },
      ],
    };
  },
  methods: {},
};
</script>
