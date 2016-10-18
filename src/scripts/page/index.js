//引入css
require("../../styles/lib/reset.css");
require("../../styles/common/common.css");
require("../../styles/page/index.css");
require("../components/common.js");

var $=require('jquery');



function fadeCuoser(){

	$('#banner_list .pic:not(:first-child)').hide();
	$('.banner-btn li').each(function(index,val){
		$(this).mouseover(function(){
			$('#banner_list .pic').eq(index).fadeIn('slow').siblings().fadeOut('slow'); 
			$(this).addClass('on').siblings().removeClass('on');			//添加按钮样式
		});
	});
	function next(){

		var len=$('#banner_list .pic').length;
		var n=0;
		return function(){
			$('.banner-btn li').eq(n).mouseover();
		n++;
		if (n==len) {
			n=0;
		};
	};
	};
	$('#banner_list').hover(function(){               
		clearInterval(t);
	},function(){
			t=setInterval(next(),5000);
	}).trigger("mouseleave");

	};


fadeCuoser();
