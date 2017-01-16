// mine/index.js
var app=getApp();
Page({
  data:{
    userInfo:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    app.getUserInfo(function (userInfo){
      
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
      wx.hideNavigationBarLoading()
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  wxpay:function (event){
 
       wx.chooseLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success: function(res) {
            var latitude = res.latitude
            var longitude = res.longitude
           
          }
        })
  }





})//end