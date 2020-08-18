<template>
  <div class="my-7">
    <div class="row justify-content-center">
      <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
           alt=""
           class="rounded-circle mr-5"
           style="width: 170px; height: 170px; object-fit: cover;">
      <div class="col-md-4 mt-3">
        <h3 style="font-family: 'Lemonada', cursive;">
          Coffee
        </h3>
        <p>
          從原產地的一株咖啡樹，到烘焙成一粒粒金黃咖啡豆；堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則。
        </p>
        <router-link to="/products"
                     class="btn btn-brown float-right">
          查看商品
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
