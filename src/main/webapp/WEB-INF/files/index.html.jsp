<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script>

        var oMeta = document.createElement('title');
        var ele = document.createElement('meta');
        var ele1 = document.createElement('meta');
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        ajax.open('get','http://www.daanlook.com/barrett/tkd/gettdk');
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
            if (ajax.readyState==4&&ajax.status==200) {
                //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                var data=JSON.parse(ajax.responseText)
                console.log(data.data);//输入相应的内容
                oMeta.innerHTML = data.data.title;
                ele.name = 'keywords';
                ele.content = data.data.keyword;
                ele1.name = 'description';
                ele1.content = data.data.description
            }
        }

        document.getElementsByTagName('head')[0].appendChild(oMeta);
        document.getElementsByTagName('head')[0].appendChild(ele);
        document.getElementsByTagName('head')[0].appendChild(ele1);
    </script>
    <link type="text/css" rel="stylesheet" href="css/css.css"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"/>
    <script src="js/jquery.min.js"></script>
    <script src="js/banner.js"></script>
    <script src="js/Slide.js"></script>
</head>

<body>
<div class="header">
    <a href="index.html"><img src="images/logo.png" width="212" height="62" class="logo"/></a>
    <ul class="ul_header_r">
        <li>
            <samp class="ss"><input type="text" class="sr searchName" onmouseover="if(this.value=='请输入关键词...'){this.value=''}"
                                    value="请输入关键词..."/>
                <input type="button" class="btn01"  id="search" align="right"/></input>
            </samp>
        </li>
        <li class="inlogin"><span>***，欢迎登陆</span> <button class="logout">退出登陆</button></li>
        <li class="dl-bt"><a href="login.html" class="a_dr">用户登录</a></li>
        <li class="zc-bt"><a href="signIn.html" class="a_zc">立即注册</a></li>
    </ul>
</div>
<div class="menu">
    <ul class="ul_menu">
        <li><a href="#">网站首页</a></li>
        <li>|</li>
        <li><a href="#">职业干部</a></li>
        <li>|</li>
        <li><a href="#">继续教育</a></li>
        <li>|</li>
        <li><a href="#">技能鉴定</a></li>
        <li>|</li>
        <li><a href="#">职称资格</a></li>
        <li>|</li>
        <li><a href="#">高等教育</a></li>
        <li>|</li>
        <li><a href="#">诗歌常识</a></li>
        <li>|</li>
        <li><a href="#">经济建设</a></li>
    </ul>
</div>
<div class="content">
    <!-- header -->

    <!-- header -->
    <!-- menu -->

    <!-- menu -->
    <!-- banner -->
    <div style="display: none">
	    <c:forEach var="cat" items="${catgory_list}">
	    	<a href="${domain}/subject/c${cat.cid}.html">${cat.cname}</a>
	    </c:forEach>
	    <c:forEach var="sub" items="${subject_list}">
	    	<a href="${domain}/subject/s${sub.sid}.html">${sub.sname}</a>
	    </c:forEach>
	    <c:forEach var="hot" items="${hot_list}">
	    	<a href="${domain}/answer/t${hot.id}.html">${hot.tname}</a>
	    </c:forEach>
	    <c:forEach var="top" items="${new_topic_list}">
	    	<a href="${domain}/answer/t${top.id}.html">${top.tname}</a>
	    </c:forEach>
    </div>
    <div class="banner">
        <div class="new_banner">
            <ul class="rslides f426x240">
                <li><a href="javascript:"><img src="images/banner01.jpg" width="1200" height="250"/></a></li>
                <li><a href="javascript:"><img src="images/banner02.jpg" width="1200" height="250"/></a></li>
                <li><a href="javascript:"><img src="images/banner03.jpg" width="1200" height="250"/></a></li>
                <li><a href="javascript:"><img src="images/banner04.jpg" width="1200" height="250"/></a></li>
            </ul>
        </div>
    </div>
    <!-- banner -->
    <!-- zygb -->
    <div class="topic">

                <div class="zygb_nr_right">
                    <span class="span_rdda">【热点答案】</span>
                    <dl class="dl_rdda">
                    </dl>
                </div>

    </div>
    <div class="newTopic">
        <div class="zygb">
            <div class="zygb_top"><span class="span_zygb_bt">最新试题</span></div>
            <div class="clear"></div>
        </div>
    </div>
    <!-- zxst -->
    <!-- footer -->

    <!-- footer -->

    <!-- dak -->
    <div class="dak_list">
        <div class="dak_list_nr">
            <span class="span_dtk_bt">答案库</span>
            <ul class="ul_dak_list">

            </ul>
        </div>
    </div>
    <!-- dak -->

    <script language="javascript">
//        $(function () {
//            $(window).scroll(function () {
//                var sctop = $(document).scrollTop();
//                if (sctop >= 150) {
//                    $(".dak_list").addClass("fiexd");
//                } else {
//                    $(".dak_list").removeClass("fiexd");
//                }
//            });
//        });
//        jQuery(".ul_dak_list").slide({
//            type: "menu",
//            titCell: "li",
//            targetCell: ".sub",
//            delayTime: 0,
//            triggerTime: 0,
//            defaultPlay: false,
//            returnDefault: true
//        });
    </script>
</div>
<div class="footer">
    <p><a href="#">关于我们</a>|<a href="#">付款方式</a>|<a href="#">广告联系</a>|<a href="#">联系我们</a>|<a href="#">网站地图</a>|<a
            href="#">网站申明</a>|<a href="#">友情链接</a>|<a href="#">网站招聘</a>|<a href="#">帮助中心</a></p>

    <p>答案库&nbsp;&nbsp;版权所有&nbsp;&nbsp;2009-2018&nbsp;&nbsp;湘ICP备18012610号 </p>
</div>
</body>
<script src="js/common.js"></script>
<script src="js/index.js"></script>
</html>
