<template>
  <div>
    <loading :active.sync="isLoading"> </loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary"
              @click.prevent="openModal('new')">
        建立優惠券
      </button>
    </div>
    <div class="table-responsive">
      <table class="table mt-4"
             v-if="coupons.length > 0">
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th scope="col">折扣碼</th>
            <th scope="col">折扣百分比</th>
            <th scope="col">到期日</th>
            <th scope="col">是否啟用</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons"
              :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.code }}</td>
            <td class="text-center">{{ item.percent }}%</td>
            <td>{{ item.deadline.datetime }}</td>
            <td class="text-center">
              <strong class="text-success"
                      v-if="item.enabled">啟用</strong>
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
    </div>

    <!-- 分頁 -->
    <Pagination :pages="pagination"
                @changePage="getCoupons"></Pagination>

    <!-- Coupon Modal -->
    <CouponModal ref="couponModal"
                 :is-new="isNew"
                 :status="status"
                 @update="getCoupons" />
    <!-- 刪除 -->
    <DelCouponModal :temp-coupon="tempCoupon"
                    @update="getCoupons" />
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/Pagination.vue';
import CouponModal from '../../components/dashboard/CouponModal.vue';
import DelCouponModal from '../../components/dashboard/DelCouponModal.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        code: '',
        percent: 100,
        enabled: false,
        deadline_at: '',
      },
      pagination: {},
      isNew: false,
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  created() {
    this.getCoupons();
  },
  components: {
    Pagination,
    CouponModal,
    DelCouponModal,
  },
  methods: {
    getCoupons(page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupons?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.isLoading = false;
        this.coupons = res.data.data;
        this.pagination = res.data.meta.pagination;
      });
    },
    openModal(type, item) {
      if (type === 'new') {
        $('#couponModal').modal('show');
        this.$refs.couponModal.tempCoupon = {};
        this.isNew = true;
      } else if (type === 'edit') {
        this.$refs.couponModal.getCoupon(item.id);
        this.isNew = false;
        this.status.loadingItem = item.id;
      } else if (type === 'del') {
        $('#delCouponModal').modal('show');
        this.tempCoupon = { ...item };
      }
    },
  },
};
</script>
