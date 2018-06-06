//兼容火狐、IE8   
//显示遮罩层    
function showMask() {
    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
}
//隐藏遮罩层  
function hideMask() {
    $("#mask").hide();
    $(".login").hide();
    $(".register").hide();
}
// 显示登录
$(".dl-padding").click(function () {
    $(".login").show();
    showMask();
})
// 显示注册
$(".zc-padding").click(function () {
    $(".register").show();
    showMask();
})
// 找回密码显示登录界面
$(".now_login").click(function () {
    $(".login").show();
    showMask();
})


// 获取验证码
var countdown = 60;

function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value = "免费获取验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value = "重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function () {
        settime(obj)
    }, 1000)
}