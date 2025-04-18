// 搜索仓库
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  // 商品仓库
  const searchGoods = {
    // 酒
    wine: {
      red: [
        {
          "id": "3463003",
          "name": "法国年份雅文邑700毫升",
          "desc": "经典产区限量单一老年份",
          "price": "1480.00",
          "picture": "https://yanxuan-item.nosdn.127.net/0a2fff6e0b55178fbbe99d97d94d20a8.png",
          "orderNum": 46
        },
        {
          "id": "3998106",
          "name": "德国莫泽尔传统版雷司令干白2019750ml",
          "desc": "来自摩泽尔传奇名庄",
          "price": "138.00",
          "picture": "https://yanxuan-item.nosdn.127.net/bcb8efeee3977d417b961c1eba4584a5.jpg",
          "orderNum": 58
        },
        {
          "id": "1135059",
          "name": "手工八年老陈醋500毫升",
          "desc": "地道醇香，醋酸浓郁",
          "price": "30.00",
          "picture": "https://yanxuan-item.nosdn.127.net/77da20e77b02830a26f931901ac1a9e0.png",
          "orderNum": 19
        },
        {
          "id": "3398028",
          "name": "木桐正牌干红葡萄酒750毫升2016年",
          "desc": "波尔多五大名庄木桐正牌",
          "price": "7799.00",
          "picture": "https://yanxuan-item.nosdn.127.net/05f79c7976b21c0aba772feef5701c80.png",
          "orderNum": 40
        },
        {
          "id": "1425007",
          "name": "名庄金奖加身，西班牙珍藏干红750毫升",
          "desc": "产区名庄，囊获大奖",
          "price": "168.00",
          "picture": "https://yanxuan-item.nosdn.127.net/ab17be62ad1262087b557139d5fc5b94.png",
          "orderNum": 3134
        },
        {
          "id": "3407009",
          "name": "苏格兰陈年单一麦芽威士忌700毫升",
          "desc": "蒸馏大师监制",
          "price": "318.00",
          "picture": "https://yanxuan-item.nosdn.127.net/a0a334a93e3d2bba7592ac692e045a48.png",
          "orderNum": 5942
        },
        {
          "id": "3399000",
          "name": "玛歌正牌干红750毫升2017年",
          "desc": "波尔多五大名庄玛歌正牌",
          "price": "6699.00",
          "picture": "https://yanxuan-item.nosdn.127.net/9e915c0a8839fa72b6ee1f9600289b62.png",
          "orderNum": 3765
        },
        {
          "id": "1425011",
          "name": "经典品种交响曲，智利混酿干白750毫升",
          "desc": "智利名庄，香气迷人",
          "price": "69.00",
          "picture": "https://yanxuan-item.nosdn.127.net/54008a874beec5abf5dc948799ee2e24.png",
          "orderNum": 4344
        },
        {
          "id": "1425006",
          "name": "西班牙里奥哈名庄之作，丹魄干红750毫升",
          "desc": "产区名庄，国际高分",
          "price": "98.00",
          "picture": "https://yanxuan-item.nosdn.127.net/1896e7452e0bc2a6c36175bb0c7a35c1.png",
          "orderNum": 3250
        },
        {
          "id": "1505052",
          "name": "百年名庄出品，法国南部干红750毫升",
          "desc": "法国原产，原瓶进口",
          "price": "58.00",
          "picture": "https://yanxuan-item.nosdn.127.net/d27c759b53d5aea5145c68eb96765df8.png",
          "orderNum": 5713
        }
      ],
      white: [
        {
          "id": "3995885",
          "name": "飞天53%vol500ml贵州茅台酒（带杯）",
          "desc": "茅台飘香，正品溯源",
          "price": "1499.00",
          "picture": "https://yanxuan-item.nosdn.127.net/d46e005025a5d3b73c4781d31b327558.jpg",
          "orderNum": 5640
        },
        {
          "id": "3997547",
          "name": "泸州老窖特曲浓香型白酒",
          "desc": "非遗工艺制作，历经24代传承，至今690余年",
          "price": "280.00",
          "picture": "https://yanxuan-item.nosdn.127.net/4f67876d44c4c0e318153c02cdfc701f.png",
          "orderNum": 14816
        }
      ],
      other: [
        {
          "id": "3494007",
          "name": "梅乃宿柚子酒720毫升",
          "desc": "柚香芬芳，清冽百味",
          "price": "248.00",
          "picture": "https://yanxuan-item.nosdn.127.net/be0e32bf5eac99dab10e327c1307c275.jpg",
          "orderNum": 3997
        }
      ],
    },
    // 数码
    digital: {
      line: [
        {
          "id": "3533020",
          "name": "iPhone13/12系列PD20W高速快充数据线",
          "desc": "MFI官方认证，PD闪电快充",
          "price": "59.00",
          "picture": "https://yanxuan-item.nosdn.127.net/34dc5a4e3ff49b8988c26d88724b9d6a.png",
          "orderNum": 718
        },
        {
          "id": "1480015",
          "name": "双Type-C接口手机笔记本充电线（1米/2米）",
          "desc": "2米加长，远程充电，差旅必备",
          "price": "23.90",
          "picture": "https://yanxuan-item.nosdn.127.net/6e21780fd83f5a470e345286403983a6.jpg",
          "orderNum": 9887
        },
        {
          "id": "1223002",
          "name": "MFi认证苹果快充编织数据线（1.2米）",
          "desc": "MFi认证原装芯片强韧编织",
          "price": "49.90",
          "picture": "https://yanxuan-item.nosdn.127.net/c86961c7e22acb1b62c5493ccf6a4b03.png",
          "orderNum": 9116
        },
        {
          "id": "1193027",
          "name": "MFI认证苹果快充数据线",
          "desc": "网易智造苹果快充数据线（1米升级加固版）",
          "price": "49.00",
          "picture": "https://yanxuan-item.nosdn.127.net/06d3a89ce18f0ae6360b9cd288084045.png",
          "orderNum": 1605
        },
        {
          "id": "1115024",
          "name": "MFi认证苹果快充数据线（1.2米/2米）",
          "desc": "MFi苹果官方认证极速充电",
          "price": "49.90",
          "picture": "https://yanxuan-item.nosdn.127.net/bc7298eb106089530bb6fbcdff81b15e.png",
          "orderNum": 408
        }
      ],
      ear: [
        {
          "id": "3842020",
          "name": "平台云音乐真无线蓝牙耳机Lite版",
          "desc": "蓝牙5.0低功耗20小时续航；三频均衡，干净音质；IPX5防水设计，纳米涂层；陶瓷天线，信号更强大",
          "price": "179.00",
          "picture": "https://yanxuan-item.nosdn.127.net/e3b8bf89ef7ba71c24c853927ec89ee8.png",
          "orderNum": 555
        },
        {
          "id": "3474002",
          "name": "平台云音乐车载蓝牙播放器快充版",
          "desc": "【经典升级】双口USB输出；充电安全保护；支持MIC；蓝牙免提，一键通话；多功能旋转按钮，简便操作",
          "price": "99.00",
          "picture": "https://yanxuan-item.nosdn.127.net/680506369180fd95d6dd0a0c3630c3da.png",
          "orderNum": 420
        },
        {
          "id": "3806013",
          "name": "平台云音乐氧气立体声蓝牙头戴式触控耳机",
          "desc": "智能红心键，一键交互云音乐app；高通蓝牙5.0强信号，aptX无损音质体验；26小时长续航；Hi-res专业高解析认证；极简滑触设计，柔软亲肤蛋白皮耳罩，佩戴舒适",
          "price": "459.00",
          "picture": "https://yanxuan-item.nosdn.127.net/d8764ae4cca84f15628d4d13797fad6e.png",
          "orderNum": 559
        },
        {
          "id": "1434006",
          "name": "平台智造零感蓝牙耳机",
          "desc": "超轻超小无感佩戴",
          "price": "59.00",
          "picture": "https://yanxuan-item.nosdn.127.net/c327b313314b9362ce9f49b253b0b61c.png",
          "orderNum": 392
        },
        {
          "id": "1649012",
          "name": "平台云音乐氧气有线入耳式耳机",
          "desc": "【11g轻盈佩戴】自然干净音质；三键线控，高清通话；简约设计，氧气美学，新增Type-C版本",
          "price": "99.00",
          "picture": "https://yanxuan-item.nosdn.127.net/11387df89ff3f4b838810aca7252b3e2.jpg",
          "orderNum": 424
        }
      ],
      other: [
        {
          "id": "3844032",
          "name": "平台有道翻译王青春版",
          "desc": "沟通无障碍，学习更轻松",
          "price": "799.00",
          "picture": "https://yanxuan-item.nosdn.127.net/0d8fe495fe82abbdf8826c4fd1e1e77b.png",
          "orderNum": 22
        },
        {
          "id": "3394027",
          "name": "平台有道翻译王2.0pro",
          "desc": "差旅学习必备，离线翻译神器",
          "price": "998.00",
          "picture": "https://yanxuan-item.nosdn.127.net/f4d16ea8149ae59cce203a73a61d3d50.png",
          "orderNum": 23
        },
        {
          "id": "3464062",
          "name": "办公居家必备，3A3U智能插线板",
          "desc": "高颜值插线板，办公居家必备",
          "price": "59.00",
          "picture": "https://yanxuan-item.nosdn.127.net/b9e65109ee77e9a78f57ce3fef97c793.png",
          "orderNum": 21
        },
        {
          "id": "1406008",
          "name": "平台智造小方盒智能插线板-Pro版",
          "desc": "内外兼修的充电利器，以一抵五，差旅标配",
          "price": "79.00",
          "picture": "https://yanxuan-item.nosdn.127.net/a0d701292c4ca153e1800be83c4a7178.png",
          "orderNum": 28
        },
        {
          "id": "3486000",
          "name": "平台有道口袋打印机GT1",
          "desc": "便携打印，配热敏纸一卷",
          "price": "179.00",
          "picture": "https://yanxuan-item.nosdn.127.net/5132df203926107422afc38bafe497fc.png",
          "orderNum": 9763
        },
        {
          "id": "1554052",
          "name": "3D全屏高清iPhone手机钢化玻璃膜",
          "desc": "进口材料，偏执工艺，玻璃潮流！",
          "price": "59.00",
          "picture": "https://yanxuan-item.nosdn.127.net/16467db3236af1c2341bf7e5b40ac8a4.png",
          "orderNum": 9181
        },
        {
          "id": "3487028",
          "name": "罗永浩推荐款！平台智造轻薄无线充电器",
          "desc": "苹果7.5W快充三星快充",
          "price": "59.00",
          "picture": "https://yanxuan-item.nosdn.127.net/3f72b00417feb825694276224ff1d632.png",
          "orderNum": 4124
        },
        {
          "id": "1553040",
          "name": "平台智造三合一磁吸车载支架",
          "desc": "带有隐形安全锤和割刀的手机支架！新增香薰版本！",
          "price": "39.00",
          "picture": "https://yanxuan-item.nosdn.127.net/ddd4ec81168f21a6cb1c89183476fa4b.png",
          "orderNum": 392
        },
        {
          "id": "1484016",
          "name": "新增iPhone13型号，编织纹手机壳",
          "desc": "会呼吸的手机壳,iPhone13系列惊艳亮相",
          "price": "11.90",
          "picture": "https://yanxuan-item.nosdn.127.net/5336b359d30b57c3266a325951b19aff.jpg",
          "orderNum": 487
        },
        {
          "id": "1569014",
          "name": "出差旅行必备神器，多国通用转换插头",
          "desc": "新增PD45W电脑快充款，电脑、手机、ipad快充1个搞定。",
          "price": "115.00",
          "picture": "https://yanxuan-item.nosdn.127.net/804d2ff16a809bc5055b90663456651a.jpg",
          "orderNum": 4086
        },
        {
          "id": "1143021",
          "name": "新增iPhone13型号，超薄空气感手机壳",
          "desc": "0.4mm纸一样薄磨砂手感",
          "price": "11.90",
          "picture": "https://yanxuan-item.nosdn.127.net/e9dc6573da47d33e0e06596f06aaaf68.jpg",
          "orderNum": 432
        },
        {
          "id": "3992720",
          "name": "旅途手机好伴侣，三合一车载手机支架",
          "desc": "带安全锤和应急割刀的手机支架",
          "price": "49.00",
          "picture": "https://yanxuan-item.nosdn.127.net/2245a3d6898361236babb66d834e19c8.jpg",
          "orderNum": 421
        },
        {
          "id": "3990740",
          "name": "发现隐藏角落的摄像头，多功能红外探测仪",
          "desc": "红外探测声光报警小巧便携",
          "price": "99.00",
          "picture": "https://yanxuan-item.nosdn.127.net/f04029bd97987a8fe796b2b3b41ef4dd.png",
          "orderNum": 9027
        }
      ]
    },
    // 乐器
    music: {
      guitar: [
        {
          "id": "4034793",
          "name": "跟灯按弦超好玩碳纤维智能尤克里里",
          "desc": "指板亮灯，指引按弦。可视化学习，更高效！还有更多游戏闯关，超有乐趣，不知不觉学会弹琴。",
          "price": "599.00",
          "picture": "https://yanxuan-item.nosdn.127.net/62107ce9769183757d9a425af9f503df.jpg",
          "orderNum": 2100
        },
        {
          "id": "3993375",
          "name": "云音乐定制IN系列intar民谣木吉他",
          "desc": "云音乐2020in系列全新设计intar民谣木吉他",
          "price": "625.00",
          "picture": "https://yanxuan-item.nosdn.127.net/4d825431a3587edb63cb165166f8fc76.jpg",
          "orderNum": 411
        }
      ]
    },
    // 头盔
    helmet: {
      helmets: [
        {
          "id": "4023114",
          "name": "KJE金属色系轻量电动车骑行盔男女通用",
          "desc": "3C认证，进口材料，安全出行",
          "price": "120.00",
          "picture": "https://yanxuan-item.nosdn.127.net/8f3a3b7dc6ca874f934b15af31417f61.png",
          "orderNum": 14803
        },
        {
          "id": "4007007",
          "name": "轻量电动车骑行盔",
          "desc": "采用奥地利进口EPS缓冲层，仅重560g，骑行过程中减少对肩颈的压力",
          "price": "129.00",
          "picture": "https://yanxuan-item.nosdn.127.net/dcebe1130f0ddce3edfd0a9d3dc7bd90.png",
          "orderNum": 865
        },
        {
          "id": "3997052",
          "name": "靓丽出行马卡龙骑行头盔（春上新）",
          "desc": "3C认证，进口材料，出行保暖",
          "price": "108.00",
          "picture": "https://yanxuan-item.nosdn.127.net/1a546fb563a4c1b2af9b2839c31e8da2.png",
          "orderNum": 3284
        },
        {
          "id": "4023115",
          "name": "双镜四季骑行半盔Pro（摩托车可用）",
          "desc": "3C认证，双镜片设计，进口材质耐撞抗摔",
          "price": "198.00",
          "picture": "https://yanxuan-item.nosdn.127.net/7498e93c9744cce5dad8b556befe8c10.png",
          "orderNum": 1892
        },
        {
          "id": "3991985",
          "name": "电动电瓶车头盔男女轻便灰四季通用",
          "desc": "强力防护、轻便舒适、3C认证",
          "price": "98.00",
          "picture": "https://yanxuan-item.nosdn.127.net/fb3c5a55c495441190c1e4ef791fc32e.png",
          "orderNum": 432
        },
        {
          "id": "4013432",
          "name": "KJE金属色系轻量电动车骑行盔男女通用",
          "desc": "1、通过国家3C安全标准，安全有保证。\n2、奥地利进口EPS，高密泡沫，有效缓冲外力，保护头部安全。\n3、PC一体成型外壳，减轻重量的同时，使得外壳更加牢固，提高头盔使用寿命。\n4、多彩金属亮面色系，让这款头盔更加年轻化，受众更广，接受度高。\n5、高清镜片技术，能轻松挡下骑行过程中的异物。\n6、精心设计的导风槽，可以使风从前后风孔流过带走热量，让人时刻保持清爽。",
          "price": "129.00",
          "picture": "https://yanxuan-item.nosdn.127.net/09723c372699a2c5a92b2204d58bd61e.png",
          "orderNum": 446
        },
        {
          "id": "4026809",
          "name": "亚洲头围城市运动通勤电动车头盔",
          "desc": "亚洲头型设计3C认证城市通勤",
          "price": "158.00",
          "picture": "https://yanxuan-item.nosdn.127.net/ae521f6d97560598f3e6b3ddaed477c0.png",
          "orderNum": 13099
        }
      ]
    }
  }
  // 搜索历史
  const searchHistory = ref([])
  // 添加搜索历史
  const addSearchHistory = (keyword) => {
    // 遍历数组，如果搜索历史已经存在传入的关键词，如果存在则删除，再添加
    searchHistory.value.forEach((item, index) => {
      if (item === keyword) {
        searchHistory.value.splice(index, 1)
      }
    })
    if (searchHistory.value.length > 4) {   // 如果搜索历史超过5条，如果超过删除最后一条，再添加
      searchHistory.value.pop()             // pop 删除数组最后一条
    }
    searchHistory.value.unshift(keyword)    // unshift 在数组最前面添加元素
  }
  // 删除搜索历史
  const delSearchHistory = (index) => {
    searchHistory.value.splice(index, 1)
  }
  // 清空搜索历史
  const clearSearchHistory = () => {
    searchHistory.value = []
  }
  return {
    searchGoods,
    searchHistory,
    addSearchHistory,
    delSearchHistory,
    clearSearchHistory
  }
},
{
  persist: true
})
