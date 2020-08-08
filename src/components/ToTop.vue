<template>
  <div class="text-right mb-1 mr-1"
       style="padding-bottom: 80px"
       @click.prevent="totop">
    <i class="fas fa-chevron-up border border-dark rounded-circle p-2"></i>
  </div>
</template>

<script>
export default {
  methods: {
    totop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
