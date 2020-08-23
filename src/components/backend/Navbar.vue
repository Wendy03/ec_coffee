<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-peru fixed-top bg-dark flex-md-nowrap shadow">
      <router-link to="/admin/products"
                   class="navbar-brand text-light">
        Coffee
      </router-link>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse"
           id="navbarSupportedContent">
        <div class="ml-auto d-flex align-items-cente">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/"
                           class="nav-link text-light mr-2">
                回到前台
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#"
                 @click.prevent="signout"
                 class="nav-link btn btn-sm btn-light text-dark px-3">
                登出
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    signout() {
      document.cookie = 'hexToken=; expires=; path=/';
      this.$router.push('/');
    },
  },
};
</script>
