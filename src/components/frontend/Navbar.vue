<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-brown fixed-top">
    <router-link class="navbar-brand"
                 to="/">
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
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/about"
                       class="nav-link text-light mr-2">
            關於我們
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products"
                       class="nav-link text-light">
            商品列表
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/cart"
                       class="nav-link text-light mr-3">
            <CartIcon />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import CartIcon from './CartIcon.vue';

export default {
  data() {
    return {};
  },
  components: {
    CartIcon,
  },
};
</script>
