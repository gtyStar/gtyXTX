<script setup>
defineOptions({
  name: 'CheckoutPage'
})
import { ref, onMounted, watch } from 'vue'
import { getCheckoutAPI, creatOrderAPI, delAddressAPI, addAddressAPI, editAddressAPI } from '@/apis/checkout'
import { useRouter } from 'vue-router'
import { ElLoading, ElMessageBox } from 'element-plus'
const router = useRouter()

// 获取生成-订单(结算页)-------------------------------------------------------------------------------
// 定义一个有无地址的变量来决定是否显示地址列表
const isUserAddresses = ref(true)
const checkInfo = ref({})  // 订单对象
const curAddress = ref({})  // 默认地址对象
const getCheckout = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在加载中😍😍😍',
    background: 'rgba(0, 0, 0, 0.1)',
  })
  const res = await getCheckoutAPI()
  console.log(res.result);

  // 给 res.ressult.userAddresses倒过来
  const reverseUserAddresses = []
  for(let i = res.result.userAddresses.length - 1; i >= 0; i--) {
    reverseUserAddresses.push(res.result.userAddresses[i])
  }
  checkInfo.value = res.result
  checkInfo.value.userAddresses = reverseUserAddresses
  // 遍历地址列表，给默认的地址添加 isShow: true 属性
  checkInfo.value.userAddresses.forEach(item => {
    if(item.isDefault === 0) {
      item.isShow = true
    } else {
      item.isShow = false
    }
  })
  // 判断是否有地址
  if( checkInfo.value.userAddresses.length === 0 ) {
    isUserAddresses.value = false
  } else {
    isUserAddresses.value = true
  }
  curAddress.value = res.result.userAddresses.find(item => item.isDefault === 0)
  loading.close()
}
onMounted(() => {
    getCheckout()
})
// 切换地址---------------------------------------------------------------------------------------------
// 控制弹窗打开
const showDialog = ref(false)
const activeAddress = ref({})
const switchAddress = (item) => {
  activeAddress.value = item
}
const confirm = () => {
  curAddress.value = activeAddress.value
  showDialog.value = false
}

