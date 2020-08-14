<template>
  <div class="container my-7">
    <h4 class="font-weight-bold">商品介紹</h4>
    <div class="row mt-2 mb-5">
      <div class="col-md-4 my-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <a href="#"
             @click.prevent="toCategory('中焙咖啡豆')">
            <img src="https://images.unsplash.com/photo-1442550528053-c431ecb55509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                 alt=""
                 style="width: 300px; height: 200px; object-fit: cover;">
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">中焙咖啡豆</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                少許活潑香氣、沉穩的堅果、可可，平衡的酸甜比
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <a href="#"
             @click.prevent="toCategory('淺焙咖啡豆')">
            <img src="https://images.pexels.com/photos/606545/pexels-photo-606545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                 alt=""
                 style="width: 300px; height: 200px; object-fit: cover;">
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">淺焙咖啡豆</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                果酸味強烈，明亮度高，依豆子的種植地其酸味會略有不同
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <a href="#"
             @click.prevent="toCategory('周邊商品')">
            <img src="https://images.unsplash.com/photo-1523063308874-cecc260a3171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                 alt=""
                 style="width: 300px; height: 200px; object-fit: cover;">
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">周邊商品</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                好器材讓你得心應手適合的器材讓你愛不釋手
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toCategory(Name) {
      this.$router.push({
        name: 'products',
        params: { categoryName: Name },
      });
    },
  },
};
</script>
