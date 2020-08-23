<template>
  <div class="my-5">
    <carousel :margin="20"
              :nav="false"
              :autoplay="true"
              v-if="products.length > 0"
              :responsive="{ 0:{ items:1,nav:false },
                  600:{ items:3,nav:false },
                  1000:{ items:4,nav:false, } }">
      <div class="item"
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
      </div>
    </carousel>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';
import carousel from 'vue-owl-carousel';

export default {
  data() {
    return {
      products: [],
    };
  },
  props: {
    product: {
      type: Object,
    },
  },
  components: {
    carousel,
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
