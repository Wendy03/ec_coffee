<template>
  <div class="conatiner m-5"
       style="min-height:100vh; padding-top: 100px;">
    <div class="py-5 mx-0"
         id="about">
      <div class="container">
        <div class="row justify-content-center">
          <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
               alt=""
               class="rounded-circle mr-5"
               style="width: 160px; height: 160px; object-fit: cover;">
          <div class="col-md-4 mt-3">
            <h3>關於
              <span style="font-family: 'Lemonada', cursive;">
                Coffee
              </span>
            </h3>
            <p>
              從原產地的一株咖啡樹，到烘焙成一粒粒金黃咖啡豆；堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則。
            </p>
          </div>
          <div class="col-md-4 text-center mt-5">
            <router-link to="/products"
                         class="btn btn-dark mt-5">
              查看商品
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
