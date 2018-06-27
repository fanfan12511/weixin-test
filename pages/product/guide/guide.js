Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,//指示点
    autoplay: true,//是否自动切换
    interval: 5000,//切换时间间隔
    duration: 1000,//滑动动画时长
    list03: [
      {
        id: 'cooking',
        name: '烹饪准备',
        open: true,
        imgurl: [
          '../../../image/prepare1.jpg',
          '../../../image/prepare2.jpg',
          '../../../image/prepare3.jpg'
        ],
      },
      {
        id: 'fast',
        name: '快速入门',
        open: false,
        imgurl: [
          '../../../image/fast1.jpg',
          '../../../image/fast2.jpg',
          '../../../image/fast3.jpg'
        ],
      },
      {
        id: 'use',
        name: '使用说明',
        open: false,
        imgurl: [
          '../../../image/explain1.jpg',
          '../../../image/explain2.jpg',
          '../../../image/explain3.jpg'
        ],
      }
    ]
  },
  changSwiper: function (e) {
    var id = e.currentTarget.id, list = this.data.list03;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = true;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list03: list
    });
  }
})