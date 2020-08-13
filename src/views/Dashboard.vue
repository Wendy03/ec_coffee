<template>
  <div class="dashboard">
    <Navbar />
    <div class="container-fluid mt-5">
      <div class="row">
        <Sidebar />
        <main role="main"
              class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view :token="token" v-if="isAuth"></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/backend/Navbar.vue';
import Sidebar from '@/components/backend/Sidebar.vue';

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      token: '',
      isAuth: false,
    };
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.$http.defaults.headers.Authorization = `Bearer ${this.token}`;
      const url = `${process.env.VUE_APP_APIPATH}auth/check`;
      this.$http.post(url, { api_token: this.token })
        .then((res) => {
          if (res.data.success) {
            this.isAuth = true;
          }
        })
        .catch(() => {
          this.$router.push('/signin');
        });
    },
  },
};
</script>
