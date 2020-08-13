<template>
  <div class="modal fade"
       id="productModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog modal-lg"
         role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title"
              id="exampleModalLabel">
            <span v-if="isNew">新增商品</span>
            <span v-else>修改商品</span>
          </h5>
          <button type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <validation-observer v-slot="{ invalid }">
          <form @submit.prevent="updateProduct">
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <validation-provider rules="required"
                                       class="form-group"
                                       tag="div"
                                       v-slot="{ errors, classes}">
                    <label for="image">輸入圖片網址</label>
                    <input type="text"
                           class="form-control"
                           id="image"
                           v-model="tempProduct.imageUrl[0]"
                           placeholder="請輸入圖片連結"
                           :class="classes"
                           required />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                  <div class="form-group">
                    <label for="customFile">或 上傳圖片
                      <i class="fas fa-spinner fa-spin"
                         v-if="fileUpLoading"></i>
                    </label>
                    <input type="file"
                           id="customFile"
                           class="form-control-file"
                           ref="files"
                           @change="uploadFile" />
                  </div>
                  <img class="img-fluid"
                       :src="tempProduct.imageUrl[0]"
                       alt="" />
                </div>
                <div class="col-sm-8">
                  <validation-provider rules="required"
                                       class="form-group"
                                       tag="div"
                                       v-slot="{ errors, classes}">
                    <label for="title">商品名稱</label>
                    <input id="title"
                           v-model="tempProduct.title"
                           type="text"
                           class="form-control"
                           placeholder="請輸入標題"
                           :class="classes"
                           required />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                  <div class="form-row">
                    <validation-provider rules="required"
                                         class="form-group col-md-6"
                                         tag="div"
                                         v-slot="{ errors, classes}">
                      <label for="category">分類</label>
                      <input type="text"
                             class="form-control"
                             id="category"
                             v-model="tempProduct.category"
                             placeholder="請輸入分類"
                             :class="classes"
                             required />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                    <validation-provider rules="required"
                                         class="form-group col-md-6"
                                         tag="div"
                                         v-slot="{ errors, classes}">
                      <label for="unit">單位</label>
                      <input id="unit"
                             v-model="tempProduct.unit"
                             type="text"
                             class="form-control"
                             placeholder="請輸入單位"
                             :class="classes" />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <div class="form-row">
                    <validation-provider rules="required"
                                         class="form-group col-md-6"
                                         tag="div"
                                         v-slot="{ errors, classes}">
                      <label for="origin_price">原價</label>
                      <input type="number"
                             class="form-control"
                             id="origin_price"
                             v-model="tempProduct.origin_price"
                             placeholder="請輸入原價"
                             :class="classes"
                             required />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                    <validation-provider rules="required"
                                         class="form-group col-md-6"
                                         tag="div"
                                         v-slot="{ errors, classes}">
                      <label for="price">售價</label>
                      <input type="number"
                             class="form-control"
                             id="price"
                             v-model="tempProduct.price"
                             placeholder="請輸入售價"
                             :class="classes"
                             required />
                      <span class="invalid-feedback">{{ errors[0] }}</span>
                    </validation-provider>
                  </div>
                  <hr />
                  <validation-provider rules="required"
                                       tag="div"
                                       v-slot="{ errors, classes}">
                    <label for="content">產品描述</label>
                    <textarea type="text"
                              class="form-control"
                              id="content"
                              v-model="tempProduct.content"
                              placeholder="請輸入產品描述請"
                              :class="classes"
                              required></textarea>
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                  <validation-provider rules="required"
                                       class="form-group"
                                       tag="div"
                                       v-slot="{ errors, classes}">
                    <label for="description">說明內容</label>
                    <vue-editor id="description"
                                v-model="tempProduct.description"
                                :class="classes" />

                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </validation-provider>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input"
                             type="checkbox"
                             v-model="tempProduct.enabled"
                             :true-value="true"
                             :false-value="false"
                             id="is_enabled" />
                      <label class="form-check-label"
                             for="is_enabled">
                        是否啟用
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button"
                      class="btn btn-outline-secondary"
                      data-dismiss="modal">
                取消
              </button>
              <button type="submit"
                      class="btn btn-primary"
                      :disabled="invalid">
                確認
              </button>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { VueEditor } from 'vue2-editor';
import Toast from '@/utils/Toast';

export default {
  data() {
    return {
      tempProduct: {
        imageUrl: [],
      },
      fileUpLoading: false,
    };
  },
  components: {
    VueEditor,
  },
  props: {
    isNew: {
      type: Boolean,
      required: true,
    },
    status: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getProduct(id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.tempProduct = res.data.data;
          $('#productModal').modal('show');
          this.status.loadingItem = '';
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
          this.status.loadingItem = '';
        });
    },
    updateProduct() {
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }

      this.$http[httpMethod](url, this.tempProduct)
        .then(() => {
          Toast.fire({
            title: '編輯成功',
            icon: 'success',
          });
          this.$emit('update');
        })
        .catch(() => {
          Toast.fire({
            title: '編輯失敗',
            icon: 'error',
          });
        });
      $('#productModal').modal('hide');
    },
    uploadFile() {
      const uploadedfile = document.querySelector('#customFile').files[0];
      const formData = new FormData();
      formData.append('file', uploadedfile);
      this.fileUpLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`;
      this.fileUpLoading = true;
      this.$http
        .post(url, formData, {
          headers: {
            'Content-type': 'multipart/form-data"',
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.fileUpLoading = false;
            this.tempProduct.imageUrl.push(res.data.data.path);
            document.querySelector('#customFile').value = '';
          }
        })
        .catch(() => {
          this.fileUpLoading = false;
          Toast.fire({
            title: '檔案格式不符',
            icon: 'error',
          });
          document.querySelector('#customFile').value = '';
        });
    },
  },
};
</script>
