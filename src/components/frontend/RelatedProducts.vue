<template>
  <div class="my-5"
       v-if="products.length > 0">
    <swiper :options="swiperOption">
      <swiper-slide class="item mb-5"
                    v-for="item in related"
                    :key="item.id">
        <div class="card h-100">
          <div style="
                    min-height: 200px;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer
                  "
               :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }"
               @click.prevent="getDetail(item.id)">
          </div>
          <div class="card-body">
            <h6 class="card-title">
              {{ item.title }}
            </h6>
            <div class="text-right pr-2">
              {{ item.price | money }} 元
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  data() {
    return {
      products: [],
      swiperOption: {
        speed: 900,
        allowTouchMove: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  props: {
    product: {
      type: Object,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data;
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
        });
    },
    getDetail(id) {
      this.$router.push(`/product/${id}`);
      this.$emit('update');
    },
  },
  computed: {
    related() {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.product.category,
      );
    },
  },
};
</script>
