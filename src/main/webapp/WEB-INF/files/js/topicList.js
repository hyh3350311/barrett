/**
 * Created by HuangYunhui on 2018/7/9.
 */
var url = 'http://www.daanlook.com';

//页面跳转
$(document).on("click",".navCid",function(){
    var id = $(this).attr("data-cid");
   // window.open("subject.html?cid="+id);
})
$(document).on("click",".a_list_menu",function(){
    var id = $(this).attr("data-cid");
   // window.open("subject.html?cid="+id);
})
$(document).on("click",".subSid",function(){
    var cid = $(this).attr("data-cid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("subSid",sid)
   // window.open("subject.html?cid="+cid);

})
$(document).on("click",".moreCid",function(){
    var id = $(this).attr("data-cid");
    //window.open("subject.html?cid="+id);
})
$(document).on("click",".tSubject",function(){
    var tid = $(this).attr("data-tid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("tSid",sid)
   // window.open("answer.html?tid="+tid);

})

function pageInit(name,totalPage, cur) {
    $('#page').jqPaginator({
        totalPages: totalPage,
        visiblePages: 7,
        currentPage: cur+1,
        first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
        last: '<li class="last"><a href="javascript:void(0);">末页</a></li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
        onPageChange: function (num) {
            console.log(num)
            getNewTopic(name,num-1)
        }
    });
}
var initPage = -1;
function getSubject() {
    var arr = [];
    $(".ul_dak_list").empty();
    $(".page_zygb").empty();
    $(".ul_menu").empty();
    $(".weizhi").empty();
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
                var keyArr=[];
                var ele = "";
                var ele1 = '';
                var ele3='';
                var ele4="";
                data.data.map(function (item) {
                    ele += '<li><a href="/subject/c'+item.cid+'.html" target="_blank" class="a_list_menu" data-cid=' + item.cid + '>' + item.cname + '</a> <div class="sub">';
                    ele1 = "";
                    item.list.map(function (item1) {
                        ele1 += '<span><a href="/subject/c'+item.cid+'.html" target="_blank" class="subSid" data-cid=' + item.cid + ' data-sid=' + item1.sid + '>' + item1.sname + '</a></span>'
                    })
                    ele += ele1;
                    ele += '</div></li>'
                    //填充所有频道

                })
                $(".ul_dak_list").append(ele)
                //填充导航栏
                var ele2 = '<li><a href="index.html">网站首页</a></li> <li>|</li>';
                var arr = data.data.slice(0, 7);
                arr.map(function (item) {
                    ele2 += '<li><a href="/subject/c'+item.cid+'.html" target="_blank" class="navCid" data-cid=' + item.cid + '>' + item.cname + '</a></li> <li>|</li>'
                })
                $(".ul_menu").append(ele2);


            } else {
                alert("服务错误")
            }
        }
    });
}
getSubject();


//最新试题
//查询最新题目，默认按时间排序
(function () {
    var params = window.location.search.split("?")[1];
    var arr=params.split("=");
    var name=decodeURIComponent(arr[1]);
    $("title").text(name)
    $("meta[name='keywords']").attr("content",name)
    $("meta[name='description']").attr("content",name)
    getNewTopic(name,0)

})()

function getNewTopic(name,num) {
    var data = {
        tname:name,
        start_page: num,
        page_size: "10",
    }
    var ele="";
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
            console.log(data)
            $(".divNew").empty();
            if (data.code == "200") {
                var list = data.data.list;
                if (list) {
                    var totalPage = Math.ceil(data.data.count / 10);
                    if (initPage != totalPage) {
                        initPage = totalPage;
                        pageInit(name,totalPage, num )
                    }
                    ele += '<ul class="ul_zxst_nr">';
                    list.map(function(item){
                        ele+=' <li><a href="/answer/t'+item.id+'.html" target="_blank" data-tid='+item.id+'>'+item.tname+'</a></li>'
                    })
                    ele+=' </ul>'
                    $(".divNew").append(ele)
                } else {
                    $(".divNew").empty()
                    list = [];
                    ele+='<ul class="ul_zxst_nr">'
                    ele+=' <li><a href="#" >暂无数据</a></li>'
                    ele+='  </ul>'
                    $(".divNew").append(ele)
                }

            } else {
                alert(data.msg)
            }
        }
    });
}

