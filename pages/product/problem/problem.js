Page({

  /**
   * 页面的初始数据
   */
  data: {
    list04: [
      {
        id: '1',
        name: 'E0',
        open: false,
        problem: '内部电路出现故障，无法正常工作',
        answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
      },
      {
        id: '2',
        name: 'E1',
        open: false,
        problem: '电磁炉在工作状态时检测到无锅具、锅具材质或尺寸不合适',
        answer: '用户自行放入合适的内胆后按下“保温/取消”后解除报警，若仍出现E1报警，请送九阳售后服务部维修。'
      },
      {
        id: '3',
        name: 'E2',
        open: false,
        problem: 'IGBT温度传感器过热或IGBT短、开路',
        answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
      },
      {
        id: '4',
        name: 'E3',
        open: false,
        problem: '电网电压过高',
        answer: '电网电压恢复正常后可自行恢复。若仍出现报警，请送九阳售后服务部维修。'
      },
      {
        id: '5',
        name: 'E4',
        open: false,
        problem: '电网电压过低',
        answer: '电网电压恢复正常后可自行恢复。若仍出现报警，请送九阳售后服务部维修。'
      },
      {
        id: '6',
        name: 'E5',
        open: false,
        problem: '顶部温度传感器出现开路故障',
        answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
      },
      {
        id: '7',
        name: 'E6',
        open: false,
        problem: '顶部温度传感器出现短路故障',
        answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
      },
      {
        id: '8',
        name: 'E7',
        open: false,
        problem: '底部温度传感器温度过高或出现短/开路故障',
        answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
      },
      {
        id: '9',
        name: 'E8',
        open: false,
        problem: '通信故障',
        answer: '拔电后重新上电，仍出现请送九阳售后服务部维修。'
      }
    ]
  },
  viewAnswer: function (e) {
    var id = e.currentTarget.id, list = this.data.list04;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      }
    }
    this.setData({
      list04: list
    });
  }
})