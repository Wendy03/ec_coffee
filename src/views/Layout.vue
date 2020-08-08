<template>
  <div class="layout">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/front/Navbar.vue';
import Footer from '../components/front/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
