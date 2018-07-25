/**
 * Created by HuangYunhui on 2018/7/9.
 */
var url = 'http://www.daanlook.com';
//页面跳转
$(document).on("click", ".navCid", function () {
    var id = $(this).attr("data-cid");
   // window.open("subject.html?cid=" + id);
})
$(document).on("click", ".a_list_menu", function () {
    var id = $(this).attr("data-cid");
    //window.open("subject.html?cid=" + id);
})
$(document).on("click", ".subSid", function () {
    var cid = $(this).attr("data-cid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("subSid", sid)
   // window.open("subject.html?cid=" + cid);

})
$(document).on("click", ".tSubject", function () {
    var tid = $(this).attr("data-tid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("tSid", sid)
  //  window.open("answer.html?tid=" + tid);

})
$("#search").click(function () {
    location.href = "topicList.html?tname=" + encodeURIComponent($(".searchName").val())
})
$(document).on("click", ".a_ck", function () {
    getAnswerByVip(true)
});
$(document).on("click", ".tConfirm", function () {
    console.log(isCoin)

    if (isCoin) {
        $(".topicModal").modal("hide");
        getAnswerByCoin();
    } else {
        $(".topicModal").modal("hide");
    }
});
(function () {
    var userName=sessionStorage.getItem("userName");
    if(userName){
        getcoin();
    }else{
        msg="您未登陆！请先登录！"
        isCoin=false;

    }

})()
var coin;
var msg;
var isCoin
function filltable(list) {
    $(".t-mt").empty()
    var ele = '';
    ele += '  <h1 class="h1_bt">' + list.tname + '</h1><div class="page_left_02">';
    ele += ' <p>' + list.tname + '</p>';
    if (list.answer_item) {
        ele += '<p>选项：</p>'
        ele += '<p>' + list.answer_item + '</p>';
    }
    ele += '  <a href="#" class="a_ck" data-tid=' + list.tid + '>点击查看答案</a></p> ' +
        '<img src="images/xx_img.jpg" width="840" height="22" style=" display:block; margin:15px auto;"/>'
    if(list.analysis){
        ele += '<p>解析：'+list.analysis+'</p>'
    }
    if (list.answer) {

        ele += '<p>答案：</p>'
        ele += '<p>' + list.answer + '</p>';
    }
    ele += '  </div>'
    $(".t-mt").html(ele)
}
function getAnswerByVip(falg) {
    var data = {
        tid: "",
        getanswer: falg,
    }
    var params = window.location.href;
    var arr = params.split(".html")[0];
    var tid=arr.split("/")[arr.split("/").length-1].split("t")[1]
    data.tid = decodeURIComponent(tid);
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
                filltable(data.data)
                $("title").text(data.data.tname)
                $("meta[name='keywords']").attr("content",data.data.tname)
                $("meta[name='description']").attr("content",data.data.tname)
            } else if (data.code == "403") {
                $(".topicModal").modal("show");
                $(".topicMsg").text(msg)

            } else {
                alert(data.msg)
            }
        }
    });
}
getAnswerByVip(false)
function getAnswerByCoin() {
    var data = {
        tid: "",
        username: sessionStorage.getItem("userName")
    }
    var params = window.location.href;
    var arr = params.split(".html")[0];
    var tid=arr.split("/")[arr.split("/").length-1].split("t")[1]
    data.tid = decodeURIComponent(tid);
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
        async: false,
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
            } else {
                alert(data.msg)
            }
        }

    });
}
//getAnswerByCoin();
function getSubject() {
    var arr = [];
    $(".ul_dak_list").empty();
    $(".ul_menu").empty();
    $.ajax({
        type: "post",
        url: url + '/subject/list',
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {

            if (data.code == 200) {
                //填充列表
                var ele = "";
                var ele1 = '';
                var ele5;
                var ele6;
                var ele7 = "";
                var ele9 = ""
                data.data.map(function (item) {
                    ele += '<li><a href="/subject/c'+item.cid+'.html" target="_blank" class="a_list_menu" data-cid=' + item.cid + '>' + item.cname + '</a> <div class="sub">';
                    ele1 = "";
                    item.list.map(function (item1) {
                        ele1 += '<span><a href="/subject/c'+item.cid+'.html" target="_blank" class="subSid" data-cid=' + item.cid + ' data-sid=' + item1.sid + '>' + item1.sname + '</a></span>'
                    })
                    ele += ele1;
                    ele += '</div></li>'
                })
                $(".ul_dak_list").append(ele)
                //填充导航栏
                var ele2 = '<li><a href="/index.html">网站首页</a></li> <li>|</li>';
                var arr = data.data.slice(0, 7);
                arr.map(function (item) {
                    ele2 += '<li><a href="subject/c'+item.cid+'.html" target="_blank" class="navCid" data-cid=' + item.cid + '>' + item.cname + '</a></li> <li>|</li>'
                })
                $(".ul_menu").append(ele2);
            } else {
                alert("服务错误")
            }
        }
    });
}
getSubject();
var sid=sessionStorage.getItem("tSid")
getTopic(sid)
function getTopic(id) {

    var data = {
        sid: id,
        start_page: 0,
        page_size: "20",
    };
    $.ajax({
        type: "post",
        url: url + '/topic/userlist',
        data: data,
        dataType: "json",
        async: false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            if (data.code == "200") {

                    fillList(data.data.list)


            } else {
                alert(data.msg)
            }
        }
    });
}
function fillList(list){
    $(".ul_xgst").empty()
    var ele='';
    list.map(function(item){
        ele+=' <li><a href="/answer/t'+item.id+'.html" target="_blank" data-tid='+item.id+'>'+item.tname+'</a></li>'
    })
    $(".ul_xgst").append(ele)

}
