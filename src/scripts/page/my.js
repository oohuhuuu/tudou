require("../../styles/lib/reset.css");
require("../../styles/common/common.css");
require("../../styles/common/page.css");
require("../../styles/page/my.css");

require("../components/common.js");

var $=require('jquery');
$(window).on("load",function(){

		$('.my_home').get(0).click()

});



$("#myFrameId1").on("load",function(){


var mainheight = $(this).contents().find("body").height()+30;

$(this).height(mainheight);

}); 