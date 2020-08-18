<template>
  <div class="my-5 col-lg-6">
    <div class="accordion border border-bottom-0 border-right-0 border-left-0 mb-3 rounded-0"
         id="accordionOne">
      <div class="card border-0 mb-3">
        <div class="card-header px-0 py-4
        bg-white border-0"
             id="headingOne"
             data-toggle="collapse"
             data-target="#collapseOne">
          <div class="d-flex justify-content-between align-items-center pr-1">
            <h5 class="mb-0">
              到貨
            </h5>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="collapseOne"
             class="collapse show"
             aria-labelledby="headingOne"
             data-parent="#accordionOne">
          <div class="card-body pb-5">
            <ul>
              <li>
                <strong>出貨時間： </strong>
                訂單付款完成後 1 ~ 2天
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion border border-bottom-0 border-right-0 border-left-0 mb-3 rounded-0"
         id="accordionTwo">
      <div class="card border-0">
        <div class="card-header px-0 py-4 bg-white border-0"
             id="headingTwo"
             data-toggle="collapse"
             data-target="#collapseTwo">
          <div class="d-flex justify-content-between align-items-center pr-1">
            <h5 class="mb-0">
              運送
            </h5>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="collapseTwo"
             class="collapse"
             aria-labelledby="headingTwo"
             data-parent="#accordionTwo">
          <div class="card-body pb-5">
            <ul>
              <li>
                <strong>送貨方式： </strong>
                透過宅配送達。除網頁另有特別標示外，均為常溫配送。
              </li>
              <li>
                <strong>送貨範圍： </strong>
                限台灣本島與離島地區
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion border border-bottom-0 border-right-0 border-left-0 mb-3 rounded-0"
         id="accordionThree">
      <div class="card border-0">
        <div class="card-header px-0 py-4 bg-white border-0"
             id="headingThree"
             data-toggle="collapse"
             data-target="#collapseThree">
          <div class="d-flex justify-content-between align-items-center pr-1">
            <h5 class="mb-0">
              退貨
            </h5>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div id="collapseThree"
             class="collapse"
             aria-labelledby="headingThree"
             data-parent="#accordionThree">
          <div class="card-body pb-5">
            <ul>
              <li>上購物的消費者，都可以依照消費者保護法的規定，
                享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，
                請留意，您所退回的商品必須回復原狀</li>
              <li>咖啡豆由於考量食品衛生安全，除了商品本身瑕疵、損壞、
                作業疏失或運送過程而造成的損毀，才能申請退換貨。
                一經個人拆封、食用、失溫及保存不良等情形而導致商品變質，恕無法處理您的退換貨申請。</li>
              <li>周邊商品退貨包裝完整</li>
            </ul>
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

<style>
  .fa-chevron-down:hover {
    cursor: pointer;
  }
</style>
