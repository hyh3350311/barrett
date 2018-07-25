var url = 'http://www.daanlook.com';
$("#login").click(function () {
    login();
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
                location.href = "login.html"

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