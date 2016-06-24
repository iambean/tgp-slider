'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @title : TGP轮播组件（静态）
 * @desc :  1)选定的风格样式下单屏出现N个卡片的形式（例如three-cards）那么创建N+2个li element.多出的两个放在首尾，做连接作用。
 *          2)
 * @author : beanmao@tencent.com
 * @date : 2016/3/16
 */
;
!function (window, undefined) {
    'use strict';

    // TODO:这个方法是给gulp构建工具使用的,目的是静态引入目标css文件作为字符串使用，INCLUDE_FILE是供gulp plugin使用的方法

    var cssString = "/*----------Component public styles:----------*/\r\n\r\n/* --------------------------------------  轮播基本样式 -------------------------------------- */\r\n.tgp-slider {position: relative;overflow:hidden;height: 100%;width: 100%;}\r\n.tgp-slider ul{padding:0;margin:0; list-style: none;left:0;top:0;position:relative;width:100%;height:100%;}\r\n.tgp-slider ul.slider-viewport{position:relative;width:100%;height:100%;}\r\n.tgp-slider li{z-index:1;padding:0;margin:0;text-align: center;vertical-align: top;position:absolute;transform:none;}\r\n.tgp-slider .left-hider{z-index:1;}\r\n.tgp-slider .lefter{z-index:3;}\r\n.tgp-slider .current{z-index:5;}\r\n.tgp-slider .righter{z-index:3;}\r\n.tgp-slider .right-hider{z-index:1;}\r\n.tgp-slider .tgp-figure{display: inline-block; margin: 0 auto;border:none;vertical-align: top;font-size: 0;background-position: 50% 50%;background-repeat:no-repeat;}\r\n.tgp-slider .tgp-figure:before { box-shadow: none;}\r\n.tgp-slider .tgp-figure img{width : 100%;}\r\n/*轮播图片如果是视频*/\r\n.tgp-slider .tgp-figure.video{position: relative;}\r\n.tgp-slider .tgp-figure.video:before{content: \"\";position: absolute;width: 86px;height: 86px;left: 50%;top: 50%;margin-left: -43px;margin-top: -43px;background-image:url(./assets/images/icon-player.png); }\r\n\r\n.tgp-slider li{width : 100%;height:100%;}\r\n.tgp-slider .tgp-figure{width : 100%;height:100%;}\r\n\r\n/* -------------------------  轮播风格:[单张图左右平移]---默认效果 -------------------------- */\r\n.tgp-slider.translation .left-hider{transform:translate3d(-200%, 0, 0);}\r\n.tgp-slider.translation .lefter{transform:translate3d(-100%,0, 0);}\r\n.tgp-slider.translation .current{transform:translate3d(0,0, 0);}\r\n.tgp-slider.translation .righter{transform:translate3d(100%,0, 0);}\r\n.tgp-slider.translation .right-hider{transform:translate3d(200%, 0, 0);}\r\n\r\n/* -------------------------  轮播风格:[淡入淡出] -------------------------------- */\r\n.tgp-slider.fade li{opacity: 0;}\r\n.tgp-slider.fade .current{opacity: 1;}\r\n\r\n/* -------------------------  轮播风格:[3d切换] -------------------------------- */\r\n.tgp-slider.slider-3d .left-hider{transform:scale(.6) translate3d(-200%,0, 0);}\r\n.tgp-slider.slider-3d .lefter{text-align:left;transform:scale(.8) translate3d(-80%,0, 0);}\r\n.tgp-slider.slider-3d .current{transform:scale(1) translate3d(0,0, 0);}\r\n.tgp-slider.slider-3d .righter{text-align: right;transform:scale(.8) translate3d(80%,0, 0);}\r\n.tgp-slider.slider-3d .right-hider{transform:scale(.6) translate3d(200%,0, 0);}\r\n/* 蒙层 */\r\n.tgp-slider.slider-3d li:not(.current) .tgp-figure:after\r\n{content: \"\";background: rgba(0, 0, 0, .8);z-index: 10;position: absolute;top: 0;left: 0;display: block;width: 100%;height: 100%;}\r\n.tgp-slider.slider-3d .right-hider .tgp-figure:after,\r\n.tgp-slider.slider-3d .left-hider .tgp-figure:after{background: rgba(0, 0, 0, .9);}\r\n\r\n/* -------------------------  轮播图背景:[填满容器](背景图和容器高宽比例不一致时会被截掉) -------------------------------- */\r\n/*.tgp-slider.cover li{width: 100%!important;height: 100%;left: 0!important;margin: 0!important;}*/\r\n.tgp-slider.cover .tgp-figure{/*width: 100%;*/ background-size: cover;}\r\n/*.tgp-slider.cover .tgp-figure:after{background: rgba(0, 0, 0, 0);}*/\r\n\r\n/* -------------------------  轮播图背景:[完全展示](背景图和容器高宽比例不一致时会留白) -------------------------------- */\r\n.tgp-slider.contain .tgp-figure{background-size: contain;}\r\n\r\n/* -------------------------  轮播图背景:[多张图] -------------------------------- */\r\n.tgp-slider.mutliple{overflow: visible;}\r\n.tgp-slider.mutliple ul{display: -webkit-box;position: relative;}\r\n.tgp-slider.mutliple ul li { display: -webkit-box; width: 100%; }\r\n.tgp-slider.mutliple .slider-viewport { position: relative; z-index: 1; overflow: hidden; width: 100%; height: 100%; }\r\n.tgp-slider.mutliple .slider-viewport li { display: -webkit-box; width: 100%; }\r\n.tgp-slider.mutliple ul li .tgp-figure {-webkit-box-flex: 1;position: relative;margin-right: 1px;overflow: hidden;width:100%;  }\r\n.tgp-slider.mutliple ul li .tgp-figure:last-child { margin-right: 0; }\r\n.tgp-slider.mutliple .slider-viewport .tgp-figure{ display: block; overflow: hidden; background-size: cover; }\r\n.tgp-slider.mutliple .slider-viewport .tgp-figure-title {\r\n    position: absolute;bottom: 0;left: 0;width: 100%;line-height: 30px;color: rgba(255,255,255,.8);\r\n    background-color: rgba(0,0,0,.7);cursor: pointer;padding: 0 5px;box-sizing: border-box;\r\n}\r\n.tgp-slider.mutliple .slider-viewport .tgp-figure-title {\r\n    white-space: nowrap;overflow: hidden;text-overflow: ellipsis;height: 30px;transition: height .2s ease-in-out;cursor: pointer;\r\n}\r\n.tgp-slider.mutliple  .slider-viewport .item:hover .tgp-figure-title { white-space: normal; height: 40px; }\r\n.tgp-slider.mutliple .thumb-gallery{display: none;}\r\n.tgp-slider.mutliple .focusthumb-wp{margin-top:-5px;}\r\n\r\n/* 主区域的prev/next按钮 */\r\n.tgp-slider .slide-btn-pre, .slide-btn-next{position:absolute;background: rgba(38, 54, 76, 0.20);overflow:hidden;top:50%;width:30px;height:78px;cursor: pointer;\r\n    margin-top:-39px;z-index:10;text-align:center;outline: 1px solid rgba(255, 255, 255, 0.05);outline-offset: -1px; }\r\n.tgp-slider .slide-btn-pre:hover, .slide-btn-next:hover{ background:rgba(38, 54, 76, 0.40);}\r\n.tgp-slider .slide-btn-pre:before, .slide-btn-next:before{position:absolute; content:\"\"; width:20px;height:20px; display:block; top:50%; margin-top:-10px;}\r\n.tgp-slider .slide-btn-pre{left:1px;}\r\n.tgp-slider .slide-btn-next{right:1px;}\r\n.tgp-slider .slide-btn-pre:before{border-left:2px solid rgba(255,255,255,.3);border-bottom:2px solid rgba(255,255,255,.3);-webkit-transform:rotate(45deg);left:10px;}\r\n.tgp-slider .slide-btn-next:before{border-right:2px solid rgba(255,255,255,.3);border-bottom:2px solid rgba(255,255,255,.3);-webkit-transform:rotate(-45deg);right:10px;}\r\n.tgp-slider .slide-btn-pre:hover:before, .slide-btn-next:hover:before{border-color: rgba(255, 255, 255, 0.50);}\r\n.tgp-slider .slide-btn-pre.disabled, .slide-btn-next.disabled{background:rgba(0, 0, 0, 0.2);}\r\n.tgp-slider .slide-btn-pre.disabled:before, .slide-btn-next.disabled:before{opacity:0.5}\r\n\r\n/* 导航栏基础样式 */\r\n.tgp-slider .focusthumb-wp{position: relative; width:100%;height:33px;margin:-33px auto 0;text-align: center;z-index:10;}\r\n/*thumb缩略图下的前后Button*/\r\n.tgp-slider .focusthumb-wp{position: relative; width:100%;height:30px;  margin:0 auto;margin-top:-33px; text-align: center;z-index:10;}\r\n.tgp-slider .focusthumb-wp .slide-btn-pre,\r\n.tgp-slider .focusthumb-wp .slide-btn-next{height:30px; width:20px; line-height: 30px;margin-top:-15px;}\r\n.tgp-slider .focusthumb-wp .slide-btn-pre:before,\r\n.tgp-slider .focusthumb-wp .slide-btn-next:before\r\n{position: absolute;content: \"\";width: 8px;height: 8px;display: block;top: 50%;margin-top: -4px;  }\r\n.tgp-slider .focusthumb-wp .slide-btn-pre:before{margin-left:-3px;}\r\n.tgp-slider .focusthumb-wp .slide-btn-next:before{margin-right:-3px;}\r\n\r\n/* 导航栏:[thumb] */\r\n.tgp-slider .focusthumb{width:100%; background:rgba(0, 0, 0, 0.6);\r\n    position:absolute;top:0;left:0;z-index:10;display:-webkit-box;\r\n    display:-webkit-flex;display:flex;-webkit-justify-content:center;-webkit-box-pack:center;}\r\n\r\n.tgp-slider .focusthumb a{display:block;height:27px; width:92px;margin:3px; overflow: hidden;}\r\n.tgp-slider .focusthumb a img{width:100%; height:100%;}\r\n.tgp-slider .focusthumb .cur, .tgp-slider .focusthumb a:hover{outline:#fff solid 2px;outline-offset: -1px;}\r\n\r\n/* 导航栏:[disc] */\r\n.tgp-slider .thumb-dot{display:block; text-align:center; background: none; top:auto;bottom:5px;}\r\n.tgp-slider .thumb-dot a{width: 8px; height: 8px;display:inline-block; line-height: 8px; border-radius: 50%; background-color: rgba(255,255,255,0.6); margin: 0 2px;}\r\n.tgp-slider .thumb-dot a:hover{background-color: rgba(255,255,255,0.8);outline: none;outline-offset:0;}\r\n.tgp-slider .thumb-dot a.cur { background-color: #fff; outline: none;outline-offset:0;}\r\n.tgp-slider .thumb-dot a img,.tgp-slider .thumb-dot a span{display:none;}\r\n\r\n/* 导航栏:[title] */\r\n.tgp-slider .thumb-txt{height:33px;line-height: 33px; background: rgba(0, 0, 0, 0.4);}\r\n.tgp-slider .thumb-txt a{width:20%; line-height: 33px; height:33px;margin: 0 1px 0 0;background: rgba(0, 0, 0, 0.3); text-decoration: none;}\r\n.tgp-slider .thumb-txt a:last-child{margin-right:0;}\r\n.tgp-slider .thumb-txt a:hover{outline:none; outline-offset:0;background-color:#0095ff;}\r\n.tgp-slider .thumb-txt a span{color:rgba(255,255,255,.5);white-space: nowrap; overflow: hidden; text-overflow: ellipsis;display: block;\r\n    padding: 0 5px; font-size: 12px; text-align: center;}\r\n.tgp-slider .thumb-txt a:hover span{color:rgba(255,255,255,.8)}\r\n.tgp-slider .thumb-txt a.cur,.tgp-slider .thumb-txt a.cur:hover{ background-color:#0095ff;outline: none;outline-offset:0;}\r\n.tgp-slider .thumb-txt a.cur span,.tgp-slider .thumb-txt a.cur:hover span{  color:#fff;}\r\n.tgp-slider .thumb-txt a img{display:none;}\r\n\r\n/* 导航栏:[title] */\r\n.tgp-slider .gallery{position: static;width: 100%!important;left: 0!important;margin-left: 0!important;-webkit-justify-content:flex-start;-webkit-box-pack:start;}\r\n.tgp-slider .gallery a{position: relative;overflow: visible;}\r\n.tgp-slider .gallery a:before{content: \"\";position: absolute;left: 50%;margin-left: -4px;top: -13px;width: 0;height: 0;font-size: 0;overflow: hidden;border: 6px solid;border-color: transparent transparent #0095ff transparent;visibility: hidden;}\r\n.tgp-slider .gallery .cur:before,\r\n.tgp-slider .gallery a:hover:before{visibility: visible;}\r\n.tgp-slider .gallery .cur,\r\n.tgp-slider .gallery a:hover{outline:2px solid #0095ff}\r\n.tgp-slider .gallery .focusthumb .video:after{content: \"\";position: absolute;width: 86px;height: 86px;left: 50%;top: 50%;margin-left: -43px;margin-top: -43px;background-image:url(./assets/images/icon-player.png); -webkit-transform:scale(0.3);}\r\n/*.tgp-slider.gallery .focusthumb-wp .slide-btn-pre,.tgp-slider.gallery  .focusthumb-wp .slide-btn-next{display: block;}*/\r\n\r\n\r\n\r\n";
    insertStyleSheets(cssString);

    /**
     * 构造器
     * @param wrapper {HTMLElement} 指定的容器
     * @param options {Object}
     * @constructor
     */
    function Slider(wrapper, options) {
        //参数
        var _defaults = {

            //主区域UI风格相关
            contentStyle: {
                effect: 'translation', //默认为左右平移的效果
                background: 'cover', //默认背景图是填充。
                //cardWidth : 718, //某些情形下拉伸时需要固定卡片的宽度。
                showPrevAndNext: true //是否展示前后导航的按钮（如果条件满足）
            },

            //导航栏（如缩略图）UI风格相关
            navStyle: {
                //tab切换的风格，默认thumb缩略图模式。可选'none'/'thumb'/'title'/'disc'
                type: 'disc',
                //导航栏是否需要左右箭头
                showPrevAndNext: false
            },

            //鼠标hover到item上是否暂停自动播放
            pauseWhenHoverItem: true,

            //鼠标hover到导航选项时，是否slide到对应item
            slideWhenHoverItem: false,

            //轮播执行的相关参数
            autoRun: true, //是否自动播放
            startAt: 0, //初始化展示第几个item，默认第一个
            duration: 500, //轮播过程持续时间
            delay: 3000, //轮播结束后到下次开始的延迟时间
            easing: 'ease-out', //翻页切换的timing-function，默认'ease-in',建议不赋值。同css transition-timing-function.，支持自定义cubic-bezier.

            //自定义的className. 附加在wrapper上。
            ownClass: '',

            //发生滑动之前的回调
            beforeSlide: function beforeSlide(item, index) {},

            //滑动过程中(动画执行过程)TODO:暂未实现
            onSliding: function onSliding(item, index) {},

            //一个item划过来后，响应的回调
            afterSlide: function afterSlide(item, index) {},

            //每个item的公共点击行为，如数据上报等。
            onItemClick: function onItemClick(e, item, index, li) {},

            //导航栏元素（取决于navStyle的type形态）的click事件
            onNavItemClick: function onNavItemClick(e, item, index) {},

            //导航左右箭头允许自定义. direct: -1(左箭头)， 1(右箭头)
            onNavButtonClick: function onNavButtonClick(e, direct) {},

            //轮播项 {Array}.
            items: []
        };

        //基本参数检查
        if (!(wrapper instanceof HTMLElement) || !options.items) {
            throw new Error("基本参数校验失败，请检查参数。", options);
        }

        //补齐默认参数
        for (var i in _defaults) {
            if (!(i in options)) {
                options[i] = _defaults[i];
            }
        }

        // contentStyle的默认值
        var contSty = options.contentStyle;
        // 默认展示主区域的左右箭头按钮
        !("showPrevAndNext" in contSty) && (contSty.showPrevAndNext = true);
        // 默认是平移的类型
        !("effect" in contSty) && (contSty.effect = "translation");
        //对历史版本的支持：
        if (contSty.effect === "three-cards" || contSty.effect === "five-cards") {
            contSty.effect = "slider-3d";
        }
        // 背景图片默认是cover类型的
        !("background" in contSty) && (contSty.background = "cover");

        // navStyle的默认值
        var navSty = options.navStyle;
        // 默认不展示导航区域的左右箭头按钮
        !("showPrevAndNext" in navSty) && (navSty.showPrevAndNext = false);
        // 默认导航栏是小圆点
        !("type" in navSty) && (navSty.type = "disc");

        //如果导航栏是gallery模式，强制将导航栏的左右箭头显示出来
        if (navSty.type === "gallery") {
            navSty.showPrevAndNext = true;
        }

        this.options = options;

        this.wrapper = wrapper;

        //当前实例的唯一ID
        this.id = 'TGP_slider_' + Slider.instances.length;

        //定义slider的当前状态（仅内部可写）
        this._status = "stopped";

        //当前的索引序号（仅内部可写）
        this.__current_index = options.startAt;

        //全局计时器（仅内部可写）, serTimeout的每一次重置都会变更。私有属性，不适宜抛出去
        this.__auto_play_timer = 0;

        var cardWidth = options.contentStyle.cardWidth;
        // const wrapperWidth = wrapper.offsetWidth;

        //需要设置宽度
        var css = '#' + this.id + '.tgp-slider li{transition:' + this.transition_string + ';}';
        cardWidth > 0 && (css += '\n            #' + this.id + '.tgp-slider li{width: ' + cardWidth + 'px;margin-left:-' + cardWidth / 2 + 'px;left:50%;}\n            #' + this.id + '.tgp-slider .tgp-figure{width: ' + cardWidth + 'px;}\n        ');
        //#${this.id}.tgp-slider .focusthumb{width: ${cardWidth}px;max-width:${wrapperWidth}px;margin-left:-${cardWidth/2}px;left:50%;}
        insertStyleSheets(css);

        // 根据参数生成基本的html骨架结构
        _make_skeleton(this);

        // html结构初始化后计算几个关键dom节点， wrapper可以是id或者dom
        var _wp = wrapper;

        this.elements = {
            viewport: $('[tag="viewport"]', _wp),
            prevBtn: $('[tag="prev"]', _wp),
            nextBtn: $('[tag="next"]', _wp),
            navigator: $('[tag="nav_area"]', _wp),
            navPrevBtn: $('[tag="nav_prev"]', _wp),
            navNextBtn: $('[tag="nav_next"]', _wp),
            navItems: $('[tag="nav_viewport"]', _wp)
        };

        //初始化事件、设置初始值。
        _init(this);

        //一切ready,如果需要自动播放就开始轮播
        if (options.autoRun) {
            this.run();
        }

        Slider.instances.push(this);
    }

    Slider.prototype = {
        /**
         * 还原构造器
         */
        constructor: Slider,

        /**
         * 当前slider实例的唯一标记
         */
        id: '--',

        /**
         * 相关element元素抛出来
         */
        wrapper: null,

        elements: {
            viewport: null, // 主区域items
            prevBtn: null, //主区域左右箭头按钮
            nextBtn: null,
            navigator: null, //导航区
            navPrevBtn: null, //导航左右箭头
            navNextBtn: null,
            navItems: null //导航区items的容器
        },

        /**
         * 是否是单帧多图模式
         */
        get mutliple() {
            return this.options.items.some(function (item) {
                return item instanceof Array;
            });
        },

        /**
         * slider的当前状态。外部可访问，仅内部可写
         */
        _status: "stopped",
        get status() {
            return this._status;
        },

        /**
         * slider的transition属性值。只读
         */
        get transition_string() {
            //TODO:这里认为透明变化和位移变化是互斥的，不会同时存在。
            var effect = this.options.contentStyle.effect,
                prop = effect === "fade" ? "opacity" : "transform";
            return prop + ' ' + this.options.duration + 'ms ' + this.options.easing;
        },

        ///**
        // * 全局计时器,serTimeout的每一次重置都会变更。仅内部可读写
        // */
        //__auto_play_timer : 0,

        /**
         * 轮播数据源的总长度。
         */
        get itemsSize() {
            return this.options.items.length;
        },

        /**
         * 当前主位置显示的item的索引号（在items里面的排序序号， [0, N-1]）
         */
        __current_index: 0,
        get currentIndex() {
            return this.__current_index;
        },

        /**
         * 当前主位置显示的item。
         */
        get currentItem() {
            return this.options.items[this.__current_index];
        },

        /**
         * 当前主位置显示的html元素（<li>）
         */
        get currentLiElement() {
            var vp = this.elements.viewport,
                index = this.currentIndex,
                a = $('a[data-index="' + index + '"]', vp);
            return a && a.parentElement; // return <li>.
        },

        /**
         * 设置其中一个li的数据
         * 支持两种调用方式：setItemData(liA, 2);setItemData([liA, 2], [liB, 3], [liC, 5],...);
         * @param liEle
         * @param itemIndex
         * @returns {Slider}
         */
        setItemData: function setItemData(liEle, itemIndex) {
            var slider = this;
            //多项合并模式调用
            if (Array.isArray(arguments[0])) {
                [].forEach.call(arguments, function (argItem) {
                    var _slider$setItemData;

                    Array.isArray(argItem) && (_slider$setItemData = slider.setItemData).call.apply(_slider$setItemData, [slider].concat(_toConsumableArray(argItem)));
                });
                return this;
            }
            //防止越界
            itemIndex = (itemIndex + this.itemsSize) % this.itemsSize;
            var item = slider.options.items[itemIndex];

            if (slider.mutliple) {
                liEle.innerHTML = item.map(function (itemX) {
                    return '\n                        <a href="#" class="tgp-figure" style="background-image: url(' + itemX.image + ');">\n                            <span class="tgp-figure-title">' + itemX.title + '</span>\n                        </a>\n                    ';
                }).join("");
            } else {
                //格式是图片/视频/自定义html
                liEle.innerHTML = '<a class="tgp-figure" href="#"></a>';
                var aLink = liEle.firstElementChild;
                switch (true) {
                    //video的优先级比image更高。
                    case 'video' in item:
                        setVideo(aLink, item);
                        break;
                    case 'image' in item:
                        setImage(aLink, item);
                        break;
                    // TODO:暂不支持自定义HTML
                    //case 'html' in item:
                    //    liEle.innerHTML = item.html;
                    //    break;
                    default:
                        break;
                }
                aLink.dataset["index"] = itemIndex;
            }

            return this;

            function setVideo(aLink, item) {
                aLink.style.backgroundImage = 'none';
                aLink.className = "tgp-figure video";
                aLink.innerHTML = '\n                        <video width="100%" height="100%">\n                            <source src="' + item.video + '" type="video/mp4">\n                        </video>';
                var videoEle = aLink.firstElementChild;
                item.poster && videoEle.setAttribute('poster', item.poster);
                videoEle.onplay = function () {
                    aLink.classList.remove('video');
                };
                videoEle.onpause = function () {
                    aLink.classList.add('video');
                };
            }

            function setImage(aLink, item) {
                aLink.style.backgroundImage = 'url(' + item.image + ')';
                aLink.className = "tgp-figure";
                aLink.innerHTML = '';
            }
        },

        /**
         * 设置隐藏的两个边界li的数据，由于已经有currentIndex和li.className来记录当前态，
         * 因此两个侧边的li元素和对应数据都是确定的，不需要传参.
         * @returns {Slider}
         */
        resetHiddenData: function resetHiddenData() {
            var vp = this.elements.viewport,
                leftHiddenLi = $('.left-hider', vp),
                rightHiddenLi = $('.right-hider', vp);
            return this.setItemData([leftHiddenLi, this.currentIndex - 2], [rightHiddenLi, this.currentIndex + 2]);
        },

        /**
         * 开始（继续）执行轮播动作
         * @param {Number} index 从第几帧开始播放，默认从之前停止的索引位置继续
         * @returns {Slider}
         */
        run: function run() {
            //console.log("running");
            var slider = this;
            this._status = 'playing';
            //如果是自动播放的视频，则等播放结束自动跳到下一帧；否则（图片或者非自动播放的视频）按照delay的时长跳到下一帧。
            var item = slider.currentItem;
            if (item.video && item.autoPlay) {
                var videoEle = $("video", slider.currentLiElement);
                console.log(videoEle);
                videoEle.onended = function () {
                    slider.slideToNext().run();
                };
            } else {
                this.__auto_play_timer = window.setTimeout(function () {
                    slider.slideToNext().run();
                }, this.options.delay);
            }
            return this;
        },

        /**
         * 停止（暂停）轮播动作
         * @param reset {Boolean} 是否重置到初始位置
         * @returns {Slider}
         */
        stop: function stop(reset) {
            window.clearTimeout(this.__auto_play_timer);
            this._status = 'stopped';
            if (reset) {
                //TODO: 重置操作
            }
            return this;
        },

        /**
         * 跳转到指定的索引序号(sourceItem#size范围内)
         * @param {Number} index 目标位置，注意，index的值有可能越界，超出itemsSize。动画执行的方向取决于index - currIndex是否>0。
         * @returns {Slider}
         */
        slideTo: function slideTo(index) {
            //console.log("slideTo:", index, this.currentIndex);
            typeof index !== "number" && (index = 0);
            var slider = this;

            if (index === this.currentIndex) {
                return this;
            } else {
                var _before = slider.options.beforeSlide,
                    _index = slider.currentIndex,
                    _ele = slider.currentLiElement,
                    item = slider.options.items[_index];
                if (typeof _before === "function") {
                    _before.call(slider, item, _index, _ele);
                }
                _move(index - this.currentIndex);
            }

            // 开始执行动画，delta的正负决定方向，大小决定次数。
            // 大于一定向右运动，小于一定向左，由于调用处的约束关系，delta已经不为0
            function _move(delta) {
                //如果目标页码比当前值大，那么前进index - this.currentIndex页，否则后退
                var leftHider = getLi('left-hider'),
                    lefter = getLi('lefter'),
                    current = getLi('current'),
                    righter = getLi('righter'),
                    rightHider = getLi('right-hider');

                //console.log("times", times);
                if (delta > 0) {
                    //正向（从左往右滑动）
                    //更新私有变量，slider.currentIndex为只读属性
                    slider.__current_index = (slider.currentIndex + 1 + slider.itemsSize) % slider.itemsSize;

                    deliver(leftHider, 'right-hider');
                    resetClassName([[lefter, 'left-hider'], [current, 'lefter'], [righter, 'current'], [rightHider, 'righter']]);

                    //如果中间有多步过渡，嵌套调用函数体；否则就表示当前就到了目标位置，那么判断是否需要执行afterSlide的回调
                    if (delta - 1 > 0) {
                        window.setTimeout(_move.bind(null, delta - 1), 100);
                    } else {
                        (function () {
                            var _after = slider.options.afterSlide,
                                _index = slider.currentIndex,
                                _ele = slider.currentLiElement;
                            if (_after) {
                                bindEvent(righter, 'transitionend', function _end() {
                                    var item = slider.options.items[_index];
                                    _after.call(slider, item, _index, _ele);
                                    righter.removeEventListener('transitionend', _end);
                                });
                            }
                        })();
                    }
                } else if (delta < 0) {
                    //反向（从右往左滑动）
                    //更新私有变量，slider.currentIndex为只读属性
                    slider.__current_index = (slider.currentIndex - 1 + slider.itemsSize) % slider.itemsSize;

                    resetClassName([[leftHider, 'lefter'], [lefter, 'current'], [current, 'righter'], [righter, 'right-hider']]);
                    deliver(rightHider, 'left-hider');

                    //如果中间有多步过渡，嵌套调用函数体；否则就表示当前就到了目标位置，那么判断是否需要执行afterSlide的回调
                    if (delta + 1 < 0) {
                        window.setTimeout(_move.bind(null, delta + 1), 100);
                    } else {
                        (function () {
                            var _after = slider.options.afterSlide,
                                _index = slider.currentIndex,
                                _ele = slider.currentLiElement;
                            if (_after) {
                                bindEvent(lefter, 'transitionend', function _end() {
                                    var item = slider.options.items[_index];
                                    _after.call(slider, item, _index, _ele);
                                    lefter.removeEventListener('transitionend', _end);
                                });
                            }
                        })();
                    }
                }

                // 更新两侧两个隐藏<li>的数据
                slider.resetHiddenData();

                // 更新导航栏的当前态UI
                // TODO:Array.from 在qbblink上还不支持. chrome45以上才支持。
                // see:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
                // let linkElements = Array.from($all("a", slider.elements.navItems));
                var linkElements = [].slice.call($all("a", slider.elements.navItems), 0);
                linkElements.forEach(function (linker) {
                    linker.className = "";
                    if (linker.dataset['index'] + "" === slider.currentIndex + "") {
                        linker.className = "cur";
                    }
                });
            }

            //按照classname获取li
            function getLi(className) {
                var vp = slider.elements.viewport;
                return $('li.' + className, vp);
            }

            //将某个li无动画过渡直接变换到另一个状态
            function deliver(ele, targetClassName) {
                var eleStyle = ele.style;
                eleStyle['transition'] = 'none';
                eleStyle['visibility'] = 'hidden';
                ele.className = targetClassName;

                setTimeout(function () {
                    eleStyle['transition'] = slider.transition_string;
                    eleStyle['visibility'] = 'visible';
                }, 0);
            }

            //清除掉指定element的className，再赋值。
            function resetClassName(list) {
                list.forEach(function (setting) {
                    setting[0].className = setting[1];
                });
            }
            return this;
        },

        /**
         * 后退一个单位
         * @returns {Slider}
         */
        slideToPrev: function slideToPrev() {
            return this.slideTo(this.currentIndex - 1);
        },

        /**
         * 前进一个单位
         * @returns {Slider}
         */
        slideToNext: function slideToNext() {
            return this.slideTo(this.currentIndex + 1);
        }
    };

    //实例集合
    Slider.instances = [];

    //------------------------------------------------------------------------------------------------

    /**
     * 根据参数生成基本的html骨架结构
     * @private
     */
    function _make_skeleton(slider) {
        var options = slider.options,
            contSty = options.contentStyle,
            navSty = options.navStyle;

        var sliderClass = ['tgp-slider', contSty.effect, contSty.background];
        slider.mutliple && sliderClass.push("mutliple");
        options.ownClass && sliderClass.push(options.ownClass);

        sliderClass = sliderClass.join(" ");
        // console.log(slider.id, sliderClass);
        var navClassName = {
            "thumb": "focusthumb", //缩略图，默认
            "disc": "focusthumb thumb-dot", //小圆点
            "title": "focusthumb thumb-txt", //标题文字
            "gallery": "focusthumb gallery" //整组切换。此模式下，navStyle.showPrevAndNext强制设为true。
        }[navSty.type];

        slider.wrapper.innerHTML = '\n            <div id="' + slider.id + '" class="' + sliderClass + '">\n                <div tag="prev" class="slide-btn-pre" style="display: none;" href="#"></div>\n                <div tag="next" class="slide-btn-next" style="display: none;" href="#"></div>\n                <ul tag="viewport" class="slider-viewport">\n                    <li class="left-hider"><a class="tgp-figure" href="#"></a></li>\n                    <li class="lefter"><a class="tgp-figure" href="#"></a></li>\n                    <li class="current"><a class="tgp-figure" href="#"></a></li>\n                    <li class="righter"><a class="tgp-figure" href="#"></a></li>\n                    <li class="right-hider"><a class="tgp-figure" href="#"></a></li>\n                </ul>\n                <div tag="nav_area" class="focusthumb-wp" style="display: none;">\n                    <div tag="nav_prev" class="slide-btn-pre" style="display: none;" href="#"></div>\n                    <div tag="nav_next" class="slide-btn-next" style="display: none;" href="#"></div>\n                    <div tag="nav_viewport" class="' + navClassName + '" >\n                        ' + generateThumbs(options) + '\n                    </div>\n                </div>\n            </div>';

        //生成缩略图（如果需要）
        function generateThumbs(options) {
            return options.items.map(function (item, index) {
                //缩略图
                var thumbHtml = '',
                    thumb = item.thumb || item.image || item.poster;
                if (thumb) {
                    thumbHtml = '<img src="' + thumb + '" />';
                }
                return '\n                    <a href="#" hidefocus data-index="' + index + '">\n                        ' + thumbHtml + '    \n                        <span>' + (item.title || "") + '</span>\n                    </a>';
            }).join('');
        }
    }

    /**
     * //初始化（绑定向前向后的点击事件、点击导航栏缩略图跳转、定时轮播等）
     * @private
     */
    function _init(slider) {
        var options = slider.options,
            elements = slider.elements;

        //设置初始数据(包含两个隐藏li)
        var currLi = $('.current', elements.viewport),
            ul = currLi.parentElement,
            currIndex = slider.currentIndex;

        slider.setItemData([currLi, currIndex], [$("li.lefter", ul), currIndex - 1], [$("li.righter", ul), currIndex + 1], [$("li.left-hider", ul), currIndex - 2], [$("li.right-hider", ul), currIndex + 2]);

        //设置导航当的当前态
        var navItems = slider.elements.navItems;
        $('a[data-index="' + currIndex + '"]', navItems).classList.add('cur');

        //需要展示前进后退箭头按钮，则展示出来，并绑定事件
        if (options.contentStyle.showPrevAndNext) {
            (function () {
                var prev = elements.prevBtn,
                    next = elements.nextBtn,
                    delayThreshold = 300;
                prev.style.display = '';
                bindEvent(prev, 'click', function () {
                    slider.stop();
                    if (!this.timer) {
                        this.timer = 0;
                    }
                    if (Date.now() - this.timer > delayThreshold) {
                        slider.slideToPrev();
                        this.timer = Date.now();
                    }
                    return false;
                });

                next.style.display = '';
                bindEvent(next, 'click', function () {
                    slider.stop();
                    if (!this.timer) {
                        this.timer = 0;
                    }
                    if (Date.now() - this.timer > delayThreshold) {
                        slider.slideToNext();
                        this.timer = Date.now();
                    }
                    return false;
                });
            })();
        }

        //hover到item上时暂停轮播
        if (options.pauseWhenHoverItem) {
            (function () {
                //需要一个单独的是否是由于hover导致的暂停的标记位。
                var _in_viewport = false;
                bindEvent(elements.viewport, 'mouseenter', function () {
                    //如果当前正在播放中，那么停止播放，并将状态值改为暂停；如果是非播放状态，则不管。
                    if (slider.status === "playing") {
                        slider.stop();
                        _in_viewport = true;
                    }
                    return false;
                });
                bindEvent(elements.viewport, 'mouseleave', function () {
                    //如果当前正在暂停中，那么立即恢复播放。
                    if (_in_viewport && slider.status === "stopped") {
                        slider.run();
                        _in_viewport = false;
                    }
                    return false;
                });
            })();
        }

        //每个item的点击行为处理
        var itemElements = $all('li', slider.elements.viewport);
        bindEvent(itemElements, 'click', 'a', function (e) {
            var a = this,

            //判断是否需要阻止冒泡、阻止默认行为
            returnValue = false,
                li = a.closest('li'),
                index = a.dataset['index'] * 1,
                item = slider.options.items[index];

            //如果点击的是当前item，执行相应事件（如果已设置）；如果不是当前元素则slide到对应item。
            if (index === slider.currentIndex) {
                //如果有单独的事件，先执行。
                item && item.onClick && item.onClick.call(slider, e, item, li, index);
                //综合事件
                options.onItemClick && options.onItemClick.call(slider, e, item, index, li);

                returnValue = false;
            } else {
                //如果点击到的目标item不处在当前态，那么激活该item
                //TODO:这里暂时没想到好的办法，先用class hack一下。直接用slideTo(index)体验上有问题。
                //slider.slideTo(index);
                var clsList = li.classList;
                if (clsList.contains('righter')) {
                    slider.slideToNext();
                } else if (clsList.contains('lefter')) {
                    slider.slideToPrev();
                }
                returnValue = false;
            }

            // 如果设定为false,那么阻止默认行为和事件传递。
            if (!returnValue) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        //如果需要导航栏，那么点击导航栏栏目，默认slide到对应item
        var navStyle = options.navStyle,
            navEle = elements.navigator;

        if (navStyle.type !== 'none') {

            // 点击导航栏选项，slide到对应的item主界面，（可选单击事件）
            elements.navigator.style.display = '';
            bindEvent(elements.navItems, 'click', 'a', function (e) {
                var index = this.dataset["index"] * 1,
                    navClickFn = options.onNavItemClick;
                // 如果定义了缩略图的点击事件，那么判断返回值是否显示的等于'false'，如果是那么阻止slide to target index page.
                if (typeof navClickFn === "function") {
                    var navItemClickReturnValue = navClickFn.call(null, e, options.items[index], index);
                    if (navItemClickReturnValue !== false) {
                        slider.stop().slideTo(index);
                    }
                } else {
                    slider.stop().slideTo(index);
                }
                return false;
            });

            //【配置项】支持鼠标移到navigator上就立即slide到对应item上
            if (options.slideWhenHoverItem) {
                (function () {
                    var items = $all('a', elements.navItems),
                        _pre_status = '';
                    bindEvent(items, 'mouseenter', function () {
                        _pre_status = slider.status;
                        var index = this.dataset["index"] * 1;
                        slider.stop().slideTo(index);
                        return false;
                    });
                    bindEvent(items, 'mouseleave', function () {
                        //如果之前是播放状态，那么还原。
                        if (_pre_status === "playing") {
                            slider.run();
                        }
                        return false;
                    });
                })();
            }

            //【配置项】导航栏区的左右箭头导航
            if (navStyle.showPrevAndNext) {
                (function () {
                    var _prev = elements.navPrevBtn,
                        _next = elements.navNextBtn;
                    _prev.style.display = '';
                    _next.style.display = '';

                    //如果是自定义的导航区左右箭头事件，那么配置自定义事件
                    var isCustomizeClickFunction = typeof options.onNavButtonClick === "function";
                    bindEvent(_prev, 'click', function (e) {
                        if (isCustomizeClickFunction) {
                            options.onNavButtonClick.call(slider, e, -1);
                        } else {
                            slider.slideToPrev();
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    });
                    bindEvent(_next, 'click', function (e) {
                        if (isCustomizeClickFunction) {
                            options.onNavButtonClick.call(slider, e, -1);
                        } else {
                            slider.slideToNext();
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    });
                })();
            }
        }

        //响应一下afterSlide事件，如果有的话。
        options.afterSlide && options.afterSlide.call(slider, options.items[currIndex], currIndex, currLi);
    }

    /**
     * 动态插入CSS工具方法
     * @param stylesheetCSString {String} <style>元素的内容
     */
    function insertStyleSheets(cssString) {
        var prefix = '/**************** insert by slider *****************/';
        cssString = prefix + '\r\n' + cssString;
        var styleEle = $("#___slider_style");
        if (styleEle) {
            styleEle.appendChild(document.createTextNode(cssString));
        } else {
            styleEle = document.createElement('style');
            styleEle.type = "text/css";
            styleEle.media = 'screen';
            styleEle.id = "___slider_style";
            styleEle.appendChild(document.createTextNode(cssString));
            $('head').appendChild(styleEle);
        }
    }

    /**
     * 查找单个元素（可以限定在某个容器下）， 作为jQuery $的替换方法。
     * @param queryString
     * @param scope
     * @returns {Element}
     */
    function $(queryString, scope) {
        !(scope instanceof HTMLElement) && (scope = document);
        return scope.querySelector(queryString);
    }

    /**
     * 查找多个元素（可以限定在某个容器下）
     * @param queryString
     * @param scope
     * @returns {NodeList}
     */
    function $all(queryString, scope) {
        !(scope instanceof HTMLElement) && (scope = document);
        return scope.querySelectorAll(queryString);
    }

    /**
     * 自定义的一个绑定事件的方法
     * @param {NodeList|Element} ele 要绑定事件的元素
     * @param {String} eName 事件名
     * @param {String} [agent] 代理dom的queryString， 可选.
     * @param {Function} fn 回调函数
     */
    function bindEvent(ele, eName, agent, fn) {
        var _arguments = arguments;

        if (ele instanceof NodeList || ele instanceof HTMLCollection) {
            var _ret7 = function () {
                //const args = Array.from(arguments);
                var args = [].slice.call(_arguments, 0);
                [].forEach.call(ele, function (el) {
                    args[0] = el;
                    bindEvent.apply(null, args);
                });
                return {
                    v: true
                };
            }();

            if ((typeof _ret7 === 'undefined' ? 'undefined' : _typeof(_ret7)) === "object") return _ret7.v;
        }
        //省略了agent参数的模式
        if (arguments.length === 3 && typeof agent === "function") {
            return bindEvent(ele, eName, null, agent);
        }
        ele.addEventListener(eName, function (e) {
            // console.log(ele, eName, agent, fn)
            // 针对是否使用了代理分别处理
            if (agent) {
                var target = e.target;
                while (ele.contains(target)) {
                    if (target.matches(agent)) {
                        var retturnValue = fn.call(target, e);
                        //只hack返回值绝对等于'false'。
                        if (retturnValue === false) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        return true;
                    } else {
                        target = target.parentElement;
                    }
                }
                //走到这里表示代理的元素没有找到，绑定失败。
                return false;
            } else {
                var _retturnValue = fn.call(this, e);
                //只hack返回值绝对等于'false'。
                if (_retturnValue === false) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                return true;
            }
        });
    }

    //------------------------------------------------------------------------------------------------
    //CommonJS mode:
    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
        module.exports = Slider;
    } else if (typeof define === "function" && (define.amd || define.cmd)) {
        // AMD(RequireJS) and CMD(SeaJS) mode:
        define(function (require, exports, module) {
            return Slider;
        });
    } else {
        //normal script file load mode: <script src="***">
        window.StaticSlider = Slider;
    }
}(window, undefined);

// ES6 Module mode.
// export { Slider as StaticSlider };