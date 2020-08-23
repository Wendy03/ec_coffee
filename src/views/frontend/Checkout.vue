<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container ec-container my-5">
      <div class="row">
        <div class="col-md-6"
             v-if="order.paid">
          <h2 class="text-brown font-weight-bold">訂單完成</h2>
          <div class="mt-4">
            <h5>感謝訂購</h5>
            <p class="ml-2">訂單完成預計1~2天出貨</p>
            <div style="
                    height: 300px;
                    background-size: cover;
                    background-position: center;
                    backgroundImage: url('https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')">
            </div>
          </div>
          <router-link to="/"
                       class="btn btn-outline-dark mr-2 rounded-0 mt-4">
            回到首頁
          </router-link>
        </div>
        <div class="col-md-6"
             v-else>
          <h2 class="mb-5 text-brown font-weight-bold">付款</h2>
          <p>差一步完成訂單，點選確認付款完成訂單</p>
          <p>對於咖啡豆品質要求，收到訂單開始製作，
            大約 1 ~ 2天出貨
          </p>
        </div>
        <div class="col-md-6 mt-3">
          <div class="card rounded-0 py-4 mb-2">
            <div class="card-header border-bottom-0 bg-white px-4 py-0">
              <h2 class="text-brown font-weight-bold mb-5">
                訂單資料
              </h2>
            </div>
            <div class="card-body px-4 py-0">
              <ul class="list-group list-group-flush">
                <li v-for="( product, i ) in order.products"
                    :key="i"
                    class="list-group-item px-0">
                  <div class="d-flex mt-2">
                    <img :src="product.product.imageUrl[0]"
                         alt=""
                         class="mr-2"
                         style="width: 60px; height: 60px; object-fit: cover">
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between font-weight-bold">
                        <h5>{{ product.product.title }}</h5>
                        <p class="mb-0">x{{ product.quantity }}</p>
                      </div>
                      <div class="text-right">
                        <p class="mb-0">
                          {{ product.product.price | money }}/{{ product.product.unit }}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">Email</th>
                        <td class="text-right border-0 px-0">
                          {{ order.user.email }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人姓名</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.name }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人電話</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.tel }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人地址</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.user.address }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">
                          付款金額
                        </th>
                        <td class="text-right border-0 px-0">
                          {{ order.amount | money }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                        <td class="text-right border-0 px-0 pt-0">
                          {{ order.payment }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">付款狀態
                        </th>
                        <td class="text-right border-0 px-0 pt-0">
                          <span v-if="!order.paid">尚未付款</span>
                          <strong v-else
                                  class="text-success">付款完成</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-right"
                       v-if="order.paid === false">
                    <button class="btn btn-danger"
                            @click.prevent="payOrder"
                            :disabled="isProcessing">
                      確認付款
                      <i class="fas fa-spinner fa-spin"
                         v-if="isProcessing">
                      </i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <a href="#"
             @click.prevent="backHome"
             class="btn btn-outline-dark mr-2 rounded-0 mb-4"
             v-if="order.paid === false">
            回到首頁
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import Toast from '@/utils/Toast';

export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
      isProcessing: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.data;
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
    payOrder() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;
      this.isProcessing = true;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.data.paid) {
            this.getOrder();
            Toast.fire({
              title: '完成付款',
              icon: 'success',
            });
          }
          this.isProcessing = false;
        })
        .catch(() => {
          Toast.fire({
            title: '付款失敗，稍後再試',
            icon: 'error',
          });
          this.isProcessing = false;
        });
    },
    backHome() {
      this.$router.push('/');
      Swal.fire({
        icon: 'warning',
        title: '尚未付款',
      });
    },
  },
};
</script>

<style scoped>
  .ec-container {
    min-height: calc(100vh - 56px - 76px);
  }
</style>
