require("../../styles/lib/reset.css");
require("../../styles/common/common.css");
require("../../styles/common/personCenterCommon.css");
require("../components/common.js");
require("../../styles/common/global.css");
require("../../styles/page/my.css");

require("../../styles/common/pikaday.css");

require("../../styles/common/myvalidate.css");
require("../components/validator.min.js");
require("../components/myvalidate.js");
var $=require('jquery');

(function date(){
	    var picker2 = new Pikaday(
    {
        field: document.getElementById('dline'),
        firstDay: 1,
        minDate: new Date('2010-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });




})();


