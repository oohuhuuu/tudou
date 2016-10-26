
(function ($) { 
    $.fn.pageing = function(options ,fn){ 
        // 注入的html结构
        var html = '<ul class="page-main" id="pageMain"><li class="block" ><a href="###" class="first" >首页</a></li><li class="block" style="display:none"><a href="###" class="prev unable-page"><i class="prev-i"></i></a></li><li class="block s" style="border:none">...</li><li class="block last"><a href="###" class="allPage"></a></li><li class="block "><a href="###" class="next"><i class="next-i"></i></a></li></ul>';

        // 初始化
        $(this).html('').append(html);
        var oThis = $(this).find('ul'),//容器
            nowPage = $('#pageBox .now-page') || options.nowPage,//目前多少页元素(显示)
            indexTarget = $('#pageBox .index-target') || options.indexTarget,//目前多少页元素（输入框）
            target =$('#pageBox .target') || options.target,//跳转元素
            prev = options.prev || $('#pageBox .prev'),//上一页元素
            next = options.next || $('#pageBox .next'),//下一页元素
            last = next.parent(),
            allNum = options.allNum,//总数据条数
            pageNum =  options.pageNum,//总页数
            index = options.index || 0;
            eachPage = options.eachPage || 10,//每页显示多少条记录
            max  =  options.max || 5,//最多显示多少页数
            min = 0,
            pages = null,
            fn = fn || function() {};//ajax按需获取数据
        nowPage.text(index);
        $('#pageBox .allNum').text(allNum);
        $('#pageBox .allPage').text(pageNum);
        if( pageNum === 1 ) {
            next.addClass('unable-page');
        }
        $('#pageBox .page').remove();	//?









													        for(var i = 1;i<= pageNum ; i++) {
													            var $li = $('<li class="page"></li>');
													            var $a = $("<a href='###'></a>");
													            if( i === index ) {
													                $a.addClass('active');
													            }
													            $a.text( i );
													            $li.append($a);
													            $('.s').before($li);
													        }




        pages = $('.page');
        pages.hide();
        show(index-1);		//?
        showPageindex(0,max, index);
        // 点击事件
        oThis.find('a').on('click' , function() {


            if( $(this).hasClass('unable-page') ) {
                return;
            } else if($(this).hasClass('prev') ) {
                index --;
            } else if( $(this).hasClass('next') ) {
                index ++;
            }else if($(this).hasClass('first')){
            	index=1;
            }else if($(this).hasClass('allPage')){
                index=pageNum;
            }
             else {
                index = $(this).parent().index() - 1;
            }
                        oThis.find('a').removeClass('unable-page');

            show(index-1);
            showPageindex(min , max, index);
            fn(index);
        });





        // 样式控制
        function show(index){
           
            if(index === 0) {
                prev.addClass('unable-page');
            } else if(index === pageNum - 1) {
                next.addClass('unable-page');
            }
            oThis.find('a').removeClass('active');
            pages.eq(index).children('a').addClass('active');
            nowPage.text(index+1);
        }
        //控制哪些页码显示
        function showPageindex(min , max , index){
        if(pageNum>5){
                $('.s').show();
                $('.allPage').parent().show();
        }else{
                            $('.s').hide();
                $('.allPage').parent().hide();
        }
            if( index <= max/2) {
                
                min = 0;
                max = max;

            } else if(pageNum - index <= Math.ceil(max/2) ){
                        
                min = pageNum - max;
                max = pageNum;
                                 $('.s').hide();
                $('.allPage').parent().hide();
            } else {
                               

                min = Math.round(index - max/2)-1;
                max = Math.round(index + max/2)-1;

            }
            pages.hide();

            for(var i = min; i< max ; i++) {
                pages.eq(i).show();
            }
        }
    }; 
})(jQuery);





var options2 = {
    index :1,
    pageNum : 10,//一共多少页
    max : 5,
    min:0
  
};
$('#pageBox2').pageing(options2);