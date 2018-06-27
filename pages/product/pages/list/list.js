Page({
	data:{
    list01:{
      id:'platform',
      name:'全部平台',
      open:false
    },
		platform:[
      {
        id: 'all',
        name: '全部',
        imgurl: '../resource/all.png'
      },
      {
        id:'ai',
        name:'智能',
        imgurl:'../resource/ai.png'
      },
      {
        id: 'weixin',
        name: '微信',
        imgurl: '../resource/weixin.png'
      },
      {
        id: 'jd',
        name: '京东',
        imgurl: '../resource/ai.png'
      },
      {
        id: 'taobao',
        name: '淘宝',
        imgurl: '../resource/ai.png'
      },
      {
        id: 'wph',
        name: '唯品会',
        imgurl: '../resource/ai.png'
      }
    ],
    product:[
      {
        id:'JY-1001-QW',
        platfromId:'ai',
        platformName:'智能',
        platformImg:'../resource/ai.png',
        productUrl:'../resource/img02.png',
        productName:'豆浆机',
        productModel:'DJ-1001-QW'
      },
      {
        id: 'JY-1001-QW',
        platfromId: 'weixin',
        platformName: '微信',
        platformImg: '../resource/weixin.png',
        productUrl: '../resource/img01.png',
        productName: '电饭煲',
        productModel: 'JY-1002-QW'
      },
      {
        id: 'JY-1001-QW',
        platfromId: 'weixin',
        platformName: '微信',
        platformImg: '../resource/weixin.png',
        productUrl: '../resource/img01.png',
        productName: '电饭煲',
        productModel: 'JY-1002-QW'
      }
    ]
	},
  //点击全部平台
  platform : function (e) {
    var id = e.currentTarget.id;
    var list = this.data.list01;
    if(list.id == id){
      list.open = !list.open;
    }
    this.setData({
      list01: list
    });
  }
})