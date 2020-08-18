<template>
  <div class="container col-lg-8"
       style="min-height:100vh; padding-top: 70px;">
    <div class="my-5">
      <h3 class="mb-5 text-brown font-weight-bold">咖啡小教室</h3>
      <div class="border border-secondary">
        <div class="row my-3 px-3">
          <div class="col-lg-4">
            <img src="https://images.unsplash.com/photo-1514927298007-a2b56e5270e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                 alt=""
                 class="w-100">
          </div>
          <div class="col-lg-6 mt-3">
            <h4>新鮮度判斷</h4>
            <ol>
              <li>淺至中烘焙的咖啡豆，表面會呈現霧狀，幾乎看不見油</li>
              <li>且聞起來有濃重的油耗味 ，那表示你買到不新鮮的咖啡豆</li>
              <li>熱水澆在研磨後的咖啡粉上時，表面會產生泡沫的現象</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="border border-secondary mt-3">
        <div class="row my-3 px-3">
          <div class="col-lg-4">
            <img src="https://images.unsplash.com/44/E5KMvPp9SsCnqmEGUwAS_2014-08-10%2012.56.40%201.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=959&q=80"
                 alt=""
                 class="w-100">
          </div>
          <div class="col-lg-6 mt-3">
            <h4>咖啡豆保存</h4>
            <ol>
              <li>保存於室內陰涼乾燥處</li>
              <li>使用密封、非透明容器</li>
              <li>沖泡前再磨成粉</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="border border-secondary mt-4">
        <div class="row my-3 px-3">
          <div class="col-lg-4">
            <img src="https://images.unsplash.com/photo-1514927298007-a2b56e5270e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                 alt=""
                 class="w-100">
          </div>
          <div class="col-lg-6 mt-3">
            <h4>手沖咖啡</h4>
            <ol>
              <li>粉水比：15 ~ 17克、下壺萃取200~250克</li>
              <li>磨咖啡豆： 研磨度3 ~ 4 </li>
              <li>水溫：90℃</li>
              <li>沖洗濾紙：沖洗掉濾紙的雜味與雜質</li>
              <li>倒粉： 咖啡粉表面呈平坦狀</li>
              <li>第一次注水：由濾杯中心開，約注水15 ~ 30秒</li>
              <li>悶蒸：約悶蒸20 〜 40秒，等膨脹的咖啡粉開始塌陷</li>
              <li>第二次注水：以「の」字形從中央到外層來回注水不間斷</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="my-7">
      <h3 class="text-center">選咖啡豆來練習吧！</h3>
      <div class="text-center">
        <router-link to="/products"
                   class="btn btn-brown mt-5 rounded-0">
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
