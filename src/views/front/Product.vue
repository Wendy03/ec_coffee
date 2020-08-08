<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container-fluid m-5"
         style="min-height:100vh; padding-top: 50px;"
         v-if="product.imageUrl[0]">
      <nav aria-label="breadcrumb"
           class="mb-3">
        <ol class="breadcrumb bg-white px-0 mb-0">
          <li class="breadcrumb-item">
            <router-link class="text-muted"
                         to="/">
              Home
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link class="text-muted"
                         to="/products">
              全部商品
            </router-link>
          </li>
          <li class="breadcrumb-item active"
              aria-current="page">{{product.title}}</li>
        </ol>
      </nav>
      <div class="row align-items-center">
        <div class="col-md-6">
          <img :src="product.imageUrl[0]"
               alt=""
               class="rounded"
               style="width: 450px; height: 300px; object-fit: cover;">
        </div>
        <div class="col-md-5">
          <h2 class="font-weight-bold mb-5">{{product.title}}</h2>
          <p>【商品介紹】</p>
          <p class="pl-4">{{product.content}}</p>
          <h5 class="font-weight-bold text-center my-4">
            NT ${{product.price}} / {{product.unit}}
          </h5>
          <div class="row">
            <div class="col-md-4 col-sm-2">
              <select name="unit"
                      class="form-control mr-3"
                      v-model="product.num">
                <option :value="num"
                        v-for="num in 5"
                        :key="num">
                  {{ num }} {{ product.unit }}
                </option>
              </select>
            </div>
            <div class="col-md-6 col-sm-5">
              <button type="button"
                      class="btn btn-danger"
                      @click.prevent="addToCart(product, product.num)">
                <i class="fas fa-spinner fa-spin"
                   v-if="product.id === status.loadingItem"></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5 ml-4">
          <h5 class="font-weight-bold">商品說明</h5>
          <p v-html="product.description"></p>
        </div>
      </div>
      <hr>
      <div class="col-md-12 col-sm-12 mt-5 ml-3">
        <h5 class="font-weight-bold">相關商品</h5>
        <RelatePorducts :product="product"
                        @update="getProduct" />
      </div>
    </div>
    <hr>
    <div class="m-5">
      <Information />
    </div>
    <ToTop />
  </div>
</template>

<script>
import Toast from '../../utils/Toast';
import Information from '../../components/front/Information.vue';
import RelatePorducts from '../../components/front/RelatedProducts.vue';
import ToTop from '../../components/ToTop.vue';

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
    ToTop,
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
          this.isLoading = false;
          this.status.loadingItem = '';
          this.product = {
            ...res.data.data,
            num: 1,
          };
        })
        .catch(() => {
          this.isLoading = false;
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
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
          this.status.loadingItem = '';
          this.$bus.$emit('update-total');
          Toast.fire({
            title: '已加入購物車',
            icon: 'success',
          });
        })
        .catch((err) => {
          this.status.loadingItem = '';
          const errorData = err.response.data.errors;
          if (errorData) {
            Toast.fire({
              title: `${errorData}`,
              icon: 'warning',
            });
          }
        });
    },
  },
};
</script>
