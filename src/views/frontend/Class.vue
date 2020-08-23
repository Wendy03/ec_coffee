<template>
  <div class="container ec-container">
    <div class="row justify-content-center">
      <div class="my-5 col-lg-8">
        <h3 class="mb-5 text-brown font-weight-bold">專欄</h3>
        <div class="border border-secondary">
          <div class="row my-3 px-3">
            <div class="col-lg-4">
              <img src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1062&q=80"
                   alt=""
                   class="img-fluid">
            </div>
            <div class="col-lg-6 mt-3">
              <h4>健康知識</h4>
              <p>喝咖啡好處：</p>
              <ol>
                <li>提神醒腦強化記憶 咖啡因可刺激大腦中樞神經，使頭腦清醒、提高注意力，進而提升工作及學習效率</li>
                <li>強化筋骨提升運動效能</li>
                <li>預防心血管疾病 </li>
                <li>緩解血管擴張性頭痛</li>
                <li>放鬆情緒紓解壓力</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="border border-secondary mt-4">
          <div class="row my-3 px-3">
            <div class="col-lg-4">
              <img src="https://images.unsplash.com/photo-1518831449057-63cc79a76488?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                   alt=""
                   class="img-fluid">
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
        <div class="border border-secondary mt-4">
          <div class="row my-3 px-3">
            <div class="col-lg-4">
              <img src="https://images.unsplash.com/photo-1500557515707-69f05f65df7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                   alt=""
                   class="img-fluid">
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
        <div class="border border-secondary mt-4">
          <div class="row my-3 px-3">
            <div class="col-lg-4">
              <img src="https://images.unsplash.com/photo-1516510516159-156347b3cf2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                   alt=""
                   class="img-fluid">
            </div>
            <div class="col-lg-6 mt-3">
              <h4>濾紙挑選</h4>
              <p>漂白 V.S 無漂白濾紙</p>
              <ol>
                <li>漂白濾紙: 挑選使用氧氣做為漂白劑的，儘管對健康無害，
                  然而濾紙漂白的過程其實對環境不這麼友善
                </li>
                <li>無漂白濾紙: 無漂白的濾紙沒有亮白的外觀，但是更自然且環保，
                  但價位略高，事前先以少許的水沖過濾紙，再倒掉這些潤濕的水就可
                  以消除紙張的味道。
                </li>
              </ol>
              <p>形狀</p>
              <ol>
                <li>錐形：主要用在手沖工具上</li>
                <li>蛋糕杯濾紙：頂部的開口大於底部的表面積，底部平坦</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="mt-7">
          <h3 class="text-center">今天喝咖啡了嗎？</h3>
          <p class="text-center">看看有什麼新鮮咖啡豆</p>
          <div class="text-center">
            <router-link to="/products"
                         class="btn btn-brown mt-5 rounded-0">
              查看商品
            </router-link>
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
};
</script>

<style scoped>
  .ec-container {
    min-height: calc(100vh - 56px - 76px);
  }
</style>
