<template>
  <div class="col-md-12 my-5">
    <div class="row">
      <div class="col-md-2 col-sm-6 mb-3 mb-4"
           v-for="item in related"
           :key="item.id">
        <div class="card border-0 shadow-sm h-100">
          <div style="
                    height: 150px;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer
                  "
               :style="{ backgroundImage: `url(${item.imageUrl[0]})` }"
               @click.prevent="getDetail(item.id)">
          </div>
          <div class="card-body">
            <h5 class="card-title">
              {{ item.title }}
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="text-right pr-2">
              {{ item.price | money}} 元
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '../../utils/Toast';

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
