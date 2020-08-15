<template>
  <footer class="container-fluid bg-tan">
    <div class="d-flex align-items-center justify-content-around text-white py-2">
      <p>無商業用途，僅供學習使用</p>
      <router-link to="/admin/products"
                   class="nav-link text-light">
        <i class="fas fa-user-cog"></i>
        商品管理
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