// 提交订单------------------------------------------------------------------------------------------------
import { useCartStore } from '@/store/cartStore'
const cartStore = useCartStore()
const creatOrder = async () => {
  const res = await creatOrderAPI({
    deliveryTimeType: 1,
    payType: 1,
    payChannel: 1,
    buyerMessage: '',
    goods: checkInfo.value.goods.map(item => {
      return {
        skuId: item.skuId,
        count: item.count
      }
    }),
    addressId: curAddress.value.id,
  })
  router.push({
    path: '/pay',
    query: {
      id: res.result.id
    }
  })
  // 更新购物车
  cartStore.getCartList()
}
// 切换高亮-----------------------------------------------------------------------------------------------------------------------
const switchDActive = (e) => {
  if(e.target.tagName === 'A') {
    // 清除原有的高亮
    document.querySelector('.dTime .active').classList.remove('active')
    // 给当前点击的元素添加高亮
    e.target.classList.add('active')
  }
}
const switchPActive = (e) => {
  if(e.target.tagName === 'A') {
    // 清除原有的高亮
    document.querySelector('.pType .active').classList.remove('active')
    // 给当前点击的元素添加高亮
    e.target.classList.add('active')
  }
}
// 删除地址-----------------------------------------------------------------------------------------------------------------------
const delAddress = async (id) => {
  ElMessageBox.confirm('确定要删除该地址吗？', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
  .then(async () => {
    await delAddressAPI(id)
    getCheckout()
  })
}
// 添加地址-----------------------------------------------------------------------------------------------------------------------
// 控制弹窗打开
const Visible = ref(false);
//编辑
import { regionData } from "element-china-area-data";
// 省市区数据绑定到select表单
console.log(regionData);
// 绑定表单数据
const addressForm = ref({
  receiver: '', // 收货人姓名
  contact: '', // 联系方式
  address1: [], // 省市区/县
  address2: '', // 详细地址
  postalCode: '', // 邮编
  addressTags: '', // 地址标签
  isDefault: false, // 是否设为默认地址
});
// 表单验证规则
const addressrules = ref({
  receiver: [{ required: true, message: "请填写收货人姓名", trigger: "blur" }],
  contact: [
    { required: true, message: "请填写收货人联系方式", trigger: "blur" },
    { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号", trigger: "blur" },
  ],
  address1: [{ required: true, message: "请选择省市区/县", trigger: "blur" }],
  address2: [{ required: true, message: "请填写详细地址", trigger: "blur" }],
  postalCode: [
    { required: true, message: "请填写邮编", trigger: "blur" },
    { pattern: /^[1-9]\d{5}$/, message: "请输入正确的邮编", trigger: "blur" },
  ],
  addressTags: [{ required: true, message: "请填写地址标签", trigger: "blur" }],
  const : [{ required: false, message: "请选择是否设为默认地址", trigger: "blur" }],
});

//获取省市区的编码列表
// code=['省'，市，'区']
const code = ref([]);
// 监听 addressForm的address1的变化
watch(() => addressForm.value.address1, (newVal) => {
  regionData.map(item => {
    if(item.label === newVal[0]){
      code.value.push(item.value)
      item.children.map(item1 => {
        if(item1.label === newVal[1]){
          code.value.push(item1.value)
          item1.children.map(item2 => {
            if(item2.label === newVal[2]){
              code.value.push(item2.value)
            }
          })
        }
      })
    }
  })
})
// 遍历表单数据重新生成API接口需要的参数
import { computed } from 'vue'

const addressParams = computed(() => {
  return {
    receiver: addressForm.value.receiver, // 收货人姓名
    contact: addressForm.value.contact, // 联系方式
    provinceCode: code.value[0], // 省编码
    cityCode: code.value[1], // 市编码
    countyCode: code.value[2], // 区编码
    address: addressForm.value.address2, // 详细地址
    postalCode: addressForm.value.postalCode, // 邮编
    addressTags: addressForm.value.addressTags, // 地址标签
    isDefault: addressForm.value.isDefault ? 0 : 1, // 是否设为默认地址
    fullLocation: addressForm.value.address1.join(' ') + addressForm.value.address2,
  }
});
console.log(addressParams.value);


// 封装一个重置表单的方法
const resetForm = () => {
  addressForm.value = {
    receiver: '', // 收货人姓名
    contact: '', // 联系方式
    address1: [], // 省市区/县
    address2: '', // 详细地址
    postalCode: '', // 邮编
    addressTags: '', // 地址标签
    isDefault: false, // 是否设为默认地址
  };
}
//确定添加地址
import { ElMessage } from 'element-plus'
const addressFormRef = ref(null);
const addAddress = async () => {
  addressFormRef.value.validate(async (valid) => {
    if(valid) {
      console.log(addressParams.value);

      const res = await addAddressAPI(addressParams.value)
      console.log(res);
      getCheckout()
      // 重置表单
      resetForm()
      // 关闭弹窗
      Visible.value = false;
    } else {
      ElMessage.error('请填写完整信息')
    }
  })
};

// 1. 设为默认按钮-修改地址------------------------------------------------------------------------------------------------------------
const setDefault = async (item) => {
  console.log(item);
  const putData = {
    receiver: item.receiver, // 收货人姓名
    contact: item.contact, // 联系方式
    provinceCode: item.provinceCode, // 省编码
    cityCode: item.cityCode, // 市编码
    countyCode: item.countyCode, // 区编码 // 省市区/县
    address: item.address, // 详细地址
    postalCode: item.postalCode, // 邮编
    addressTags: item.addressTags, // 地址标签
    isDefault: 0, // 是否设为默认地址
  }
  const res = await editAddressAPI(item.id, putData)
  getCheckout()
  console.log(res);
}
// 2. 修改地址按钮-修改地址-----------------------------------------------------------------------------------------------------------------------
const drawer = ref(false) // 控制抽屉的显示
const editData = ref({})    // 绑定抽屉里的数据，动态数据
const deawerArea = ref([])  // 抽屉里的省市区
const judgeItem = ref({})   // 把item赋值给他，作为判断静态数据
const onEdit = (item) => {
  drawer.value = true // 显示抽屉
  console.log(item)
  editData.value = {...item }
  judgeItem.value = {...item }
  const area = []
  regionData.map(item0 => {
    if(item0.value === editData.value.provinceCode){
      console.log(item0.label);
      area.push(item0.label)
      item0.children.map(item1 => {
        if(item1.value === editData.value.cityCode){
          console.log(item1.label);
          area.push(item1.label)
          item1.children.map(item2 => {
            if(item2.value === editData.value.countyCode){
              console.log(item2.label);
              area.push(item2.label)
            }
          })
        }
      })
    }
    deawerArea.value = area
  })
}
// 3. 监听 deawerArea.value 的变化, 动态改变 editData.value 的 省市区的编码------------------------------------------------------------------------------------
watch(() => deawerArea.value, (newVal) => {
  regionData.map(item => {
    if(item.label === newVal[0]) {
      editData.value.provinceCode = item.value
      item.children.map(item1 => {
        if(item1.label === newVal[1]) {
          editData.value.cityCode = item1.value
          item1.children.map(item2 => {
            if(item2.label === newVal[2]) {
              editData.value.countyCode = item2.value
            }
          })
        }
      })
    }
  })
})
// 3. 抽屉里的提交按钮-------------------------------------------------------------------------------------------------------------------------------------
const submitEdit = async () => {
  const submitData = {  // 提交的数据
    receiver: editData.value.receiver, // 收货人姓名
    contact: editData.value.contact, // 联系方式
    provinceCode: editData.value.provinceCode, // 省编码
    cityCode: editData.value.cityCode, // 市编码
    countyCode: editData.value.countyCode, // 区编码 // 省市区/县
    address: editData.value.address, // 详细地址
    postalCode: editData.value.postalCode, // 邮编
    addressTags: editData.value.addressTags, // 地址标签
    isDefault: editData.value.isShow ? 0 : 1, // 是否设为默认地址
  }
  // 判断是否更改了数据
  const judge = ref(true)
  if(
    editData.value.address === judgeItem.value.address &&
    editData.value.addressTags === judgeItem.value.addressTags&&
    editData.value.cityCode === judgeItem.value.cityCode &&
    editData.value.contact === judgeItem.value.contact &&
    editData.value.countyCode === judgeItem.value.countyCode &&
    editData.value.isDefault === judgeItem.value.isDefault &&
    editData.value.isShow === judgeItem.value.isShow &&
    editData.value.postalCode === judgeItem.value.postalCode &&
    editData.value.provinceCode === judgeItem.value.provinceCode &&
    editData.value.receiver === judgeItem.value.receiver
  ) {
    judge.value = false
  } else{
    judge.value = true
  }
  if(judge.value) {
    const loading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    await editAddressAPI(editData.value.id, submitData)
    await getCheckout()
    loading.close()
    drawer.value = false
    ElMessage.success('修改成功')
  } else {
    ElMessage.warning('请修改数据再提交')
    return
  }

}

</script>

<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title">收货地址</h3>
        <div class="box-body">
          <div class="address">
            <div class="text">
              <div class="none" v-if="!curAddress">您需要先选择收货地址才可提交订单。</div>
              <ul v-else>
                <li><span>收<i />货<i />人：</span>{{ curAddress.receiver }}</li>
                <li><span>联系方式：</span>{{ curAddress.contact }}</li>
                <li><span>收货地址：</span>{{ curAddress.fullLocation }} {{ curAddress.address }}</li>
              </ul>
            </div>
            <div class="action">
              <el-button size="large" @click="showDialog = true">切换地址</el-button>
              <el-button size="large" @click="Visible = true">添加地址</el-button>
            </div>
          </div>
        </div>
        <!-- 商品信息 -->
        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">小计</th>
                <th width="170">实付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in checkInfo.goods" :key="i.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="i.picture" alt="">
                    <div class="right">
                      <p>{{ i.name }}</p>
                      <p>{{ i.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ i.price }}</td>
                <td>{{ i.price }}</td>
                <td>&yen;{{ i.totalPrice }}</td>
                <td>&yen;{{ i.totalPayPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 配送时间 -->
        <h3 class="box-title">配送时间</h3>
        <div class="box-body dTime" @click="switchDActive">
          <a class="my-btn active" href="javascript:;">不限送货时间：周一至周日</a>
          <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
          <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
        </div>
        <!-- 支付方式 -->
        <h3 class="box-title">支付方式</h3>
        <div class="box-body pType" @click="switchPActive">
          <a class="my-btn active" href="javascript:;">在线支付</a>
          <a class="my-btn" href="javascript:;">货到付款</a>
          <span style="color:#999">货到付款需付5元手续费</span>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件数：</dt>
              <dd>{{ checkInfo.summary?.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品总价：</dt>
              <dd>¥{{ checkInfo.summary?.totalPrice.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>运<i></i>费：</dt>
              <dd>¥{{ checkInfo.summary?.postFee.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>应付总额：</dt>
              <dd class="price">{{ checkInfo.summary?.totalPayPrice.toFixed(2) }}</dd>
            </dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <el-button type="primary" size="large" @click="creatOrder">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
  <!-- 切换地址 -->
  <el-dialog v-model="showDialog" title="切换收货地址" width="30%" center>
    <div class="addressWrapper" v-if="isUserAddresses">
      <div class="text item" :class="activeAddress === item ? 'active' : ''" v-for="item in checkInfo.userAddresses"  :key="item.id" @click="switchAddress(item)">
        <ul>
          <li><span>收<i />货<i />人：</span>{{ item.receiver }} </li>
          <li><span>联系方式：</span>{{ item.contact }}</li>
          <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
        </ul>
        <div class="edit">
          <el-checkbox v-model="item.isShow" @change="setDefault(item)"> 默认 </el-checkbox>
          <i class="iconfont icon-close-new del" @click="delAddress(item.id)"><span style="font-size: 14px; margin-left: 5px;">删除</span></i>
          <el-button @click="onEdit(item)" style="margin-top: 6px;">修改</el-button>
        </div>

      </div>
    </div>
    <div v-else style="height: 150px; line-height: 150px; text-align: center">
      <p>您还没有收货地址，去添加吧💖💖💖</p>
    </div>
    <template #footer v-if="isUserAddresses">
      <span class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </template>
    <template #footer v-else>
      <span class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button @click="showDialog = false, Visible = true" type="primary">添加地址</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 添加地址 -->
  <el-dialog
    v-model="Visible"
    title="添加地址"
    width="500"
  >
    <el-form
      ref="addressFormRef"
      style="max-width: 600px"
      :model="addressForm"
      :rules="addressrules"
      label-width="auto"
      label-position="left"
    >
      <el-form-item label="收货人昵称" prop="receiver">
        <el-input v-model="addressForm.receiver" placeholder="昵称" />
      </el-form-item>
      <el-form-item label="收货人手机号" prop="contact">
        <el-input v-model="addressForm.contact" placeholder="手机号" />
      </el-form-item>
      <el-form-item label="请选择地址" prop="address1">
        <el-cascader
          v-model="addressForm.address1"
          :options="regionData"
          :props="{
            value: 'label',
            label: 'label',
            expandTrigger: 'hover',
          }"
          placeholder="请选择"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="详细地址" prop="address2">
        <el-input v-model="addressForm.address2" placeholder="区以下的详细地址" />
      </el-form-item>
      <el-form-item label="所在地邮政编码" prop="postalCode">
        <el-input v-model="addressForm.postalCode" placeholder="邮政编码" />
      </el-form-item>
      <el-form-item label="地址标签" prop="addressTags">
        <el-input v-model="addressForm.addressTags" placeholder="地址标签" />
      </el-form-item>
      <el-form-item label="设为默认地址">
        <el-checkbox v-model="addressForm.isDefault" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="resetForm">清空</el-button>
        <el-button @click="Visible = false">取消</el-button>
        <el-button type="primary" @click="addAddress"> 确定</el-button>
      </div>
    </template>
  </el-dialog>
  <!-- 修改地址抽屉 -->
  <el-drawer
    v-model="drawer"
    title="修改地址"
  >
    <div class="demo-drawer__content">
      <el-form
      ref="addressFormRef"
      style="max-width: 600px"
      :model="editData"
      :rules="addressrules"
      label-width="auto"
      label-position="left"
      >
        <el-form-item label="收货人昵称" prop="receiver">
          <el-input v-model="editData.receiver" placeholder="昵称" />
        </el-form-item>
        <el-form-item label="收货人手机号" prop="contact">
          <el-input v-model="editData.contact" placeholder="手机号" />
        </el-form-item>
        <el-form-item label="请选择地址" prop="address1">
          <el-cascader
            style="width: 100%;"
            v-model="deawerArea"
            :options="regionData"
            :props="{
              value: 'label',
              label: 'label',
              expandTrigger: 'hover',
            }"
            placeholder="请选择"
          />
        </el-form-item>
        <el-form-item label="详细地址" prop="address2">
          <el-input v-model="editData.address" placeholder="区以下的详细地址" />
        </el-form-item>
        <el-form-item label="所在地邮政编码" prop="postalCode">
          <el-input v-model="editData.postalCode" placeholder="邮政编码" />
        </el-form-item>
        <el-form-item label="地址标签" prop="addressTags">
          <el-input v-model="editData.addressTags" placeholder="地址标签" />
        </el-form-item>
        <el-form-item label="设为默认地址">
          <el-checkbox v-model="editData.isShow" />
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer" style="display: flex; justify-content: flex-end">
        <el-button @click="drawer = false">取消</el-button>
        <el-button type="primary" @click="submitEdit">提交</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<style scoped lang="scss">
.xtx-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }

    .box-body {
      padding: 20px 0;
    }
  }
}

.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    // align-items: center;
    justify-content: space-between;

    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }

    >ul {
      flex: 1;
      padding: 20px;

      li {
        line-height: 30px;

        span {
          color: #999;
          margin-right: 5px;

          >i {
            width: 0.5em;
            display: inline-block;
          }
        }
      }
    }

    >a {
      color: $xtxColor;
      width: 160px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }

  .action {
    width: 420px;
    text-align: center;

    .btn {
      width: 140px;
      height: 46px;
      line-height: 44px;
      font-size: 14px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}

.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  .info {
    display: flex;
    text-align: left;

    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }

    .right {
      line-height: 24px;

      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }

  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }

    td,
    th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;

      &:first-child {
        border-left: 1px solid #f5f5f5;
      }

      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}

.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;

  &.active,
  &:hover {
    border-color: $xtxColor;
  }
}

.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;

    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }

    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;

      &.price {
        font-size: 20px;
        color: $priceColor;
      }
    }
  }
}

.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}

.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      // background: lighten($xtxColor, 50%);
    }

    >ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}

.edit {
  display: flex;
  flex-direction:column;
  // vertical-align: bottom;
}
</style>
