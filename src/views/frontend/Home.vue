<template>
  <div class="container">
    <Banner />
    <hr>
    <HomeCategory />
    <hr>
    <AboutCard />
    <hr>
    <Select />
  </div>
</template>

<script>
import Banner from '@/components/frontend/Banner.vue';
import HomeCategory from '@/components/frontend/HomeCategory.vue';
import AboutCard from '@/components/frontend/AboutCard.vue';
import Select from '@/components/frontend/Select.vue';

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    HomeCategory,
    AboutCard,
    Select,
  },
};
</script>
