<template>
  <footer class="container-fluid bg-brown">
    <div class="d-flex align-items-center justify-content-around text-white py-2">
      <ul class="d-flex list-unstyled mb-0 h4">
        <li><a href="#"
             class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
        <li><a href="#"
             class="text-white"><i class="fab fa-line"></i></a></li>
      </ul>
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
