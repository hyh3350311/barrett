/**
 * Created by HuangYunhui on 2018/5/14.
 */

var param = {
    tname: $(".tanme").val(),
    type: '',
    sid: '',
}
$("#search").click(function () {
    location.href = "topic.html?tname=" + $(".searchName").val()
})
$(".ct").on("click", '.sid', function () {
    var sid = $(this).attr("data-id");
    param.sid = sid
    window.open("topic.html?sid=" + sid);
})

$(".tName").on("click", '.topicNew', function () {
    var tid = $(this).attr("data-id");

    if(userName){
        window.open("answer/a"+tid+".html");

    }else{
        alert("您未登录，请先登录！")
    }
})


var iconArr = {
    64: "glyphicon-lock",
    65: "glyphicon-search",
    66: "glyphicon-lock",
    67: "glyphicon-lock",
    68: "glyphicon-lock",
    69: "glyphicon-lock",
    70: "glyphicon-lock",
    71: "glyphicon-lock",
    72: "glyphicon-lock",
    73: "glyphicon-lock",
    74: "glyphicon-lock",
    75: "glyphicon-lock",
    63: "glyphicon-lock",
    62: "glyphicon-lock",
    1: "glyphicon glyphicon-lock",
    76: "glyphicon glyphicon-lock",

}
//查询最新题目，默认按时间排序
function getNewTopic(){
    var data={
        start_page:1,
        page_size:"20",
    }
    $.ajax({
        type: "post",
        url:url+'/topic/userlist',
        data:data,
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            console.log(data)
            var ele=' <h3>最新试题</h3>';
            $(".tName").empty()
            if(data.code=="200"){
                var list=data.data.list;
                if(list){

                    list.map(function(item,index){
                        ele+=' <div class="col-md-6 topicNew" data-id='+item.id+'>'+item.tname+'</div>';

                    })
                    $(".tName").html(ele)
                }else{
                    alert("没有对应数据")
                }

            }else{
                alert(data.msg)
            }
        }
    });
}

getNewTopic();

function getSubject() {
    var arr = [];
    $(".ct").empty();
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
                //liebiao
                var ele = "";
                var ele1 = '';
                var ele2 = '';
                data.data.map(function (item) {
                    ele += '<div class="col-md-4 subject"> <div class="subitem row"> <div class="col-md-12"> <h4><i>' + item.cname.toString().substr(0, 1) +
                        '</i>' + item.cname + '</h4> </div>';
                    var narr = item.list.slice(0, 9);
                    ele1 = "";
                    narr.map(function (item1) {
                        ele1 += '<div class="col-md-4" >' + item1.sname + '</div>'
                    })
                    ele += ele1;
                    ele += ' </div><div class="detail row"> <div class="col-md-12"> <h4><i>' + item.cname.toString().substr(0, 1) +
                        '</i>' + item.cname + '</h4> </div>';
                    ele2 = '';
                    item.list.map(function (item2) {
                        ele2 += '<div class="col-md-4 sid" data-id=' + item2.sid + ' >' + item2.sname + '</div>'
                    })
                    ele += ele2;
                    ele += "</div></div>"
                })
                $(".ct").append(ele)
                //daohang
                $(".subNav").empty()
                var nav='<ul class="navList">';
                data.data.map(function(item){
                    nav+='<li data-cid='+item.cid+'>'+item.cname+'</li>';
                })
                nav+='</ul>';
                $(".subNav").append(nav)
            } else {
                alert("服务错误")
            }
        }
    });
}
getSubject();
