<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container ec-container mt-3"
         v-if="product.imageUrl[0]">
      <div class="row justify-content-center">
        <div class="col-lg-10">
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
              <div style="
                    height: 350px;
                    background-size: cover;
                    background-position: center;
                  "
                   class="rounded-0"
                   :style="{ backgroundImage: `url(${ product.imageUrl[0] })` }">
                <div class="position-absolute p-2 m-2 heart-icon"
                     @click.prevent="editfollow(product.id)">
                  <i class="fas fa-heart text-white"
                     v-if="followed.indexOf(product.id) === -1"></i>
                  <i class="fas fa-heart text-heart"
                     v-else></i>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h2 class="font-weight-bold text-brown">
                {{ product.title }}
              </h2>
              <p>{{ product.content }}</p>
              <p class="mt-5">
                【 商品說明 】<br />
              </p>
              <p v-html="product.description"></p>
              <div class="d-flex flex-column align-items-end mb-3">
                <p class="mb-0 h5 font-weight-bold text-right">
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
                        @click.prevent="addToCart(product, product.num)"
                        :disabled="isProcessing">
                  <i class="fas fa-spinner fa-spin"
                     v-if="product.id === status.loadingItem"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
          <hr>
          <h5 class="font-weight-bold mt-4">相關商品</h5>
          <RelatePorducts :product="product"
                          @update="getProduct" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';
import RelatePorducts from '@/components/frontend/RelatedProducts.vue';

export default {
  data() {
    return {
      status: {
        loadingItem: '',
      },
      product: {
        num: 1,
        imageUrl: [],
      },
      followed: JSON.parse(localStorage.getItem('followList')) || [],
      isLoading: false,
      isProcessing: false,
    };
  },
  components: {
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
      this.isProcessing = true;
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
          this.isProcessing = false;
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
          this.isProcessing = false;
        });
    },
    editfollow(id) {
      const followId = this.followed.indexOf(id);
      if (followId === -1) {
        this.followed.push(id);
        Toast.fire({
          title: '已加入追蹤',
          icon: 'success',
        });
      } else {
        this.followed.splice(followId, 1);
        Toast.fire({
          title: '已取消追蹤',
          icon: 'success',
        });
      }
      localStorage.setItem('followList', JSON.stringify(this.followed));
    },
  },
};
</script>

<style scoped>
  .ec-container {
    min-height: calc(100vh - 56px - 76px);
  }

  .heart-icon {
    background-color: #977a5e;
    font-size: 1.3rem;
    right: 1.6%;
    top: -2%;
  }
</style>
