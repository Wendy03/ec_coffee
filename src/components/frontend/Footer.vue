<template>
  <div class="bg-tan">
    <div class="container">
      <div class="text-white py-3">
        <div class="d-flex justify-content-center">
          <ul class="d-flex list-unstyled mb-0">
            <li class="nav-item">
              <router-link to="/products"
                           class="nav-link text-white">
                商品列表
              </router-link>
            </li>
            <li>
              <router-link to="/about"
                           class="nav-link text-white">
                關於我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/information"
                           class="nav-link text-white">
                常見問題
              </router-link>
            </li>
          </ul>
        </div>
        <p class="mb-0 text-center">
          <small>無商業用途，僅供學習使用</small>
        </p>
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
