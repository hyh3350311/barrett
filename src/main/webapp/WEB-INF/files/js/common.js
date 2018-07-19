/**
 * Created by HuangYunhui on 2018/5/30.
 */
var url = 'http://www.daanlook.com';
//登陆
(function () {
    isLogin()
})();
$(".login,.loginAgain").click(function () {
    $(".commomModal").modal("show")
    $(".zhuce").css("display", "none")
    $(".denglu").css("display", "block")
})

$(".signin,.regist").click(function () {
    $(".commomModal").modal("show")
    $(".zhuce").css("display", "block")
    $(".denglu").css("display", "none")
})
function isLogin() {
    var userName = sessionStorage.getItem("userName");
    if (userName) {
        var ele = '<span>欢迎登陆' + userName + '</span><span class="logOut">退出登录</span>'
        $(".userName").empty();
        $(".userName").append(ele)
    } else {
        var ele = '你还未登录，请先 <span class="login">登陆</span> | <span class="signin">注册</span>'
        $(".userName").empty();
        $(".userName").append(ele)
    }
}
$("#login").click(function () {
    login();
})
$(".head").on("click", '.logOut', function () {
    logOut();
})
//注册
$(".confirmRegist").click(function(){
    regist();
})
function regist() {
    var data={
        username:$("#uname").val(),
        password:$("#rpwd").val(),
        email:$("#email").val(),
        mobile:$("#phone").val(),
    }
    if($("#rpwd").val()!=$("#pwdAgain").val()){
        alert("两次密码不一致，重新输入");
        return
    }
    console.log(data)
    $.ajax({
        type: "post",
        url: url + '/userlogin/regist ',
        data:data,
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
           console.log(data)
            if (data.code == "200") {
                alert("注册成功")
                //sessionStorage.removeItem("userName");
                location.href = "index.html"

            } else {
                alert("服务错误")
            }
        }
    });
}
function logOut() {

    $.ajax({
        type: "post",

        url: url + '/userlogin/out ',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            var data = JSON.parse(data)
            if (data.code == "200") {
                alert("退出成功")
                sessionStorage.removeItem("userName");
                location.href = "index.html"

            } else {
                alert("服务错误")
            }
        }
    });
}
function login() {

    $.ajax({
        type: "post",
        url: url + '/userlogin/in ',
        data: {
            username: $("#userName").val(),
            password: $("#pwd").val(),
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        //async:true,
        complete: function (xhr, data) {
            console.log(xhr.getAllResponseHeaders())
        },
        success: function (data) {
            var data = JSON.parse(data)
            console.log(data)
            if (data.code == "200") {
                sessionStorage.setItem("userName", $("#userName").val());
                location.href = "index.html";

            } else {
                alert("服务错误")
            }
        }
    });
}