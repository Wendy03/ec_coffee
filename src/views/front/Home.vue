<template>
  <div class="container-fluid"
       style="min-height:100vh; padding-top: 50px;">
    <Banner />
    <hr>
    <HomeCategory />
  </div>
</template>

<script>
import Banner from '../../components/front/Banner.vue';
import HomeCategory from '../../components/front/HomeCategory.vue';

export default {
  components: {
    Banner,
    HomeCategory,
  },
};
</script>
