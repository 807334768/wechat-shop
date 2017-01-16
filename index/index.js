// index/index.js
Page({
  data:{
     imgUrls: [  
      '../images/banner1.png',  
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',  
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'  
    ],  
    indicatorDots: true,  
    autoplay: false,  
    interval: 5000,  
    duration: 1000  ,
    recommend:[
        {
          id:'1',
          recommendUrl:'../images/cherry.png',
          recommendName:'泰山脚下的大樱桃',
          recommendInfo:'适合在余量充沛，日照充足，温度适宜的热带及亚热带地区生长，使其获得丰富维生素c',
        },{
          id:'2',
          recommendUrl:'../images/cherry.png',
          recommendName:'泰山脚下的大樱桃',
          recommendInfo:'适合在余量充沛，日照充足，温度适宜的热带及亚热带地区生长，使其获得丰富维生素c',
        },{
          id:'3',
          recommendUrl:'../images/cherry.png',
          recommendName:'泰山脚下的大樱桃',
          recommendInfo:'适合在余量充沛，日照充足，温度适宜的热带及亚热带地区生长，使其获得丰富维生素c',
        },{
          id:'4',
          recommendUrl:'../images/cherry.png',
          recommendName:'泰山脚下的大樱桃',
          recommendInfo:'适合在余量充沛，日照充足，温度适宜的热带及亚热带地区生长，使其获得丰富维生素c',
        }
      ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }


})
