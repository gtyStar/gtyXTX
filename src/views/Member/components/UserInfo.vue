<script setup>
import { ref, onMounted, watch } from 'vue'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
import { getLikeListAPI } from '@/apis/user'
import { ElMessage, ElMessageBox, ElLoading} from 'element-plus'
import { delAddressAPI, addAddressAPI, editAddressAPI } from '@/apis/checkout'

// 猜你喜欢----------------------------------------------------------------------------------------------
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const likeList = ref([])
const loading = ref(true)
const getLikeList = async () => {
  const res = await getLikeListAPI({ limit: 4 })
  likeList.value = res.result
  loading.value = false
}
onMounted(() => {
  getLikeList()
})
// 地址管理--------------------------------------------------------------------------------------------------------------------------------------------------------------
// 地址管理弹窗显示----------------------------------------------------------------------
const showDialog = ref(false)
// 添加/修改地址抽屉显示------------------------------------------------------------------
const drawer = ref(false)
// 渲染地址管理弹窗----------------------------------------------------------------------
import { useCheckoutStore } from '@/store/order'
const checkoutStore = useCheckoutStore()
const isUserAddresses = ref(true)
onMounted(async () => {
  await checkoutStore.getAddress()
  // 判断是否有地址
  if (checkoutStore.userAddresses.length === 0) {
    isUserAddresses.value = false
  } else {
    isUserAddresses.value = true
  }
})
// 监听地址列表的变化--------------------------------------------------------------------
watch(() => checkoutStore.userAddresses, (newVal) => {
  // 判断是否有地址
  if (newVal.length === 0) {
    isUserAddresses.value = false
  } else {
    isUserAddresses.value = true
  }
})
// 点解删除按钮--------------------------------------------------------------------------
const delAddress = async (id) => {
  ElMessageBox.confirm('确定要删除该地址吗？', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const loading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    await delAddressAPI(id)
    await checkoutStore.getAddress()
    loading.close()
    console.log(regionData);

  })
}
// 点击地址列表默认按钮------------------------------------------------------------------
const setDefault = async (item) => {
  console.log(item);
  const submitData = {
    receiver: item.receiver, // 收货人姓名
    contact: item.contact, // 联系方式
    provinceCode: item.provinceCode, // 省编码
    cityCode: item.cityCode, // 市编码
    countyCode: item.countyCode, // 区编码 // 省市区/县
    address: item.address, // 详细地址
    postalCode: item.postalCode, // 邮编
    addressTags: item.addressTags, // 地址标签
    isDefault: item.isShow ? 0 : 1 // 是否设为默认地址, // 是否设为默认地址
  }
  const res = await editAddressAPI(item.id, submitData)
  checkoutStore.getAddress()
  console.log(res);
}
// 定义一个参数变量与表单绑定------------------------------------------------------------
const formModel = ref({
  receiver: '',  // 收货人
  contact: '',   // 联系方式
  area: [],      // 省市区
  address: '',   // 详细地址
  postalCode: '',   // 邮编
  addressTags: '',   // 标签
  isShow: false // 是否默认地址
})
// 获取表单实例，切记一定要写在最外层，否则会报错------------------------------------------
const addressFormRef = ref(null);
// 封装一个重置表单的方法
const resetForm = () => {
  formModel.value = {
    receiver: '',  // 收货人
    contact: '',   // 联系方式
    area: [],      // 省市区
    address: '',   // 详细地址
    postalCode: '',   // 邮编
    addressTags: '',   // 标签
    isShow: false // 是否默认地址
  }
}
// 表单验证规则-------------------------------------------------------------------------
const addressrules = ref({
  receiver: [{ required: true, message: "请填写收货人姓名", trigger: "blur" }],
  contact: [
    { required: true, message: "请填写收货人联系方式", trigger: "blur" },
    { pattern: /^1[3-9]\d{9}$/, message: "请输入正确的手机号", trigger: "blur" },
  ],
  area: [{ required: true, message: "请选择省市区/县", trigger: "blur" }],
  address: [{ required: true, message: "请填写详细地址", trigger: "blur" }],
  postalCode: [
    { required: true, message: "请填写邮编", trigger: "blur" },
    { pattern: /^[1-9]\d{5}$/, message: "请输入正确的邮编", trigger: "blur" },
  ],
  addressTags: [{ required: true, message: "请填写地址标签", trigger: "blur" }],
  const: [{ required: false, message: "请选择是否设为默认地址", trigger: "blur" }],
});
// 获取省市区地址，与级联选择器绑定-------------------------------------------------------
// 获得省市区数据
import { useCodeStore } from '@/store/code'
const { regionData } = useCodeStore()
// 地址管理弹窗标题----------------------------------------------------------------------
const title = ref('')
// 点击添加地址按钮----------------------------------------------------------------------
const addAddress = () => {
  drawer.value = true
  title.value = '添加地址'
}
// 点击添加地址按钮----------------------------------------------------------------------
const submitAdd = async () => {
  console.log(formModel.value);
  // 遍历 regionData，把 formModel.area 转换成编码，存到 code 中
  const code = ref([])
  regionData.map(item0 => {
    if (item0.label === formModel.value.area[0]) {
      code.value.push(item0.value)
      item0.children.map(item1 => {
        if (item1.label === formModel.value.area[1]) {
          code.value.push(item1.value)
          item1.children.map(item2 => {
            if (item2.label === formModel.value.area[2]) {
              code.value.push(item2.value)
            }
          })
        }
      })
    }
  })
  // 定义一个提交数据变量
  const submitData = {
    receiver: formModel.value.receiver, // 收货人姓名
    contact: formModel.value.contact, // 联系方式
    provinceCode: code.value[0], // 省编码
    cityCode: code.value[1], // 市编码
    countyCode: code.value[2], // 区编码
    address: formModel.value.address, // 详细地址
    postalCode: formModel.value.postalCode, // 邮编
    addressTags: formModel.value.addressTags, // 地址标签
    isDefault: formModel.value.isShow ? 0 : 1, // 是否设为默认地址
    fullLocation: formModel.value.area.join(' ') + formModel.value.address // 完整地址,
  }
  // 调用表单验证
  console.log(submitData);
  addressFormRef.value.validate(async (valid) => {
    if (valid) {
      const loading = ElLoading.service({
        lock: true,
        text: '正在加载中😍😍😍',
        background: 'rgba(0, 0, 0, 0.1)',
      })
      await addAddressAPI(submitData)
      await checkoutStore.getAddress()
      // 关闭弹窗
      drawer.value = false;
      loading.close()
      ElMessage.success('添加成功')
    } else {
      ElMessage.error('请填写完整信息')
    }
  })
}
// 点击地址列表的修改按钮-----------------------------------------------------------------
const judgeItem = ref({}) // 最初的数据，用作判断用户是否修改了表单
const onEdit = async (item) => {
  drawer.value = true
  title.value = '修改地址'
  judgeItem.value = {...item}
  formModel.value.receiver = item.receiver  // 收货人
  formModel.value.contact = item.contact   // 联系方式
  formModel.value.provinceCode = item.provinceCode // 省编码
  formModel.value.cityCode = item.cityCode // 市编码
  formModel.value.countyCode = item.countyCode // 区编码
  formModel.value.address = item.address   // 详细地址
  formModel.value.postalCode = item.postalCode   // 邮编
  formModel.value.addressTags = item.addressTags   // 标签
  formModel.value.isDefault = item.isDefault // 是否默认地址
  formModel.value.isShow = item.isDefault ? false : true // 是否默认地址
  formModel.value.fullLocation = item.fullLocation // 完整地址
  formModel.value.id = item.id // 完整地址
  console.log(item);
  // 遍历 regionData，把 formModel.value 的省市区编码 转换成 名字，存到 formModel.value.area 中
  regionData.map(item0 => {
    if (item0.value === formModel.value.provinceCode) {
      formModel.value.area.push(item0.label)
      item0.children.map(item1 => {
        if (item1.value === formModel.value.cityCode) {
          formModel.value.area.push(item1.label)
          item1.children.map(item2 => {
            if (item2.value === formModel.value.countyCode) {
              formModel.value.area.push(item2.label)
            }
          })
        }
      })
    }
    judgeItem.value.area = formModel.value.area
  })
  console.log(formModel.value);
}
// 提交修改地址按钮
const submitEdit = async () => {
  // 遍历 regionData，把 formModel.area 转换成编码，存到 code 中
  const code = ref([])
  regionData.map(item0 => {
    if (item0.label === formModel.value.area[0]) {
      code.value.push(item0.value)
      item0.children.map(item1 => {
        if (item1.label === formModel.value.area[1]) {
          code.value.push(item1.value)
          item1.children.map(item2 => {
            if (item2.label === formModel.value.area[2]) {
              code.value.push(item2.value)
            }
          })
        }
      })
    }
  })
  // 定义一个提交数据变量
  const submitData = {
    receiver: formModel.value.receiver, // 收货人姓名
    contact: formModel.value.contact, // 联系方式
    provinceCode: code.value[0], // 省编码
    cityCode: code.value[1], // 市编码
    countyCode: code.value[2], // 区编码
    address: formModel.value.address, // 详细地址
    postalCode: formModel.value.postalCode, // 邮编
    addressTags: formModel.value.addressTags, // 地址标签
    isDefault: formModel.value.isShow ? 0 : 1, // 是否设为默认地址
    fullLocation: formModel.value.area.join(' ') // 完整地址,
  }
  console.log(formModel.value.id,submitData);
  console.log(submitData);
  console.log(judgeItem.value);
  console.log(formModel.value.area);
  // 判断用户有没有修改表单内容
  if(
    submitData.receiver === judgeItem.value.receiver && // 收货人
    submitData.contact === judgeItem.value.contact &&  // 联系方式
    formModel.value.area === judgeItem.value.area &&  // 省市区
    submitData.address === judgeItem.value.address &&  // 详细地址
    submitData.postalCode === judgeItem.value.postalCode &&  // 邮编
    submitData.addressTags === judgeItem.value.addressTags &&  // 标签
    submitData.isDefault === judgeItem.value.isDefault  // 是否默认地址
  ) {
    ElMessage.warning('请修改表单内容')
    return
  } else {
    // 表单校验
    addressFormRef.value.validate(async (valid) => {
      if (valid) {
        const loading = ElLoading.service({
          lock: true,
          text: '正在加载中😍😍😍',
          background: 'rgba(0, 0, 0, 0.1)',
        })
        await editAddressAPI(formModel.value.id, submitData)
        await checkoutStore.getAddress()
        // 关闭弹窗
        drawer.value = false;
        loading.close()
        ElMessage.success('修改成功')
      } else {
        ElMessage.error('请填写正确信息')
      }
    })
  }
}
// 监听 drawer 的值，当 drawer 的值为 false 时，重置表单
watch(() => drawer.value, (newVal) => {
  if (!newVal) {
    resetForm()
  }
})
</script>

