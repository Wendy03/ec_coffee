<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="table-responsive">
      <table class="table table-striped mt-5"
             v-if="storages.length > 0">
        <thead>
          <tr>
            <th scope="col">圖片</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in storages"
              :key="item.id">
            <td>
              <div style="
                    height: 100px;
                    width: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                   :style="{ backgroundImage: `url(${item.path})` }">
              </div>
            </td>
            <td>
              <button class="btn btn-outline-danger"
                      @click.prevent="openModal(item)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    <!-- 分頁 -->
    <Pagination :pages="pagination"
                @changePage="getFiles"></Pagination>
    <DelFileModal :temp-storage="tempStorage"
                 @update="getFiles" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Toast from '../../utils/Toast';
import DelFileModal from '../../components/dashboard/DelFileModal.vue';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      storages: [],
      tempStorage: {},
      isLoading: true,
      pagination: {},
    };
  },
  components: {
    DelFileModal,
    Pagination,
  },
  created() {
    this.getFiles();
  },
  methods: {
    getFiles(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false;
          this.storages = res.data.data;
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
    openModal(item) {
      $('#delFileModal').modal('show');
      this.tempStorage = { ...item };
    },
  },
};
</script>
