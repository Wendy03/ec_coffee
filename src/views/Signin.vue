<template>
  <div>
    <div class="container mt-5">
      <div class="card col-md-12 mt-5 a">
        <div class="row">
          <div class="col-md-6 float-left mt-2">
            <div style="position: relative;">
              <img class="img-fluid rounded"
                   src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1062&q=80"
                   alt=""
                   width="100%"
                   height="500px" />
              <div style="
                    position: absolute;
                    left: 250px;
                    top: 200px;
                    width: 200px;
                    height: 100px;
                    background-color: #fff;
                    opacity: 0.7;
                  ">
                <h2 class="pl-2">Coffee</h2>
                <h4 class="pl-4">管理者登入</h4>
              </div>
            </div>
          </div>
          <div class="col-md-6 float-right mt-2">
            <form class="form-signin"
                  @submit.prevent="signin">
              <div class="text-center mb-4">
                <h1 class="h3 my-3 font-weight-normal">Sign In</h1>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input id="email"
                       type="text"
                       name="email"
                       class="form-control"
                       placeholder="Email"
                       v-model="user.email"
                       required
                       autofocus />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input id="password"
                       type="password"
                       name="password"
                       class="form-control"
                       placeholder="Password"
                       v-model="user.password"
                       required />
              </div>
              <br />
              <button class="btn btn-lg btn-primary btn-block mb-4"
                      type="submit"
                      :disabled="isProcessing">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
      <router-link to="/products"
                   class="btn btn-outline-secondary float-right mt-5">
        回到商城
      </router-link>
    </div>
  </div>
</template>

<script>
import Toast from '../utils/Toast';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
      isProcessing: false,
    };
  },
  methods: {
    signin() {
      const url = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.isProcessing = true;
      this.$http.post(url, this.user)
        .then((res) => {
          this.isProcessing = false;
          const { token } = res.data;
          const { expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(
            expired * 1000,
          )}; path=/`;
          this.$router.push('/admin/products');
          Toast.fire({
            title: '登入成功',
            icon: 'success',
          });
        })
        .catch(() => {
          this.isProcessing = false;
          Toast.fire({
            title: '帳號或密碼錯誤',
            icon: 'error',
          });
        });
    },
  },
};
</script>