<template>
  <div v-loading="loading">
    <div class="home-overview">
      <!-- 用户信息 -->
      <div class="user-meta">
        <div class="avatar">
          <img :src="userStore.userInfo?.avatar" />
        </div>
        <h4>Gty</h4>
      </div>
      <div class="item">
        <a href="javascript:;">
          <span class="iconfont icon-hy"></span>
          <p>会员中心</p>
        </a>
        <a href="javascript:;" @click="$router.push('/cartlist')">
          <span class="iconfont icon-cart"></span>
          <p>购物车</p>
        </a>
        <a href="javascript:;" @click="showDialog = true">
          <span class="iconfont icon-dw"></span>
          <p>地址管理</p>
        </a>
      </div>
    </div>
    <div class="like-container">
      <div class="home-panel">
        <div class="header">
          <h4 data-v-bcb266e0="">猜你喜欢</h4>
        </div>
        <div class="goods-list">
          <GoodsItem v-for="good in likeList" :key="good.id" :goods="good" />
        </div>
      </div>
    </div>
  </div>
  <!-- 地址管理弹窗 -->
  <el-dialog v-model="showDialog" title="地址管理" width="30%" center>
    <div class="addressWrapper" v-if="isUserAddresses">
      <div class="text item" v-for="item in checkoutStore.userAddresses" :key="item.id">
        <ul>
          <li><span>收<i />货<i />人：</span>{{ item.receiver }} </li>
          <li><span>联系方式：</span>{{ item.contact }}</li>
          <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
        </ul>
        <div class="edit">
          <el-checkbox v-model="item.isShow" @change="setDefault(item)"> 默认 </el-checkbox>
          <i class="iconfont icon-close-new del" @click="delAddress(item.id)"><span
              style="font-size: 14px; margin-left: 5px;">删除</span></i>
          <el-button @click="onEdit(item)" style="margin-top: 6px;">修改</el-button>
        </div>
      </div>
    </div>
    <div v-else style="height: 150px; line-height: 150px; text-align: center">
      <p>您还没有收货地址，去添加吧💖💖💖</p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addAddress" type="primary">添加地址</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 添加地址抽屉 -->
  <el-drawer v-model="drawer" :title="title">
    <div class="demo-drawer__content">
      <el-form ref="addressFormRef" style="max-width: 600px" :model="formModel" :rules="addressrules" label-width="auto"
        label-position="left">
        <el-form-item label="收货人昵称" prop="receiver">
          <el-input v-model="formModel.receiver" placeholder="昵称" />
        </el-form-item>
        <el-form-item label="收货人手机号" prop="contact">
          <el-input v-model="formModel.contact" placeholder="手机号" />
        </el-form-item>
        <el-form-item label="请选择地址" prop="area">
          <el-cascader style="width: 100%;" v-model="formModel.area" :options="regionData" :props="{
            value: 'label',
            label: 'label',
            expandTrigger: 'click',
          }" placeholder="请选择" />
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="formModel.address" placeholder="区以下的详细地址" />
        </el-form-item>
        <el-form-item label="所在地邮政编码" prop="postalCode">
          <el-input v-model="formModel.postalCode" placeholder="邮政编码" />
        </el-form-item>
        <el-form-item label="地址标签" prop="addressTags">
          <el-input v-model="formModel.addressTags" placeholder="地址标签" />
        </el-form-item>
        <el-form-item label="设为默认地址">
          <el-checkbox v-model="formModel.isShow" />
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer" v-if="title === '添加地址'" style="display: flex; justify-content: flex-end">
        <el-button @click="drawer = false">取消</el-button>
        <el-button @click="resetForm">清空</el-button>
        <el-button type="primary" @click="submitAdd">添加</el-button>
      </div>
      <div class="demo-drawer__footer" v-else style="display: flex; justify-content: flex-end">
        <el-button @click="drawer = false">取消</el-button>
        <el-button type="primary" @click="submitEdit">提交</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<style scoped lang="scss">
.home-overview {
  height: 132px;
  background: url(@/assets/images/center-bg.png) no-repeat center / cover;
  display: flex;

  .user-meta {
    flex: 1;
    display: flex;
    align-items: center;

    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    h4 {
      padding-left: 26px;
      font-size: 18px;
      font-weight: normal;
      color: white;
    }
  }

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:first-child {
      border-right: 1px solid #f4f4f4;
    }

    a {
      color: white;
      font-size: 16px;
      text-align: center;

      .iconfont {
        font-size: 32px;
      }

      p {
        line-height: 32px;
      }
    }
  }
}

.like-container {
  margin-top: 20px;
  border-radius: 4px;
  background-color: #fff;
}

.home-panel {
  background-color: #fff;
  padding: 0 20px;
  margin-top: 20px;
  height: 400px;

  .header {
    height: 66px;
    border-bottom: 1px solid #f5f5f5;
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h4 {
      font-size: 22px;
      font-weight: 400;
    }

  }

  .goods-list {
    display: flex;
    justify-content: space-around;
  }
}
.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  .edit {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .del {
    cursor: pointer;
  }

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
</style>
