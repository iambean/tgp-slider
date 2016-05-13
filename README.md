/**
  * @title : 轮播组件
  * @desc : 适用于在TGP内使用的轮播图组件，定制化。
  *         将TGP项目中所有用到的轮播组件（焦点图、轮播图等）全部抽象化成轮播组件，同时将各种产品形态的样式，
  *        如单张从左向右、三张卡片切换、5张卡片立体切换等效果具体枚举成各种风格由'style'参数控制。
  *
  * @author : beanmao@tencent.com
  * @date : 2016/3/16
  */

var StaticSlider = require("StaticSlider");
 *  var ss = new StaticSlider(document.querySelector("#testDiv"), {
 *          //主区域UI风格相关
 *          contentStyles : {
 *              type : '3cards', //3张卡片切换的风格,默认为单张从左往右切换效果
 *              config : {      //选定风格的相关特定配置项，
 *                  mainCardWidth : 360,
 *                  mainCardHeight : 200,
 *              }
 *          },
 *          showPrevAndNext : true, //是否展示前后导航的按钮（如果条件满足）
 *          //导航栏（如缩略图）UI风格相关
 *          navStyles : {
 *              type : 'thumb', //tab切换的风格，默认thumb缩略图模式。可选'none'/'thumb'/'title'/'disc'
 *              showPrevAndNext : false //是否在导航条两侧展示前进后退按钮
 *          },
 *
 *          //每一项的公共点击行为，如数据上报等。this为<li>的element
 *          onItemClick : function(e, item, index){
 *              console.log("每个item点击都会执行， 并且是最先执行的。");
 *          },
 *
 *          //发生滑动之前的响应函数，如统计曝光率。注意当viewport的items个数>1时，
 *          //比如'3cards'时，就同时有3个响应，如果需要看是否focus的那个，则要判断参数index和currentIndex对比
 *          onSlide : function(item, index){
 *              console.log('即将发生滑动的是'， item);
 *          },
 *
 *          items : [{
 *              title : '新英雄“烬”介绍',
 *              image : 'http://p3.pstatp.com/large/1090001447585aaec8f',
 *              thumb : 'http://p3.pstatp.com/large/1090001447585aaec8f',
 *              // onClick表示自定义点击事件，如果同时有target选项，那么先执行onClick，结束就跳转到target。this为<li>的element.
 *              onClick : function(e, item, index){
 *                  console.log("点击的元素是",li, 点击坐标点是, e.pageX, e.pageY);
 *              }
 *          },{
 *              title : '暗裔剑魔 亚托克斯',
 *              image : 'http://ossweb-img.qq.com/images/lol/web201310/skin/big266000.jpg',
 *              thumb : 'http://p3.pstatp.com/large/1090001447585aaec8f',
 *              target : 'http://www.qq.com'
 *          },{
 *              title : '九尾妖狐 阿狸',
 *              image : 'http://ossweb-img.qq.com/images/lol/web201310/skin/big103000.jpg',
 *              thumb : 'http://p3.pstatp.com/large/1090001447585aaec8f',
 *              target : 'http://www.qq.com'
 *          },{
 *              title : '暗影之拳 阿卡丽',
 *              image : 'http://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
 *              thumb : 'http://p3.pstatp.com/large/1090001447585aaec8f',
 *              target : 'http://www.qq.com'
 *          }]
 *      });