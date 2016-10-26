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


//上传图片

'use strict';

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		// input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		// input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));


(function list(){

	$('.list_name').on("click",function(){
	$(this).parent().find('dl').stop().slideToggle(200);
});

	$('.left_color').on("click",function(){
	$(this).addClass('bk_color').siblings('.left_color').removeClass('bk_color');
$('.triangle_list dd').removeClass('bk_color')

});

$('.triangle_list dd').on("click",function(){
	$('.triangle_list dd').removeClass('bk_color')

		$(this).addClass('bk_color').siblings().removeClass('bk_color');

		$('.left_color').removeClass('bk_color');
})
})();




//全选

(function checkall(){
           $("#cbtest5").click(function() {
                $('.checkone').attr("checked",this.checked); 
            });
            var $subBox = $(".checkone");
            $subBox.click(function(){
                $("#cbtest5").attr("checked",$subBox.length == $(".checkone:checked").length ? true : false);
            });

})()
