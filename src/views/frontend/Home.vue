<template>
  <div class="container-fluid"
       style="min-height:100vh; padding-top: 50px;">
    <Banner />
    <hr>
    <HomeCategory />
    <hr>
    <div class="my-5">
      <AboutCard />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/frontend/Banner.vue';
import HomeCategory from '@/components/frontend/HomeCategory.vue';
import AboutCard from '@/components/frontend/AboutCard.vue';

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    HomeCategory,
    AboutCard,
  },
};
</script>
