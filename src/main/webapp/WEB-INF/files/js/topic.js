
//分页
function pageInit(totalPage,cur) {
    $('#page').jqPaginator({
        totalPages: totalPage,
        visiblePages: 7,
        currentPage: cur,
        first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:void(0);">上一页</a></li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
        last: '<li class="last"><a href="javascript:void(0);">末页</a></li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}</a></li>',
        onPageChange: function (num) {
            console.log(num)
           getTopic(num-1)
        }
    });}
var initPage=-1;
function getTopic(num){
    var data={
        start_page:num,
        page_size:"10",
    }
var params=window.location.search.split("?")[1];
   var arr=params.split("=");
    data[arr[0]]=decodeURIComponent(arr[1]);
    console.log(data)
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
            var ele='';
            $(".topicList").empty()
            if(data.code=="200"){
                var list=data.data.list;
                if(list){
                    var totalPage=Math.ceil(data.data.count/10);
                    if(initPage!=totalPage){
                        initPage=totalPage;
                        pageInit(totalPage,num+1)
                    }
                    list.map(function(item,index){
                        ele+='<div class="topicitem"><p><span>'+(index+1+num*10)+'：</span>'+item.tname+'</p>';
                        ele += '<div id="tname"><p>选项：</p><p>' + item.answer_item + '</p></div>';
                        ele+='<p>答案：<button class="btn btn-info getAnswer" data-id='+item.id+ '>点击查看答案</button></p></div>';
                    })
                    $(".topicList").html(ele)
                }else{
                    alert("没有对应数据")
                }

            }else{
alert(data.msg)
            }
        }
    });
}
getTopic(0);
var topicId
var userName = sessionStorage.getItem("userName");
$(".topicList").on("click",'.getAnswer',function(){
    var id=$(this).attr("data-id");
    topicId=id;
    if(userName){
        window.open("answer/a"+topicId+".html");

    }else{
       alert("您未登录，请先登录！")
    }
    //console.log(coin)
    //var msg;
    //if(userName){
    //    if(coin.coin>0){
    //        msg="您现在拥有"+coin.coin+"个金币，确认支付一个金币查看本问题？"
    //    }else{
    //        msg="金币不足,答案不会显示！"
    //    }
    //}else{
    //    msg="您未登录，请先登录！"
    //}
    //
    //$(".topicMsg").text(msg)
    //$(".topicModal").modal("show")

    //location.href="answer.html?id="+id;
})
//$(".confirm").click(function(){
//    if(userName){
//        //if(coin.coin>0){
//            location.href="answer.html?id="+topicId;
//        //}else{
//        //    $(".topicModal").modal("hide")
//        //}
//    }else{
//        $(".topicModal").modal("hide")
//    }
//
//})
//var coin;
