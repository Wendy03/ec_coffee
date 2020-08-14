<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container my-5 col-10"
         style="min-height:100vh; padding-top: 50px;"
         v-if="product.imageUrl[0]">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products">全部商品</router-link>
          </li>
          <li class="breadcrumb-item active text-brown"
              aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row mb-5">
        <div class="col-lg-6">
          <img :src="product.imageUrl[0]"
               alt=""
               class="rounded w-100"
               style="height: 350px; object-fit: cover;">
        </div>
        <div class="col-lg-6">
          <div class="card border-0">
            <div class="card-body">
              <h2 class="card-title font-weight-bold text-brown">
                {{ product.title }}
              </h2>
              <p class="ml-4">{{ product.content }}</p>
              <p class="card-text mt-5">
                【 商品說明 】<br />
              </p>
              <p v-html="product.description"></p>
              <div class="d-flex flex-column align-items-end mb-3">
                <p class="mb-0 h4 font-weight-bold">
                  {{ product.price | money }} / {{ product.unit }}
                </p>
              </div>
              <div class="d-flex">
                <div class="w-50 mr-3">
                  <select name="unit"
                          class="form-control mr-3 rounded-0"
                          v-model="product.num">
                    <option :value="num"
                            v-for="num in 5"
                            :key="num">
                      {{ num }} {{ product.unit }}
                    </option>
                  </select>
                </div>
                <button type="button"
                        class="btn btn-brown w-50 rounded-0"
                        @click.prevent="addToCart(product, product.num)">
                  <i class="fas fa-spinner fa-spin"
                     v-if="product.id === status.loadingItem"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <h5 class="font-weight-bold mt-4">相關商品</h5>
      <RelatePorducts :product="product"
                      @update="getProduct" />
      <hr>
      <Information />
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';
import Information from '@/components/frontend/Information.vue';
import RelatePorducts from '@/components/frontend/RelatedProducts.vue';

export default {
  data() {
    return {
      isLoading: false,
      status: {
        loadingItem: '',
      },
      product: {
        num: 1,
        imageUrl: [],
      },
    };
  },
  components: {
    Information,
    RelatePorducts,
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;

      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.status.loadingItem = '';
          this.product = {
            ...res.data.data,
            num: 1,
          };
          this.isLoading = false;
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
          this.isLoading = false;
        });
    },
    addToCart(item, quantity = 1) {
      this.status.loadingItem = item.id;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: item.id,
        quantity,
      };
      this.$http
        .post(url, cart)
        .then(() => {
          this.$bus.$emit('update-total');
          Toast.fire({
            title: '已加入購物車',
            icon: 'success',
          });
          this.status.loadingItem = '';
        })
        .catch((err) => {
          const errorData = err.response.data.errors;
          if (errorData) {
            Toast.fire({
              title: `${errorData}`,
              icon: 'warning',
            });
          }
          this.status.loadingItem = '';
        });
    },
  },
};
</script>
