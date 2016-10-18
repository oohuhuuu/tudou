require("../../styles/lib/reset.css");
require("../../styles/common/common.css");
require("../../styles/page/my.css");
require("../../styles/common/page.css");
require("../components/common.js");

var $=require('jquery');
$(window).on("load",function(){

		$('.my_home').get(0).click()

});


$('.list_name').on("click",function(){
	$(this).parent().find('dl').stop().slideToggle(200);
});


$('.left_color').on("click",function(){
	$(this).addClass('bk_color').siblings('.left_color').removeClass('bk_color');
$('.triangle_list dd').removeClass('bk_color')


});

$('.triangle_list dd').on("click",function(){
		$(this).addClass('bk_color').siblings().removeClass('bk_color');

$('.left_color').removeClass('bk_color');
})