<template>
  <div class="container mt-5"
       style="min-height:100vh; padding-top: 70px;">
    <AboutCard />
    <hr>
    <div class="my-7">
      <h3 class="text-center mb-5 font-weight-bold">核心價值</h3>
      <div class="row">
        <div class="col-md-4 my-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img src="https://images.pexels.com/photos/3421647/pexels-photo-3421647.jpeg?cs=srgb&dl=pexels-gvphotodesign-3421647.jpg&fm=jpg"
                 alt=""
                 style="width: 300px; height: 200px; object-fit: cover;">
            <div class="card-body p-0">
              <h4 class="card-title font-weight-bold">品質</h4>
              <h6 class="card-subtitle mb-2 text-muted">
                手工挑豆的
              </h6>
              <div class="d-flex justify-content-between mt-3">
                <p class="card-text MT-3">
                  生豆常混入雜質及瑕疵豆，
                  烘焙之前，以人工挑除瑕疵豆，
                  將影響咖啡品質的不良豆挑除。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                 alt=""
                 style="width: 300px; height: 200px; object-fit: cover;">
            <div class="card-body p-0">
              <h4 class="card-title font-weight-bold">新鮮</h4>
              <h6 class="card-subtitle mb-2 text-muted">
                每天新鮮烘焙
              </h6>
              <div class="d-flex justify-content-between mt-3">
                <p class="card-text MT-3">
                  咖啡生豆經烘焙後 2 ~ 7 天味道和香氣會達到頂點。
                  新鮮烘焙的咖啡豆可以說是咖啡好喝的最大關鍵！
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 my-4">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img src="https://images.pexels.com/photos/92354/pexels-photo-92354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                 alt=""
                 style="width: 300px; height: 200px; object-fit: cover;">
            <div class="card-body p-0">
              <h4 class="card-title font-weight-bold">道德採購</h4>
              <h6 class="card-subtitle mb-2 text-muted">
                回饋當地
              </h6>
              <div class="d-flex justify-content-between mt-3">
                <p class="card-text MT-3">
                  與種植者合作，投資他們的社區，幫助他們過更好的生活，同時確保他們未來能源源不斷地向我們供應高品質的咖啡。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class=" my-5">
      <h3 class="text-center" >聯絡我們</h3>
      <p class="text-center mt-5">電話: 03-1234567</p>
      <p class="text-center mt-2">地址: 順著咖啡香就可以找到我們</p>
    </div>
  </div>
</template>

<script>
import AboutCard from '@/components/frontend/AboutCard.vue';

export default {
  data() {
    return {};
  },
  components: {
    AboutCard,
  },
};
</script>
