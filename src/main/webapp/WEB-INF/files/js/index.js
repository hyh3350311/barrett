/**
 * Created by HuangYunhui on 2018/7/9.
 */
var url = 'http://www.daanlook.com';
$(".topic").on("mouseover", ".on2", function () {
    var id = $(this).children().attr("data-sid")
    var ele = "#div" + id;
    $(ele).css("display", "block");
    $(ele).siblings().css("display", "none")
})
//页面跳转
//$(document).on("click",".navCid",function(){
//    var id = $(this).attr("data-cid");
//   // window.open("subject.html?cid="+id);
//})
$(document).on("click",".a_list_menu",function(){
    var id = $(this).attr("data-cid");
   // window.open("subject.html?cid="+id);
})
$(document).on("click",".subSid",function(){
    var cid = $(this).attr("data-cid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("subSid",sid)
    //window.open("subject.html?cid="+cid);

})
//$(document).on("click",".moreCid",function(){
//    var id = $(this).attr("data-cid");
//    window.open("subject.html?cid="+id);
//})
$(document).on("click",".tSubject",function(){
    var tid = $(this).attr("data-tid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("tSid",sid)
   // window.open("answer.html?tid="+tid);

})
$(document).on("click",".hot-tname",function(){
    var tid = $(this).attr("data-tid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("tSid",sid)
    //window.open("answer.html?tid="+tid);
})
$(document).on("click",".new-item",function(){
    var tid = $(this).attr("data-tid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("tSid",sid)
   // window.open("answer.html?tid="+tid);
})
$("#search").click(function () {
    location.href = "topicList.html?tname=" + encodeURIComponent($(".searchName").val())
})
function getSubject() {
    var arr = [];
    $(".ul_dak_list").empty();
    $(".ul_menu").empty();
    $(".topic").empty();
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
                    ele += '<li><a href="subject/c'+item.cid+'.html" target="_blank" class="a_list_menu" data-cid=' + item.cid + '>' + item.cname + '</a> <div class="sub">';
                    ele1 = "";
                    item.list.map(function (item1) {
                        ele1 += '<span><a href="subject/c'+item.cid+'.html" target="_blank" class="subSid" data-cid=' + item.cid + ' data-sid=' + item1.sid + '>' + item1.sname + '</a></span>'
                    })
                    ele += ele1;
                    ele += '</div></li>'
                })
                $(".ul_dak_list").append(ele)
                //填充导航栏
                var ele2 = '<li><a href="index.html">网站首页</a></li> <li>|</li>';
                var arr = data.data.slice(0, 7);
                arr.map(function (item) {
                    ele2 += '<li><a href="subject/c'+item.cid+'.html" target="_blank" class="navCid" data-cid=' + item.cid + '>' + item.cname + '</a></li> <li>|</li>'
                })
                $(".ul_menu").append(ele2);
                //填充题目
                var ele3 = '';
                var arr1 = data.data.slice(0, 4);
                var hotList = [];
                arr1.map(function (item) {
                    ele9 = '';
                    hotList = [];
                    ele3 += '<div class="zygb"> <div class="zygb_top">'
                    ele3 += '<span class="span_zygb_bt" data-cid=' + item.cid + '>' + item.cname + '</span><ul class="ul_zygb_list">';
                    hotList.push(getHot(item.cid))
                    var ele4 = '';
                    var tArr = item.list.slice(0, 5);
                    var topicList = [];
                    tArr.map(function (item1) {
                        ele4 += '<li id="n01" class="on2"><a data-sid=' + item1.sid + '>' + item1.sname + '</a></li> <li>/</li>'
                        topicList.push(getTopic(item1.sid))
                    })
                    ele3 += ele4;
                    ele3 += '<li ><a href="subject/c'+item.cid+'.html" target="_blank" class="moreCid" data-cid=' + item.cid + '>' + '更多>>' + '</a></li></ul> </div> <div class="clear"></div>';
                    ele5 = "";
                    var divId = "";
                    topicList.map(function (item, index) {
                        if (item[0]) {
                            divId = "div" + item[0].sid
                        } else {
                            divId = "div"
                        }
                        if (index == 0) {
                            ele5 += '<div><div class="zygb_nr" id=' + divId + '> <div class="zygb_nr_left"> <ul class="ul_zygb_nr_left">'
                        } else {
                            ele5 += '<div class="zygb_nr" style="display: none" id=' + divId + '> <div class="zygb_nr_left"> <ul class="ul_zygb_nr_left">'
                        }
                        ele6 = "";
                        for (var i = 0; i <= 3; i++) {
                            ele7 = "";
                            ele7 += '<li><dl class="dl_zygb">'
                            var sliceArr = item.slice(i * 5, (i + 1) * 5);
                            sliceArr.map(function (item) {
                                ele7 += ' <dd><span>[' + item.create_date + ']</span><a class="tSubject" href="answer/t'+item.id+'.html" target="_blank" data-sid=' + item.sid + ' data-tid=' + item.id + '>' + item.tname + '</a></dd>';
                            })
                            ele7 += '</dl></li>';
                            ele6 += ele7;
                        }
                        ele5 += ele6
                        ele5 += '</ul></div></div>'
                    })
                    ele3 += ele5;
                    ele3 += "</div>"
                    ele9 += ' <div class="zygb_nr_right"> <span class="span_rdda">【热点答案】</span><dl class="dl_rdda">'
                    hotList[0].map(function (item) {
                        ele9 += '<dd><span></span><a href="answer/t'+item.id+'.html" target="_blank" class="hot-tname"  data-sid=' + item.sid + ' data-tid=' + item.id + '>' + item.tname + '</a></dd>'
                    })
                    ele9 += '</dl> </div>'
                    ele3 += ele9;
                    ele3 += '</div>'

                })

                $(".topic").append(ele3);
            } else {
                alert("服务错误")
            }
        }
    });
}
getSubject();
function getTopic(id) {
    var data = {
        sid: id,
        start_page: 0,
        page_size: "20",
    };
    var list
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
                if (data.data.list) {
                    list = data.data.list.slice(0, 20);
                } else {
                    list = []
                }

            } else {
                alert(data.msg)
                list = []
            }
        }
    });
    return list
}
//查最热题目
function getHot(id) {
    var data = {
        cid: id,
    };
    var list
    $.ajax({
        type: "get",
        url: url + '/topic/hottopic',
        data: data,
        dataType: "json",
        async: false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            if (data.code == "200") {
                if (data.data) {
                    list = data.data.slice(0, 10);
                } else {
                    list = []
                }

            } else {
                alert(data.msg)
                list = []
            }
        }
    });
    return list
}
//最新试题
//查询最新题目，默认按时间排序
function getNewTopic() {
    var data = {
        start_page: 1,
        page_size: "20",
    }
    $.ajax({
        type: "post",
        url: url + '/topic/userlist',
        data: data,
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            $(".newTopic").empty()
            var ele = '<div class="zygb"> <div class="zygb_top">' +
                '<span class="span_zygb_bt">最新试题</span>' +
                '</div> <div class="clear"></div> ' +
                '<dl class="dl_zxst fl">';

            if (data.code == "200") {
                var list = data.data.list;
                if (list) {
                    list.slice(0,10).map(function (item, index) {
                        ele += '<dd><span>['+item.create_date+']</span><a href="answer/t'+item.id+'.html" target="_blank" class="new-item" data-sid=' + item.sid + ' data-tid='+item.id+'>'+item.tname+'</a></dd>';
                    })
                    ele+='</dl> <dl class="dl_zxst fr">';
                    list.slice(10,20).map(function (item, index) {
                        ele += '<dd><span>['+item.create_date+']</span><a href="answer/t'+item.id+'.html" target="_blank" class="new-item" data-sid=' + item.sid + ' data-tid='+item.id+'>'+item.tname+'</a></dd>';
                    })
                    ele+='</dl> </div>'
                    $(".newTopic").append(ele);
                } else {
                    alert("没有对应数据")
                }

            } else {
                alert(data.msg)
            }
        }
    });
}
getNewTopic();
