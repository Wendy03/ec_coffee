<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary"
              @click.prevent="openModal('new')">
        建立新產品
      </button>
    </div>
    <div class="table-responsive"
         v-if="products.length > 0">
      <table class="table table-striped mt-4">
        <thead>
          <tr>
            <th width="140"
                class="text-nowrap">分類</th>
            <th>產品名稱</th>
            <th width="120"
                class="text-nowrap">原價</th>
            <th width="120"
                class="text-nowrap">售價</th>
            <th width="100"
                class="text-nowrap">是否啟用</th>
            <th width="150"
                class="text-nowrap">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products"
              :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.origin_price | money}}</td>
            <td>{{ item.price | money}}</td>
            <td>
              <span v-if="item.enabled"
                    class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm mr-1"
                      @click.prevent="openModal('edit', item)">
                <i class="fas fa-spinner fa-spin"
                   v-if="item.id === status.loadingItem"></i>
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm"
                      @click.prevent="openModal('del',item)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分頁 -->
      <Pagination :pages="pagination"
                  @changePage="getProducts"></Pagination>
      <!-- 新增/編輯 -->
      <ProductModal ref="productModal"
                    :is-new="isNew"
                    :status="status"
                    @update="getProducts" />
      <!-- 刪除 -->
      <DelModal :temp-product="tempProduct"
                @update="getProducts" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Toast from '../../utils/Toast';
import ProductModal from '../../components/dashboard/ProductModal.vue';
import DelModal from '../../components/dashboard/DelProductModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
      },
      pagination: {},
      isNew: true,
      isLoading: true,
      status: {
        loadingItem: '',
      },
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
        })
        .catch(() => {
          this.isLoading = false;
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
        });
    },
    openModal(type, item) {
      if (type === 'new') {
        this.$refs.productModal.tempProduct = {
          imageUrl: [],
        };
        $('#productModal').modal('show');
        this.isNew = true;
      } else if (type === 'edit') {
        this.$refs.productModal.getProduct(item.id);
        this.status.loadingItem = item.id;
        this.isNew = false;
      } else if (type === 'del') {
        this.tempProduct = { ...item };
        $('#delProductModal').modal('show');
      }
    },
  },
};
</script>
