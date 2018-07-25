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
$(document).on("click",".navCid",function(){
    var id = $(this).attr("data-cid");
   // window.open("subject.html?cid="+id);
})
$(document).on("click",".a_list_menu",function(){
    var id = $(this).attr("data-cid");
    //window.open("subject.html?cid="+id);
})
$(document).on("click",".subSid",function(){
    var cid = $(this).attr("data-cid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("subSid",sid)
   // window.open("subject.html?cid="+cid);

})
$(document).on("click",".moreCid",function(){
    var id = $(this).attr("data-cid");
   // window.open("subject.html?cid="+id);
})
$(document).on("click",".tSubject",function(){
    var tid = $(this).attr("data-tid");
    var sid = $(this).attr("data-sid");
    sessionStorage.setItem("tSid",sid)
   // window.open("answer.html?tid="+tid);

})
$("#search").click(function () {
    location.href = "topicList.html?tname=" + encodeURIComponent($(".searchName").val())
})
$(document).on("click",".singleCid",function(e){
    console.log(e)
    var params = window.location.href;
    var p = params.split(".html")[0];
    var cid=p.split("/")[p.split("/").length-1].split("c")[1]
    e.preventDefault();
    $(this).addClass("sactive");
    $(this).parent().siblings().children().removeClass("sactive");
    var sid = $(this).attr("data-sid");
    var sname= $(this).text();
    $(".singleName").text(sname);
    getNewTopic(sid,0)
    getHot(cid,sid);

})
function pageInit(sid,totalPage, cur) {
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
            getNewTopic(sid,num-1)
        }
    });
}
var initPage = -1;
function getSubject() {
    var params = window.location.href;
    var p = params.split(".html")[0];
    var cid=p.split("/")[p.split("/").length-1].split("c")[1]
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
                    if(item.cid==cid){
                        console.log(item)
                        var sid=sessionStorage.getItem("subSid");
                        var cname=item.cname;
                        keyArr.push(cname)
                        var sname="";
                        ele3+='<span class="span_zygb_bt_page">'+item.cname+'</span> <ul class="ul_zygb_page">';
                        item.list.map(function (item1,index) {
                            keyArr.push(item1.sname)
                            if(sid){
                                if(sid==item1.sid){
                                    ele3+= '<li><a href="#" class="singleCid sactive" data-sid='+item1.sid+'>'+item1.sname+'</a></li>';
                                    sname=item1.sname

                                }else{
                                    ele3+= '<li><a href="#" class="singleCid" data-sid='+item1.sid+'>'+item1.sname+'</a></li>';
                                }
                                getNewTopic(sid,0)
                                getHot(cid,sid);
                                sessionStorage.removeItem("subSid")
                            }else{
                                console.log(index)
                                if(index==0){
                                    ele3+= '<li><a href="#" class="singleCid sactive" data-sid='+item1.sid+'>'+item1.sname+'</a></li>';
                                    sname=item1.sname
                                    getNewTopic(item1.sid,0)
                                    getHot(cid,item1.sid);
                                }else{
                                    ele3+= '<li><a href="#" class="singleCid " data-sid='+item1.sid+'>'+item1.sname+'</a></li>';
                                }
                            }

                        })
                       $("title").text(keyArr.slice(0,10).join(","))
                        $("meta[name='keywords']").attr("content",keyArr.join(","))
                        $("meta[name='description']").attr("content",keyArr.join(","))
                        ele3+='</ul>';
                        //当前位置
                        ele4+='<span class="span_weizhi">'+cname+' ><span class=singleName>'+sname+'</span></span>';
                        $(".weizhi").append(ele4);
                        $(".page_zygb").append(ele3);
                    }
                })
                $(".ul_dak_list").append(ele)
                //填充导航栏
                var ele2 = '<li><a href="/index.html">网站首页</a></li> <li>|</li>';
                var arr = data.data.slice(0, 7);
                arr.map(function (item) {
                    ele2 += '<li><a href="#" class="navCid" data-cid=' + item.cid + '>' + item.cname + '</a></li> <li>|</li>'
                })
                $(".ul_menu").append(ele2);


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
function getHot(cid,sid) {
    var data = {
        cid:cid,
       sid: sid,
    };
    var list;
    var ele="";
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
            console.log(data)
            if (data.code == "200") {
                if (data.data) {
                    $("#divn02").empty()
                    list = data.data.slice(0, 20);
                    ele+='<ul class="ul_zxst_nr">'
                    list.map(function(item){
                        ele+=' <li><a href="/answer/t'+item.id+'.html" target="_blank" data-tid='+item.id+'>'+item.tname+'</a></li>'
                    })
                    ele+='  </ul>'
                    $("#divn02").append(ele)
                } else {
                    $("#divn02").empty()
                    list = [];
                    ele+='<ul class="ul_zxst_nr">'
                    ele+=' <li><a href="#" >暂无数据</a></li>'
                    ele+='  </ul>'
                    $("#divn02").append(ele)
                }

            } else {
                $("#divn02").empty()
                list = [];
                ele+='<ul class="ul_zxst_nr">'
                ele+=' <li><a href="#" >暂无数据</a></li>'
                ele+='  </ul>'
                $("#divn02").append(ele)
                alert(data.msg)

            }
        }
    });

}
//最新试题
//查询最新题目，默认按时间排序
function getNewTopic(sid,num) {
    var data = {
        sid:sid,
        start_page: num,
        page_size: "20",
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
                    var totalPage = Math.ceil(data.data.count / 20);
                    if (initPage != totalPage) {
                        initPage = totalPage;
                        pageInit(sid,totalPage, num )
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

