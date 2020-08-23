<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container ec-container my-5">
      <div class="row"
           v-if="products.length > 0">
        <div class="col-lg-2 col-md-3 mb-2">
          <ul class="list-group rounded-0">
            <a href="#"
               class="list-group-item list-group-item-action"
               @click.prevent="filterCategory = ''"
               :class="{ active: filterCategory === '' }">
              全部商品
            </a>
            <a class="list-group-item list-group-item-action"
               href="#"
               @click.prevent="filterCategory = item"
               :class="{ active: item === filterCategory }"
               v-for="item in categories"
               :key="item">
              {{ item }}
            </a>
          </ul>
        </div>
        <div class="col-lg-10 col-md-9">
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-3 mb-4"
                 v-for="item in filterCategories"
                 :key="item.id">
              <div class="card h-100 rounded-0">
                <router-link :to="`/product/${ item.id }`">
                  <div style="
                    height: 180px;
                    background-size: cover;
                    background-position: center;
                  "
                       class="rounded-0"
                       :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }">
                  </div>
                </router-link>
                <div class="position-absolute p-2 heart-icon"
                     @click.prevent="editfollow(item.id)">
                  <i class="fas fa-heart text-white"
                     v-if="followed.indexOf(item.id) === -1"></i>
                  <i class="fas fa-heart text-heart"
                     v-else></i>
                </div>
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2">
                    {{ item.category }}
                  </span>
                  <router-link :to="`/product/${ item.id }`">
                    <h5 class="card-title font-weight-bold text-brown">
                      {{ item.title }}
                    </h5>
                  </router-link>
                  <p class="card-text">{{ item.content }}</p>
                  <div class="text-right pr-2 h6">
                    {{ item.price | money }} 元
                  </div>
                </div>
                <div class="card-footer d-flex border-top-0 bg-white">
                  <button type="button"
                          class="btn btn-outline-brown btn-block rounded-0"
                          @click.prevent="addToCart(item.id)"
                          :disabled="isProcessing">
                    <i class="fas fa-spinner fa-spin"
                       v-if="status.loadingItem === item.id">
                    </i>
                    <i v-else
                       class="fa fa-cart-plus"
                       aria-hidden="true"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/utils/Toast';

export default {
  data() {
    return {
      status: {
        loadingItem: '',
      },
      products: [],
      carts: [],
      categories: ['中焙咖啡豆', '淺焙咖啡豆', '周邊商品'],
      filterCategory: '',
      followed: JSON.parse(localStorage.getItem('followList')) || [],
      isLoading: false,
      isProcessing: false,
    };
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
          const { categoryName } = this.$route.params;
          if (categoryName) {
            this.filterCategory = categoryName;
          }
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
  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase());
          return data;
        });
      }
      return this.products;
    },
  },
};
</script>

<style scoped>
  .ec-container {
    min-height: calc(100vh - 56px - 76px);
  }

  .list-group-item.active {
    background-color: #6b5139;
  }

  .card {
    box-shadow: 2px 2px 5px rgba(100, 100, 100, 0.16);
  }

  .heart-icon {
    background-color: #977a5e;
    font-size: 1.3rem;
    right: 0;
  }

  @media screen and (min-width: 769px) {
    .list-group {
      position: sticky;
      top: 85px;
    }
  }
</style>
