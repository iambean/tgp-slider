# TGP-Slider(TGP轮播图组件)

>+ 适用于在TGP内使用的轮播图组件，定制化。
将TGP项目中所有用到的轮播效果抽象化成组件，同时将各种产品形态的样式，
如单张从左向右、三张卡片切换、5张卡片立体切换等效果具体枚举成各种风格由'style'参数控制。
>+ 作者 : beanmao@tencent.com
>+ 创建日期 : 2016/3/16

## Install
```
//外网：
npm install tgp-slider
```
```
//内网:
tnpm install @tencent/tgp-slider
```
## Usage
```
    //生成一个轮播图实例对象。
    new StaticSlider(wrapper, options);
```

## Examples
```javascript
    let StaticSlider = require('StaticSlider'),
        wrapper = document.getElementById('wrapper1'),
        ss = new StaticSlider(wrapper, {
            contentStyle : {
            //...
            }
        });
```

## Parameters

### wrapper
Type: `HTMLElement`

指定的容器

### options

Type: `Object`

#### contentStyle
Type : `Object`

主体UI风格

##### effect
Type : `String`

特效名，取值范围为：`slider-3d | fade | translation`

+ `slider-3d` : 三张（或者5张卡片的轮换效果）
+ `fade` : 淡入淡出效果（单图切换）
+ `translation` : 平移（单图切换）

##### background
Type : `String`

背景图的样式，取值范围：`cover | contain`，背景图比例均与原始尺寸一致。

+ `cover` : 填满，不定宽容器在拉伸时图片可能显示不全，但是不会有透明边缘。
+ `contain` : 完全包含，不定宽容器在拉伸时可能会有透明边缘，但是图片会完全显示。

##### cardWidth
Type : `Number`

单张图容器&lt;li&gt;的宽度

##### showPrevAndNext
Type : `Boolean`

是否展示前后导航的按钮，默认true.

#### navStyle
Type : `Object`

导航部分的样式

##### type
Type : `String`

导航栏的样式， 可选值有 ： `disc | thumb | title | none`

+ `disc` 小圆点
+ `thumb` 缩略图模式。这要求items的配置部分必须有`thumb`字段，否则就以`image`(图片)指或者`poster`(视频)
+ `title` 标题模式。取自items里面的title字段。
+ `none` 无导航栏。

##### showPrevAndNext
Type : `Boolean`

是否显示导航栏的前后按钮，默认false.

#### pauseWhenHoverItem
Type : `Boolean`

鼠标hover到item上是否暂停自动播放， 默认true.

#### slideWhenHoverItem
Type : `Boolean`

鼠标hover到导航选项时，是否slide到对应item， 默认false.

#### autoRun
Type : `Boolean`

是否自动播放，默认true.

#### startAt
Type : `Number`

初始化展示第几个item，默认0(第一个).

#### duration
Type : `Number`

轮播过程持续时间，单位ms，默认500.

#### delay
Type : `Number`

轮播间隔时间，单位ms，默认3000.

#### easing
Type : `String`

翻页切换的timing-function，默认'ease-in',建议不赋值。同css transition-timing-function.，支持自定义cubic-bezier.，默认ease-out.

#### ownClass
Type : `String`

自定义的className，附加在.tgp-slider的容器上，可以实现自定义UI。

#### beforeSlide(item, index, li)
Type : `Function`

发生滑动之前的回调.

+ `item` : 事件发生的item元素
+ `index` : 事件发生元素的索引号
+ `li` : {HTMLElement} 事件发生的&lt;li&gt;元素

#### onSliding(item, index, li)
Type : `Function`

滑动过程中(动画执行过程)

+ `item` : 事件发生的item元素
+ `index` : 事件发生元素的索引号
+ `li` : {HTMLElement} 事件发生的&lt;li&gt;元素


#### afterSlide(item, index, li)
Type : `Function`

一个item划过来后，响应的回调

+ `item` : 事件发生的item元素
+ `index` : 事件发生元素的索引号
+ `li` : {HTMLElement} 事件发生的&lt;li&gt;元素

#### onItemClick(e,item, index, li)
Type : `Function`

每个item的公共点击行为，如数据上报等。this为<li>的element

+ `e` : click原始事件对象
+ `item` : 事件发生的item元素
+ `index` : 事件发生元素的索引号
+ `li` : {HTMLElement} 事件发生的&lt;li&gt;元素

#### onNavItemClick(e,item, index)
Type : `Function`

导航栏元素（UI取决于navStyle.type值）的click事件

+ `e` : click原始事件对象
+ `item` : 事件发生的item元素
+ `index` : 事件发生元素的索引号

#### onNavButtonClick(e,item, index)
Type : `Function`

导航左右箭头的自定义事件,默认为调到下一项。

+ `e` : click原始事件对象
+ `direct` : 点击按钮的方向 -1(左箭头)， 1(右箭头)


#### items
Type : `Array`

轮播项元素，结构：`[{title : "", image : "", video : "", thumb : ""}]`

##### title
Type : `String`

轮播项的标题

##### image
Type : `String`

轮播图片的URL，如果该项是视频（同级设置了有效的`video`值），那么image的值将作为该视频的播放前的cover图，即&ltvideo;%gt;的poster属性。

##### video
Type : `String`

轮播项为视频的URL。设置了此项则表示是视频，没有则是图片(至少需要有一项)。

##### thumb
Type : `String`

缩略图。在`navStyle.type = "thumb"`时用到此值，如果没有，则取同级的`image`值


## API

### id
Type : `String`

当前轮播图的标记id。一般不需要，仅在内部用。

### wrapper
Type : `HTMLElement`

轮播图的容器，和第一个参数一致。

### elements
Type : `Object`

内部相关dom元素的集合

+ `viewport` 主区域items
+ `prevBtn` 主区域左右箭头按钮
+ `nextBtn`
+ `navigator` 导航区
+ `navPrevBtn`  导航左右箭头
+ `navNextBtn`
+ `navItems`

### mutliple
Type : `Boolean`

是否多图模式。从items的值获得。

### status
Type : `String` `readonly`

取得轮播图当前的状态

+ `playing`正在播放中
+ `stopped` 已停止

### itemsSize
Type : `Number` `readonly`

轮播图元素个数

### currentIndex
Type : `Number` `readonly`

当前viewport所显示元素的索引号

### currentLiElement
Type : `HTMLElement` `readonly`

当前viewport内的&lt;li&gt;dom节点


### slideTo(index)
+ index `Number`

slide到指定的的帧，如果index超过items.length,则取模。

### slideToPrev()
向前一帧

### slideToNext()
向后一帧

### stop(reset)
+ `reset` 位置是否归零（暂不支持设置， 相当于定值`false`）.

停止轮播

### run()
轮播图从当前停止的位置开始继续轮播

## License
MIT.
## 修改记录

### 2016/05/20
+ 去jQuery
+ 增加支持CommonJS规范（原来只支持AMD/CMD）
+ options.showPrevAndNext 改为options.contStyles.showPrevAndNext
+ 支持navigator items上的单击事件。可以通过return false来阻止点击缩略图跳转到对应帧。
+ 支持视频选项。

### 2016/06/18修改记录：
+ 支持淡入淡出、平移、同帧多图效果
+ 支持视频自动播放（仅mp4）,后续支持更多。
+ 配置参数调整优化。
