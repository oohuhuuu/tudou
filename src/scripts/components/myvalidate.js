
var F = Validator('myform',{
    errPar : 'span',
    together : true, //显示一条错误，还是同时显示多条错误，默认false(只显示一条)
    errShow : 'single', //错误显示样式，默认为alert，支持字符串(alert,single,multiple),自定义function(string || array())
    timely : true //开启实时验证,默认关闭
});


F.addRule([
        ["copname","required",'企业名不得为空'],
                ["copnum","required",'输入不得为空'],


    ["username","required",'姓名不能为空'],
    // ["username","regex=/^[A-Za-z]+$/",'只能是a-z'],
    // ["username","minlength=3",'姓名必须大于3个字符'],
    // ["username","maxlength=10",'姓名必须小于10个字符'],
    ["email","required",'邮箱必填'],
    ["email","email",'邮箱格式'],
    ["telephone","required",'电话必填'],
    ["telephone","telephone",'电话格式错误'],
    ["mobile","required",'请输入手机号码'],
    ["mobile","mobile",'手机号码有误'],
	["url","required",'url必填'],
	["url","url",'url格式错误'],
    ["than","greaterthan=5",'必须大于5'],
        ["idcard","required",'身份证号码不得为空'],

    ["than","lessthan=10",'必须小于10'],
    ["greaterPrev","greaterthan=than",'必须大于上面的值'],
    ["passwords","required",'当前密码不得为空'],
    ["file-1[]","required",'请选择图片'],

    ["password","required",'密码不得为空'],
    ["password_r","required",'请再次输入密码'],
    ["password_r","equal=password",'两次输入的密码不一致'],
    ["unequalNum","unequal=99",'不能等于99'],
    ["unequalPrev","unequal=unequalNum",'不能等于上面'],
    ["unequalArr","unequal='11|22|33'",'不能等于11,22,33'],
    ["unequalArrStr","unequal='aa|bb|cc'",'不能等于aa,bb,cc'],
    ["equalArr","equal='ab|ac|ad'",'只能填ab,ac,ad'],
    ["select","notselect=2",'不能选择第一项0'],
    ["checkNum","notselect=3",'不能选3'],
    ["checkNum","shouldselect=1",'必须选中第一个'],
    ["checkMore","shouldselect='1|3'",'必须选中1,3'],
    ["checkLen","notselect='1|2'",'不能选择1,2'],
    ["checkLen","minselect=2",'选中不能少于2项'],
	["checkLen","maxselect=4",'选中不能大于4项'],
    ["checkRadio","shouldselect",'请选择类型'],
        ["checkRadios","shouldselect",'请阅读用户协议'],

        ["read","required",'请阅读用户协议'],

    
    // ["checkRadio","notselect=3",'不能选中第三项'],
	["textarea","required",'内容不能为空'],
    ["msg_val","required",'请输入短信验证码'],
    // ["publish_type2","notselect=1",'请选择任务类型'],
    ["datepicker","required",'请选择截止日期'],
    // ["citySelect","required",'请选择城市'],
    ["user_info","required",'请输入雇主信息'],
    ["budget","required",'请输入预算金额'],
    ["trusteeship","required",'请输入托管资金'],
        ["user_info2","required",'请输入发布人信息'],


]);


/*F.removeRule([
	['username','required'],
	['email','required']
]);*/

    function initV(){
        var numBox = document.getElementsByName('shownum'), timeBox = document.getElementsByName('timely'), wrongBox = document.getElementsByName('wrongtype'), shownum, timely, wrongtype;
        for(var i = 0; i < numBox.length ; i += 1){
            if(numBox[i].checked == true){
                shownum = numBox[i].value;
            }
        }
        for(var j = 0; j < wrongBox.length ; j += 1){
            if(wrongBox[j].checked == true){
                wrongtype = wrongBox[j].value;
            }
        }
        for(var k = 0; k < timeBox.length ; k += 1){
            if(timeBox[k].checked == true){
                timely = timeBox[k].value;
            }
        }
		
		if(wrongtype == 'function'){
            wrongtype = function(data){
                var wrongList = document.getElementById('wrongList'), html = [];
                wrongList.innerHTML = '';
                for(var i =0; i < data.length ; i += 1){
                    html.push('<li>'+data[i].msg+'</li>');
                }
                wrongList.innerHTML = html.join('');
            }
        }

        shownum = shownum == 1 ? true : false;
        timely = timely == 1 ? true : false;

        F.init({
            errPar : 'span',
            together : shownum, //显示一条错误，还是同时显示多条错误，默认一条false
            errShow : wrongtype, //错误显示样式，默认为alert，支持字符串(alert,single,multiple),自定义function(string || array())
            timely : timely //开启实时验证
        });
    }