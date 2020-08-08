<template>
  <div class="col-md-12 mt-5 ml-2">
    <h5 class="font-weight-bold mb-2">常見問題</h5>
    <div class="accordion"
         id="accordionExample">
      <div class="card">
        <div class="card-header"
             id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link text-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
              運送及其他說明
            </button>
          </h2>
        </div>

        <div id="collapseOne"
             class="collapse show"
             aria-labelledby="headingOne"
             data-parent="#accordionExample">
          <div class="card-body">
            <ul>
              <li>
                <strong>出貨時間： </strong>
                訂單付款完成後 1 ~ 2天
              </li>
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
      <div class="card">
        <div class="card-header"
             id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed text-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
              商品退貨需知
            </button>
          </h2>
        </div>
        <div id="collapseTwo"
             class="collapse"
             aria-labelledby="headingTwo"
             data-parent="#accordionExample">
          <div class="card-body">
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
