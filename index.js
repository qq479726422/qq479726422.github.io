/**
 * Created by zhaoyou on 2016/8/4.
 */
$(function(){
    //切换背景
    $('.lisBg>li').each(function(index, el) {
        el.onclick = function(){
            $('.first').css({
                background:'url(images/0'+(index+1)+'bg.jpg)',
                backgroundSize: 'cover'
            })
        }
        el.onmouseenter = function(){
            $(this).css({
                cursor: 'pointer',
                opacity:0.9,
                border:'3px solid #E21A8E'
            })
        }
        el.onmouseleave = function(){
            $(this).css({
                opacity: 0.4,
                border: 0
            })
        }
    });

    //滚屏功能
    $("#fullpage").fullpage({
        /*我可以在这里定义每一屏的颜色*/
        // slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        /*有一个事件，当滚轮滚动的时候触发。*/
        /*接受两个参数...
         *
         * index 是滚动当前的这一屏索引..
         * */

        afterLoad:function(afterlink,index){

            /*假设我滚动到某一屏，我就给这个一屏添加一个class 属性值
             * 然后我在样式里面可以定义这个class 对应的样式
             * 然后一滚动到这个位置，我就这一屏添加class，
             * 我假设在样式里面添加了样式，就可以来执行动画了.
             * */
            /*我把其它的current 给移除掉..*/
            // $(".section").removeClass("current");
            //	可以延迟给第一屏添加current
            // setTimeout(function(){
            //     $(".section").eq(index-1).addClass("current");
            // },100);

            //标记当前第几屏
            $('.page').eq(index-1).addClass('NowPage').siblings().removeClass('NowPage');
        },

        //实现楼层跳跃
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu'
    });

    //炫丽卡片
    $('.items').on('mouseover','li',function(){
        $(this).find('p').stop().animate({bottom:0},'slow');
        $(this).find('img').stop().animate({opacity: 0.9},'slow');
        $(this).find('.items-left').stop().animate({top:0},'slow');
        $(this).find('.items-right').stop().animate({bottom:0},'slow');
        $(this).find('.items-top').stop().animate({left:0},'slow');
        $(this).find('.items-bottom').stop().animate({right:0},'slow');
    })
    $('.items').on('mouseout','li',function(){
        $(this).find('p').stop().animate({bottom:'-35'},'slow');
        $(this).find('img').stop().animate({opacity:1},'slow');
        $(this).find('.items-left').stop().animate({top:'-200'},'slow');
        $(this).find('.items-right').stop().animate({bottom:'-200'},'slow');
        $(this).find('.items-top').stop().animate({left:'-380'},'slow');
        $(this).find('.items-bottom').stop().animate({right:'-380'},'slow');
    })
});