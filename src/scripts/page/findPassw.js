require("../../styles/lib/reset.css");
require("../../styles/common/common.css");
require("../../styles/page/findPassw.css");
require("../components/common.js");
require("../../styles/common/myvalidate.css");
require("../components/validator.min.js");
require("../components/myvalidate.js");
var $=require('jquery');
var input=$(window).find('input');

    $('.reset').on("click",function(){
   $('.error_strings').hide()
})