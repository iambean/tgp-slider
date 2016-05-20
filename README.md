# TGP轮播图组件

- 介绍：适用于在TGP内使用的轮播图组件，定制化。
将TGP项目中所有用到的轮播效果抽象化成组件，同时将各种产品形态的样式，
如单张从左向右、三张卡片切换、5张卡片立体切换等效果具体枚举成各种风格由'style'参数控制。
- 作者 : beanmao@tencent.com
- 日期 : 2016/3/16

e.g:

```javascript
    let wp1 =  document.getElementById('wrapper1'),
        ss1 = new StaticSlider(wp1,{
           contentStyles : {
               type : 'three-cards', //3张卡片切换的风格,默认为单张从左往右切换效果
               config : {      //选定风格的相关特定配置项，
                   mainCardWidth : 718,
   //                mainCardHeight : 300,
               },
               showPrevAndNext : true
           },
           navStyles : {
               type : 'title', //thumb(default)|title|disc
               showPrevAndNext : false//'false' to default.
           },
   //        customizeClass : 'lol-slider',
           autoPlay : false,
           duration : 200,
           delay : 3000,
           onItemClick : function(e, item, index, ele){
   //            console.log('on item click.', item, index, ele);
           },
           beforeSlide : function(item, index){
   //            console.log("before slide", index, item);
           },
           afterSlide : function(item, index){
   //            console.log("after slide", index, item);
           },
           items : [
               {title : '一',image : './assets/images/a.jpg'},
               {title : '二',image : './assets/images/b.jpg'},
               {title : '三',image : './assets/images/c.jpg'},
               {title : '四',image : './assets/images/d.jpg'},
               {title : '五',image : './assets/images/e.jpg'},
               {title : '六',image : './assets/images/f.png'},
               {title : '七',image : './assets/images/g.jpeg'},
               {title : '八',image : './assets/images/h.jpg'},
               {title : '九',image : './assets/images/i.png'},
               {title : '十',image : './assets/images/j.jpg'},
               {title : '十一',image : './assets/images/k.png'},
               {title : '十二',image : './assets/images/l.jpg'},
               {title : '十三',image : './assets/images/m.png'},
               {title : '十四',image : './assets/images/n.png'}
           ],
   //        items : [{
   //            title : '第一个',
   //            image : './assets/images/0.jpg',
   //            target : 'http://www.qq.com'
   //        },{
   //            title : '第二个',
   //            image : './assets/images/1.jpg',
   //            target : 'http://www.baidu.com'
   //        },{
   //            title : '第三个',
   //            image : './assets/images/2.jpg',
   //            target : 'http://www.baidu.com'
   //        },{
   //            title : '第四个',
   //            image : './assets/images/3.jpg',
   //            target : 'http://www.baidu.com'
   //        }]
       });


        let Slider = require('StaticSlider'),
            wp2 =  document.getElementById('wrapper2'),
            ss2 = new Slider(wp2,{
               contentStyles : {
                   type : 'single',
                   config : {      //选定风格的相关特定配置项，
                       mainCardWidth : 718,
       //                mainCardHeight : 300,
                   }
               },
               navStyles : {
                  type : 'disc', //thumb(default)|title|disc|none
                   showPrevAndNext :true//'false' to default.
               },
               customizeClass : 'lol-slider',
       //        showPrevAndNext : true,
               autoPlay : false,
               duration : 500,
               delay : 3000,
               onItemClick : function(e, item, index, ele){
                   console.log('on item click.', item, index, ele);
               },
               items : [{
                   title : '第一个',
       //            image : './assets/images/a.jpg',
                   video : 'http://www.w3schools.com/tags/movie.mp4'
               },{
                   title : '第二个',
                   image : './assets/images/b.jpg',
               },{
                   title : '第三个',
                   image : './assets/images/c.jpg',
               },{
                   title : '第四个',
                   image : './assets/images/d.jpg',
                   target : 'http://www.baidu.com'
               }]
        });
```


#### 2016/05/20修改记录：
+ 去jQuery
+ 增加支持CommonJS规范（原来只支持AMD/CMD）
+ options.showPrevAndNext 改为options.contStyles.showPrevAndNext
+ 支持navigator items上的单击事件。可以通过return false来阻止点击缩略图跳转到对应帧。
+ 支持视频选项。