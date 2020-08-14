<template>
  <div class="layout">
    <Navbar />
    <router-view></router-view>
    <router-link to="/cart" class="cart px-2 py-3">
      <CartIcon />
    </router-link>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/frontend/Navbar.vue';
import Footer from '@/components/frontend/Footer.vue';
import CartIcon from '@/components/frontend/CartIcon.vue';

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
    CartIcon,
  },
};
</script>

<style>
  .cart {
    position: fixed;
    right: 1%;
    bottom: 10%;
    border-radius: 50%;
    background-color: #6b5139af;
    cursor: pointer;
    -webkit-transition: 0.4s linear;
    -moz-transition: 0.4s linear;
    -ms-transition: 0.4s linear;
    -o-transition: 0.4s linear;
    transition: 0.4s linear;
  }
</style>
