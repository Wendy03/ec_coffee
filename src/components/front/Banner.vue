<template>
  <div style="opacity:0.8;
                height: 450px;
                background-size: cover;
                background-position: center;
                background-image: url('https://images.unsplash.com/photo-1504888527749-e68244b4d3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')">
    <div class="col-md-6 row mt-5 ml-3"
         style="opacity:0.8;">
      <div class="card card-body mt-5">
        <h2 class="font-weight-bold">Coffee</h2>
        <h5 class="font-weight-bold text-dark mt-2">
          訂閱獲取優惠卷 & 最新商品
        </h5>
        <validation-provider class="input-group mb-0 mt-4"
                             rules="email"
                             v-slot="{ errors, classes }">
          <!-- 輸入框 -->
          <label for="email"
                 class="sr-only">Email</label>
          <input id="email"
                 type="email"
                 name="email"
                 v-model.trim="email"
                 placeholder="請輸入E-mail"
                 class="form-control rounded-0"
                 :class="classes">
          <!-- 錯誤訊息 -->
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0"
                    type="button"
                    @click.prevent="subscription">
              訂閱
            </button>
          </div>
          <span class="invalid-feedback">{{ errors[0] }}</span>
        </validation-provider>
      </div>
    </div>
    <div class="mt-7 mb-0">
      <router-link to="/products"
                   class="float-right btn btn-light mr-1">
        <strong>查看商品</strong>
      </router-link>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import Toast from '../../utils/Toast';

export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    subscription() {
      if (this.email) {
        Swal.fire({
          icon: 'success',
          title: '感謝訂閱',
          text: '優惠碼: follow08',
        });
      } else {
        Toast.fire({
          title: 'E-mail未填寫或格式錯誤',
          icon: 'error',
        });
      }
      this.email = '';
    },
  },
};
</script>
