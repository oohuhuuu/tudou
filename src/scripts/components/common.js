var $=require('jquery');
$(".nav ul .nav-list a").css({'font-family':'微软雅黑'})
$(".nav ul .nav-list").hover(function(){			//导航 下拉菜单
    $(this).children("dl").stop().slideDown(200);
    $(this).addClass('list_color').siblings().removeClass('list_color');
}, function(){
    $(this).children("dl").stop().slideUp(100)
        $(this).removeClass('list_color');

});


$(".nav .user ").hover(function(){			//导航 下拉菜单
    $(this).children("ul").stop().slideDown(200);
}, function(){
    $(this).children("ul").stop().slideUp(100)

});
