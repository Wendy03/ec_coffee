<template>
  <div class="my-7">
    <h4 class="mb-5 font-weight-bold">精選咖啡</h4>
    <div class="row">
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1525445842399-d8a6bec24be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
             alt=""
             class="img-fluid">
      </div>
      <div class="col-md-4 m-auto text-center">
        <router-link to="/product/IzRdOQ5xEsCuCa511AUCkc1MCc7081MyJqzFT3oeG1Ges87VtTYJKOPqPi7wSDx9">
          <h4 class="mt-4 text-brown font-weight-bold">耶加雪菲</h4>
        </router-link>
        <p>選自衣索比亞的耶家雪菲，孔加（Konga）的G1日曬豆，除了耶加雪菲特有的花香，尾韻帶有微醺蘭姆酒香。</p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img src="https://images.unsplash.com/photo-1560824297-d27514563906?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
             alt=""
             class="img-fluid">
      </div>
      <div class="col-md-4 m-auto text-center">
        <router-link to="product/UnmOJGVTwo9AX1UpQQWppgKngcc5nbuGeooElmRfbv7ZzEq09g44XgAxSfQaKFih">
          <h4 class="mt-4 text-brown font-weight-bold">哥倫比亞</h4>
        </router-link>
        <p>來自哥倫比亞娜玲瓏（Narino）產區，海拔2,100公尺，聞得到稀有的花香味，入口時散發出熱帶水果與可可交織的濃郁口感，還帶有一點柑橘香</p>
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
