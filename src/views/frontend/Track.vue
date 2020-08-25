<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container ec-container">
      <div v-if="followProduct.length > 0">
        <h3 class="mt-5">追蹤商品</h3>
        <div class="table-responsive mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">品名</th>
                <th scope="col">分類</th>
                <th scope="col">價格</th>
                <th scope="col">購物車</th>
                <th scope="col">取消</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in followProduct"
                  :key="item.id">
                <td style=" white-space:nowrap">
                  <router-link :to="`/product/${ item.id }`">
                    <p class="text-brown">
                      <strong>{{ item.title }}</strong>
                    </p>
                  </router-link>
                </td>
                <td>{{ item.category }}</td>
                <td>{{ item.price | money }}</td>
                <td>
                  <button type="button"
                          class="btn btn-outline-brown border-0 p-0"
                          @click.prevent="addToCart(item.id)"
                          :disabled="isProcessing">
                    <i class="fas fa-spinner fa-spin"
                       v-if="status.loadingItem === item.id">
                    </i>
                    <i v-else
                       class="fa fa-cart-plus"
                       aria-hidden="true"></i>
                  </button>
                </td>
                <td>
                  <button href="#"
                          class="btn btn-outline-secondary btn-sm border-0"
                          @click.prevent="delFollowed(item.id)">
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center my-7">
          <h4 class="mb-3 warning-text">沒有追蹤商品，快去逛逛</h4>
          <router-link to="/products"
                       class="text-dark mt-5 mt-3 h5">
            <i class="fas fa-chevron-left mr-2"></i>
            查看商品
          </router-link>
        </div>

      </div>
      <div class="mt-7">
        <HomeCategory />
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';
import HomeCategory from '@/components/frontend/HomeCategory.vue';

export default {
  data() {
    return {
      products: [],
      carts: [],
      followProduct: [],
      followed: JSON.parse(localStorage.getItem('followList')) || [],
      isLoading: false,
      isProcessing: false,
      status: {
        loadingItem: '',
      },
    };
  },
  components: {
    HomeCategory,
  },
  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data;
          this.getFollow();
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
    getFollow() {
      this.followProduct = this.products.filter(
        (product) => this.followed.indexOf(product.id) > -1,
      );
    },
    addToCart(id, quantity = 1) {
      this.status.loadingItem = id;
      this.isProcessing = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
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
    delFollowed(id) {
      const followId = this.followed.indexOf(id);
      if (followId !== -1) {
        this.followed.splice(followId, 1);
        this.getFollow();
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

  @media screen and (min-width: 769px) {
    .fa-cart-plus {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 425px) {
    th,
    td {
      font-size: 0.7rem;
    }

    .warning-text {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 320px) {
    th,
    td {
      font-size: 0.6rem;
    }

    .warning-text {
      font-size: 0.95rem;
    }
  }
</style>
