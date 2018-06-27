Page({
  data:{
    //产品信息
    proInfo:{
        id: 'JY-1001-QW',
        platfromId: 'ai',
        platformName: '智能',
        platformImg: '../resource/ai.png',
        productUrl: '../resource/img02.png',
        productName: '电饭煲',
        productModel: 'DJ-1001-QW',
        collectImg:'../resource/heart.png'
      },
    //产品指南
    guide: [
      {
        id: 'introduction',
        name: '产品简介',
        guideUrl: '../../introduction/introduction'
      },
      {
        id: 'spot',
        name: '产品亮点',
        guideUrl: '../../spot/spot'
      },
      {
        id: 'guide',
        name: '使用指南',
        guideUrl: '../../guide/guide'
      },
      {
        id: 'clean',
        name: '清洁保养',
        guideUrl: '../../clean/clean'
      },
      {
        id: 'problem',
        name: '常见问题',
        guideUrl: '../../problem/problem'
      },
      {
        id: 'afterSale',
        name: '售后服务',
        guideUrl: '../../aftersale/aftersale'
      }
    ]    
  },
  collect: function(e){
    var id = e.currentTarget.id;
    var info = this.data.proInfo;
    if(info.id == id){
      if (info.collectImg == '../resource/heart.png'){
        info.collectImg = '../resource/heart-on.png'
      }else{
        info.collectImg = '../resource/heart.png'
      }
    }
    this.setData({
      proInfo: info
    });
  }

})