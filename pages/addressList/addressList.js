// pages/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 列表数据层
    addressList: [{
        type: 'A',
        members: [{
            img: '/images/1.jpg',
            name: 'Amy',
          },
          {
            img: '/images/2.jpg',
            name: 'Amy',
          },
          {
            img: '/images/3.jpg',
            name: 'Amy',
          },
        ]
      },
      {
        type: 'B',
        members: [{
            img: '/images/1.jpg',
            name: 'Bili',
          },
          {
            img: '/images/2.jpg',
            name: 'Bili',
          },
          {
            img: '/images/3.jpg',
            name: 'Bili',
          },
          {
            img: '/images/4.jpg',
            name: 'Bili',
          },
          {
            img: '/images/5.jpg',
            name: 'Bili',
          }
        ]
      },
      {
        type: 'C',
        members: [{
            img: '/images/1.jpg',
            name: 'Cat',
          },
          {
            img: '/images/2.jpg',
            name: 'Cat',
          },
          {
            img: '/images/3.jpg',
            name: 'Cat',
          },
          {
            img: '/images/4.jpg',
            name: 'Cat',
          },
          {
            img: '/images/5.jpg',
            name: 'Cat',
          }
        ]
      },
      {
        type: 'D',
        members: [{
            img: '/images/1.jpg',
            name: 'Dave',
          },
          {
            img: '/images/2.jpg',
            name: 'Dave',
          },
          {
            img: '/images/3.jpg',
            name: 'Dave',
          },
          {
            img: '/images/4.jpg',
            name: 'Dave',
          },
          {
            img: '/images/5.jpg',
            name: 'Dave',
          }
        ]
      },
      {
        type: 'O',
        members: [{
            img: '/images/1.jpg',
            name: 'Olive',
          },
          {
            img: '/images/2.jpg',
            name: 'Olive',
          },
          {
            img: '/images/3.jpg',
            name: 'Olive',
          },
          {
            img: '/images/4.jpg',
            name: 'Olive',
          },
          {
            img: '/images/5.jpg',
            name: 'Olive',
          }
        ]
      },
      {
        type: 'P',
        members: [{
            img: '/images/1.jpg',
            name: 'Panda',
          },
          {
            img: '/images/2.jpg',
            name: 'Panda',
          },
          {
            img: '/images/3.jpg',
            name: 'Panda',
          },
          {
            img: '/images/4.jpg',
            name: 'Panda',
          },
          {
            img: '/images/5.jpg',
            name: 'Panda',
          }
        ]
      },
      {
        type: 'R',
        members: [{
            img: '/images/1.jpg',
            name: 'Rabbit',
          },
          {
            img: '/images/2.jpg',
            name: 'Rabbit',
          },
          {
            img: '/images/3.jpg',
            name: 'Rabbit',
          },
          {
            img: '/images/4.jpg',
            name: 'Rabbit',
          },
          {
            img: '/images/5.jpg',
            name: 'Rabbit',
          }
        ]
      },
      {
        type: 'T',
        members: [{
            img: '/images/1.jpg',
            name: 'Tom',
          },
          {
            img: '/images/2.jpg',
            name: 'Tom',
          },
          {
            img: '/images/3.jpg',
            name: 'Tom',
          },
          {
            img: '/images/4.jpg',
            name: 'Tom',
          },
          {
            img: '/images/5.jpg',
            name: 'Tom',
          }
        ]
      },
    ],

    // 每个类型在页面中的高度
    addressListHeight: [],

    // 右侧列表内容
    list: [],

    // 窗体默认高度
    windowHeight: 0,

    // 右侧列表响应控制
    currentList: 0,

    // 控制变量：点击右侧列表通讯录响应
    toView: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '通讯录',
    });

    // 获取窗体高度
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          windowHeight: result.windowHeight
        })
      },
    })

    this.getRightList();
    this.getTypeHeight();
  },

  // 获取类型高度
  getTypeHeight: function (e) {
    let typeHeight = [];
    wx.createSelectorQuery().selectAll('.type').boundingClientRect((rects) => {
      rects.forEach((item, index) => {
        typeHeight.push(item.top);
      })
    }).exec();
    this.setData({
      addressListHeight: typeHeight
    });
  },

  // 根据通讯录数据动态生成右侧列表
  getRightList: function (e) {
    let list = [];
    this.data.addressList.forEach((item, index) => {
      list.push(item.type);
    });
    this.setData({
      list: list
    });
  },

  // 通讯录滚动时触发，右侧列表响应
  scroll: function (e) {
    this.answer(e.detail.scrollTop);
  },

  // 右侧列表响应方法
  answer: function (currentHeight) {
    let addressListHeight = this.data.addressListHeight;
    for(let i = 1, len = addressListHeight.length; i < len; i++) {
      if (currentHeight >= addressListHeight[i-1] && currentHeight < addressListHeight[i]) {
        this.setData({
          currentList: i-1
        });
        break;
      }
    }
  }, 

  // 点击右侧列表，通讯录响应方法
  addressListAnswer: function (event) {
    console.log(event);
    let index = event.currentTarget.dataset.index;
    this.setData({
      toView: 'list'+index
    })
  }
  

})