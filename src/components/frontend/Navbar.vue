<template>
  <div class="bg-tan sticky-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark px-0">
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
              <router-link to="/products"
                           class="nav-link text-white">
                商品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/class"
                           class="nav-link text-white">
                咖啡專欄
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item mr-3">
              <router-link to="/track"
                           class="nav-link text-light">
                <i class="fas fa-heart text-white"
                   style="font-size: 1.3rem"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart"
                           class="nav-link text-light">
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
