(function () {
    isLogin()
})();

function isLogin() {
    var userName = sessionStorage.getItem("userName");
    if (userName) {
       $(".inlogin").css("display","block")
        $(".inlogin span").text(userName+"欢迎登陆")
        $(".dl-bt").css("display","none")
        $(".zc-bt").css("display","none")
    } else {
        $(".inlogin").css("display","none")
        $(".dl-bt").css("display","block")
        $(".zc-bt").css("display","block")
    }
}
$(".header").on("click", '.logout', function () {
    logOut();
})
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