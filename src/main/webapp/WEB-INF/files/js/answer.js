
(function () {
    getcoin();


})()
var coin;
var msg;
var isCoin


$(".confirm").click(function () {
    if (isCoin) {
        getAnswerByCoin();
    } else {
        $(".topicModal").modal("hide");
        var ele="<p class='noVip'>您未获得权限查看答案哦！请先充值金币或VIP获得权限</p>"
        $(".detailTopic").html(ele)
        return
    }


})
function getAnswerByVip(falg) {
    var data = {
        tid: "",
        getanswer: falg,
    }
//    var params = window.location.search.split("?")[1];
    var s=window.location.href;
    var losplits=s.split("/");
    if(!losplits[losplits.length-1].startsWith("a")){
    	return;
    }
    var p = losplits[losplits.length-1].split(".")[0];
    var params = p.substring(1);
//    var arr = params.split("=");
    var arr=params;
    data.tid = decodeURIComponent(arr);
    console.log(data)
    $.ajax({
        type: "post",
        url: url + '/topic/userselect',
        data: data,
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            console.log(data)
            if (data.code == "200") {
                var list = data.data;
                filltable(list);
                $(".topicModal").modal("hide");
            } else if (data.code == "403") {
                $(".topicMsg").text(msg)
                $(".topicModal").modal("show")
            } else {

            }
        }
    });
}
function filltable(list) {
    $(".detailTopic").empty()
    var ele = '';
    ele += '<div class="topicitem"><p>题目：' + list.tname + '</p>';
    ele += '<div id="tname"><p>选项：</p><p>' + list.answer_item + '</p></div>';
    ele += '<p>答案：' + list.answer + '</p>';
    ele += '<p>分析：' + list.analysis + '</p>';

    $(".detailTopic").html(ele)
}
function getAnswerByCoin() {
    var data = {
        tid: "",
        username: sessionStorage.getItem("userName")
    }
//    var params = window.location.search.split("?")[1];
//    var arr = params.split("=");
//  var params = window.location.search.split("?")[1];
    var s=window.location.href;
    var losplits=s.split("/");
    if(!losplits[losplits.length-1].startsWith("a")){
    	return;
    }
    var p = losplits[losplits.length-1].split(".")[0];
    var params = p.substring(1);
//    var arr = params.split("=");
    var arr=params;
    data.tid = decodeURIComponent(arr);
    console.log(data)
    $.ajax({
        type: "post",
        url: url + '/user/takecoin',
        data: data,
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            console.log(data)
            if (data.code == "200") {
                getAnswerByVip(true)
            } else {
                alert(data.msg)
            }
        }
    });
}
function getcoin() {
    $.ajax({
        type: "post",
        url: url + '/user/getcoin',
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            console.log(data)
            if (data.code == "200") {
                coin = data.data;
                if (coin.coin > 0) {
                    msg = "您现在拥有" + coin.coin + "个金币，确认支付一个金币查看本问题？"
                    isCoin = true;
                } else {
                    msg = "金币不足,答案不会显示,请先充值！"
                    isCoin = false;
                }
                getAnswerByVip(true);
            } else {
                alert(data.msg)
            }
        }
    });
}
