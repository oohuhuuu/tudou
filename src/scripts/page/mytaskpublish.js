require("../../styles/lib/reset.css");
require("../../styles/common/common.css");
require("../../styles/common/personCenterCommon.css");
require("../../styles/page/mytask.css");
require("../../styles/common/page.css");


var $=require('jquery');
var $=require('jquery');
$(window.parent.document).find("#myFrameId1").on("load",function(){ 

var main = $(window.parent.document).find("#myFrameId1");   
var thisheight = $(document).height()+30; 
main.height(thisheight);   
});  