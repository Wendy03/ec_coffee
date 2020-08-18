<template>
  <div>
    <i class="fa fa-shopping-cart text-light fa-1x"
       style="font-size: 1.3rem"
       aria-hidden="true"></i>
    <span class="badge badge-pill badge-danger"
          style="transform: translateX(-7px) translateY(-2px)">
      {{ cartTotal }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartTotal: 0,
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('update-total', () => {
      this.getCart();
    });
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((res) => {
        this.cartTotal = res.data.data.length;
      });
    },
  },
};
</script>
