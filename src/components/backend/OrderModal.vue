<template>
  <!-- Order Modal -->
  <div class="modal fade"
       id="orderModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog"
         role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"
              id="exampleModalLabel">顧客資料</h5>
          <button type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row"
                    class="font-weight-normal">Email</th>
                <td>
                  {{ order.user.email }}
                </td>
              </tr>
              <tr>
                <th scope="row"
                    class="font-weight-normal">收貨人姓名</th>
                <td>
                  {{ order.user.name }}
                </td>
              </tr>
              <tr>
                <th scope="row"
                    class="font-weight-normal">收貨人電話</th>
                <td>
                  {{ order.user.tel }}
                </td>
              </tr>
              <tr>
                <th scope="row"
                    class="font-weight-normal">收貨人地址</th>
                <td>
                  {{ order.user.address }}
                </td>
              </tr>
              <tr>
                <th scope="row"
                    class="font-weight-normal">留言</th>
                <td>
                  {{ order.message }}
                </td>
              </tr>
            </tbody>
          </table>
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
      order: {
        user: {},
      },

    };
  },
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getOrder(id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.data;
          $('#orderModal').modal('show');
          this.status.loadingItem = '';
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
          this.status.loadingItem = '';
        });
    },
  },
};
</script>
