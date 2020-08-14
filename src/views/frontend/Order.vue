<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="conatiner-fluid my-5"
         style="padding-top: 70px;"
         v-if="carts.length > 0">
      <div class="row justify-content-center flex-md-row flex-column-reverse">
        <div class="col-md-6">
          <div class="bg-white p-4">
            <h3 class="font-weight-bold">客戶資訊</h3>
            <validation-observer v-slot="{ invalid }"
                                 class="col-md-6">
              <form @submit.prevent="createOrder">
                <!-- email -->
                <div class="form-group">
                  <validation-provider rules="required|email"
                                       v-slot="{ errors, classes, passed }">
                    <label for="email">Email</label>
                    <input id="email"
                           type="email"
                           name="email"
                           v-model.trim="form.email"
                           class="form-control"
                           :class="classes" />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed"
                          class="valid-feedback">Email 正確</span>
                  </validation-provider>
                </div>
                <!-- 收件人-->
                <div class="form-group">
                  <validation-provider rules="required"
                                       v-slot="{ errors, classes, passed }">
                    <label for="username">收件人姓名</label>
                    <input id="username"
                           type="text"
                           class="form-control"
                           name="name"
                           v-model.trim="form.name"
                           placeholder="輸入姓名"
                           :class="classes" />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed"
                          class="valid-feedback">姓名正確</span>
                  </validation-provider>
                </div>
                <!-- 電話-->
                <div class="form-group">
                  <validation-provider rules="required|min:8"
                                       v-slot="{ errors, classes, passed }">
                    <label for="tel">收件人電話</label>
                    <input id="tel"
                           type="tel"
                           class="form-control"
                           v-model.trim="form.tel"
                           placeholder="請輸入電話"
                           :class="classes" />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed"
                          class="valid-feedback">電話號碼正確</span>
                  </validation-provider>
                </div>
                <!-- 地址-->
                <div class="form-group">
                  <validation-provider rules="required"
                                       v-slot="{ errors, classes, passed }">
                    <label for="address">收件人地址</label>
                    <input id="address"
                           type="text"
                           class="form-control"
                           name="address"
                           v-model.trim="form.address"
                           placeholder="請輸入地址"
                           :class="classes" />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                    <span v-if="passed"
                          class="valid-feedback">地址正確</span>
                  </validation-provider>
                </div>
                <!-- 付款方式-->
                <div class="form-group">
                  <label for="payment">付款方式</label>
                  <select id="payment"
                          v-model="form.payment"
                          class="form-control"
                          required>
                    <option value=""
                            disabled>
                      請選擇付款方式
                    </option>
                    <option value="WebATM">
                      WebATM
                    </option>
                    <option value="ATM">
                      ATM
                    </option>
                    <option value="CVS">
                      CVS
                    </option>
                    <option value="Barcode">
                      Barcode
                    </option>
                    <option value="Credit">
                      Credit
                    </option>
                    <option value="ApplePay">
                      ApplePay
                    </option>
                    <option value="GooglePay">
                      GooglePay
                    </option>
                  </select>
                </div>
                <!-- 留言-->
                <div class="form-group">
                  <label for="comment">留言</label>
                  <textarea name="comment"
                            id="comment"
                            class="form-control"
                            cols="10"
                            rows="7"
                            v-model.trim="form.message"></textarea>
                </div>
                <div class="d-flex flex-column-reverse
                flex-md-row mt-4 justify-content-between
                align-items-md-center align-items-end w-100">
                  <router-link to="/cart"
                               class="text-dark mt-md-0 mt-3 h5">
                    <i class="fas fa-chevron-left mr-2"></i>
                    回到購物車
                  </router-link>
                  <button class="btn btn-brown float-right rounded-0"
                          :disabled="invalid">
                    <i class="fas fa-spinner fa-spin"
                       v-if="isProcessing">
                    </i>
                    送出訂單
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>

        </div>
        <div class="col-md-4 mb-5">
          <div class="border p-5 mx-2 mb-4">
            <h4 class="mb-4">訂單明細</h4>
            <div v-for="item in carts"
                 :key="item.product.id + 1">
              <div class="d-flex mb-2">
                <img :src="item.product.imageUrl[0]"
                     alt=""
                     class="mr-2"
                     style="width: 48px; height: 48px; object-fit: cover">
                <div class="w-100">
                  <div class="d-flex justify-content-between font-weight-bold">
                    <p class="mb-0">{{ item.product.title }}</p>
                    <p class="mb-0">x{{ item.quantity }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <small class="mb-0 text-muted">
                      {{ item.product.price | money }} / {{ item.product.unit }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row"
                      class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                  <td class="text-right border-0 px-0 pt-4">
                    {{ cartTotal | money }}
                  </td>
                </tr>
                <tr>
                  <td colspan="2"
                      class="text-right border-0 px-0 pt-0 pb-4">
                    <div class="input-group mt-3 input-group-sm">
                      <input type="text"
                             class="form-control"
                             v-model="coupon_code"
                             placeholder="請輸入優惠碼" />
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary"
                                type="button"
                                @click.prevent="addCouponCode"
                                :disabled="isProcessing">
                          套用優惠碼
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 font-weight-bold">Total</p>
              <p v-if="coupon.enabled"
                 class="mb-0 h4 font-weight-bold">
                {{ cartTotal * (coupon.percent / 100)  | money }}
              </p>
              <p class="mb-0 h4 font-weight-bold"
                 v-else>
                {{ cartTotal | money }}
              </p>
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
      carts: {},
      cartTotal: 0,
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: 'WebATM',
        message: '',
      },
      coupon_code: '',
      coupon: {},
      isLoading: false,
      isProcessing: false,
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(url)
        .then((res) => {
          this.carts = res.data.data;
          this.updateTotal();
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
    updateTotal() {
      let total = 0;
      this.carts.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      this.cartTotal = total;
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.isProcessing = true;
      this.$http
        .post(url, { code: this.coupon_code })
        .then((res) => {
          this.getCart();
          this.coupon = res.data.data;
          Toast.fire({
            text: '優惠卷已加入',
            icon: 'success',
          });
          this.isProcessing = false;
        })
        .catch((err) => {
          const errorData = err.response.data.errors;
          if (errorData) {
            errorData.code.forEach((errmsg) => {
              Toast.fire({
                title: `${errmsg}`,
                icon: 'error',
              });
            });
          } else {
            const { message } = err.response.data;
            Toast.fire({
              title: `${message}`,
              icon: 'error',
            });
            this.isProcessing = false;
          }
        });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;
      this.isLoading = true;
      this.isProcessing = true;
      const order = { ...this.form };
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }
      this.$http
        .post(url, order)
        .then((res) => {
          this.$bus.$emit('update-total');
          Toast.fire({
            text: '訂單已送出',
            icon: 'success',
          });
          this.getCart();
          this.$router.push(`/checkout/${res.data.data.id}`);
          this.isLoading = false;
          this.isProcessing = false;
        })
        .catch(() => {
          Toast.fire({
            text: '訂單已送出失敗，稍後在試',
            icon: 'error',
          });
          this.isLoading = false;
          this.isProcessing = false;
        });
    },
  },
};
</script>
