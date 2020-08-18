<template>
  <div class="bg-tan sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="navbar-brand mr-5"
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
              <router-link to="/products"
                           class="nav-link text-white mr-3">
                商品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/class"
                           class="nav-link text-white">
                咖啡小教室
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
    </div>
  </div>
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

<style>
  @media (max-width: 768px) {
    .nav-link.active {
      background-color: rgb(189, 156, 114);
    }
  }
  @media screen and (min-width: 769px) {
    .nav-link.active {
      border-bottom: solid#FFFFFF 3px;
    }
  }
</style>
