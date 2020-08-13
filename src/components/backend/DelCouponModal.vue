<template>
  <div class="modal fade"
       id="delCouponModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog"
         role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title"
              id="exampleModalLabel">
            <span>刪除優惠卷</span>
          </h5>
          <button type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempCoupon.title }}</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button"
                  class="btn btn-outline-secondary"
                  data-dismiss="modal">
            取消
          </button>
          <button type="button"
                  class="btn btn-danger"
                  @click.prevent="delCoupon"
                  :disabled="isProcessing">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Toast from '@/utils/Toast';

export default {
  data() {
    return {
      isProcessing: false,
    };
  },
  props: {
    tempCoupon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    delCoupon() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
      this.isProcessing = true;
      this.$http
        .delete(url)
        .then(() => {
          $('#delCouponModal').modal('hide');
          this.$emit('update');
          Toast.fire({
            title: '優惠卷刪除成功',
            icon: 'success',
          });
          this.isProcessing = false;
        })
        .catch(() => {
          $('#delCouponModal').modal('hide');
          Toast.fire({
            title: '優惠卷刪除失敗，稍後在試',
            icon: 'error',
          });
          this.isProcessing = false;
        });
    },
  },
};
</script>
