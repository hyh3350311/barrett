<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
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
            if (ajax.readyState==4 &&ajax.status==200) {
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
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/common.css"/>
    <link rel="stylesheet" href="css/swiper.min.css"/>
    <link rel="stylesheet" href="css/index.css"/>
    <link rel="icon" href="css/favicon.ico" type="image/x-icon">
</head>
<body>
<header class="navbar clearfix head">
    <div class="fl logo"></div>
    <div class="fl ct-logo"><h3 style="font-family: Monaco"><span>欢迎使用答案库</span></h3></div>
    <div class="fr userName">你还未登录，请先 <span class="login">登陆</span> | <span class="signin">注册</span></div>
</header>
<!--<div class="swiper-container" style="width: 100%">-->
<!--<div class="swiper-wrapper">-->
<!--<div class="swiper-slide">-->
<!--<img src="img/11.jpg" alt=""/>-->
<!--</div>-->
<!--<div class="swiper-slide"> <img src="img/22.jpg" alt=""/>-->

<!--</div>-->
<!--<div class="swiper-slide"> <img src="img/33.jpg" alt=""/>-->

<!--</div>-->
<!--<div class="swiper-slide"> <img src="img/44.jpg" alt=""/>-->

<!--</div>-->
<!--</div>-->
<!--<div class="swiper-pagination"></div>-->
<!--<div class="swiper-button-prev"></div>-->
<!--<div class="swiper-button-next"></div>-->
<!--</div>-->
<div class="">

    <div class="row search container">
        <div class="col-md-6 hDiv"><img style="width: 200px;height: 100px" src="img/123.png" alt=""/></div>
       <div class="col-md-6 hDiv" > <input class="searchName" type="text" placeholder="点此输入试题搜索答案" onfocus="this.placeholder=''"
                                     onblur="this.placeholder='点此输入试题搜索答案'"/>
           <button class="btn btn-default" id="search">搜索</button></div>

    </div>
    <!--<div class="row navHead" style="margin-bottom: 30px;padding: 0 30px">-->
        <!--<div class="col-md-1">首页</div>-->
        <!--<div class="col-md-10 subNav" style="position: relative;height: 60px;background: #d58512;overflow: hidden;">-->
            <!--<ul class="navList" >-->
                <!--<li>1234</li>-->
                <!--<li>123</li>-->
                <!--<li>123</li>-->
                <!--<li>123</li>-->
                <!--<li>123</li>-->
            <!--</ul>-->
        <!--</div>-->
        <!--<div class="col-md-1">123</div>-->
    <!--</div>-->
    <div class="row ct container">

    </div>
    <div class="tName row container">
        <h3>最新试题</h3>

        <!--<div class="col-md-6">亲吻撒旦卡萨丁撒娇的垃圾了卡萨丁了库萨克多久啊算了肯德基阿历克斯</div>-->
        <!--<div class="col-md-6">亲吻撒旦卡萨丁撒娇的垃圾了卡萨丁了库萨克多久啊算了肯德基阿历克斯</div>-->
        <!--<div class="col-md-6">亲吻撒旦卡萨丁撒娇的垃圾了卡萨丁了库萨克多久啊算了肯德基阿历克斯亲吻撒旦卡萨丁撒娇的垃圾了卡萨丁了库萨克多久啊算了肯德基阿历克斯</div>-->
        <!--<div class="col-md-6">亲吻撒旦卡萨丁撒娇的垃圾了卡萨丁了库萨克多久啊算了肯德基阿历克斯</div>-->
        <!--<div class="col-md-6">亲吻撒旦卡萨丁撒娇的垃圾了卡萨丁了库萨克多久啊算了肯德基阿历克斯</div>-->
        <!--<div class="col-md-6">亲吻撒旦卡萨丁撒娇的垃圾了卡萨丁了库萨克多久啊算了肯德基阿历克斯</div>-->
    </div>
</div>
<div class="footer">
    <ul class="foot_menu">
        <li><a href="">首页</a></li>
        <li><a href="">企业信息</a></li>
        <li><a href="">产品与解决方案</a></li>
        <li><a href="">服务支持</a></li>
        <li><a href="">联系我们</a></li>
    </ul>
    <p>答案库  版权所有  版权所有  2009-2018  湘ICP备15007069号 </p>
</div>
<div class="modal fade commomModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content denglu">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">登陆</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">用户名</label>

                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="userName" placeholder="请输入用户名">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label" >密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control"id="pwd" placeholder="请输入用密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <p>没有账号，<span class="regist">免费注册</span></p>
                        </div>
                    </div>
                </form>

            </div>
            <div class=" modal-footer ">
                <button type="button" class="btn btn-primary btn-block" id="login">登陆</button>
            </div>
        </div>
        <!-- /.modal-content -->
        <!-- 注册-->
        <div class="modal-content zhuce">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">注册</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">用户名</label>

                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="uname" placeholder="请输入用户名">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">密码</label>

                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="rpwd" placeholder="请输入用密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">确认密码</label>

                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="pwdAgain" placeholder="请确认密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label" >电话</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"id="phone" placeholder="请输入用电话">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label" >邮箱</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"id="email" placeholder="请输入邮箱">
                        </div>
                    </div>
                    <div class="form-group ">
                        <div class="col-sm-10 col-sm-offset-2">
                            <p>已有账号，<span class="loginAgain">直接登陆</span></p>
                        </div>
                    </div>
                </form>

            </div>
            <div class=" modal-footer  ">
                <button type="button" class="btn btn-primary btn-block confirmRegist">注册</button>
            </div>
        </div>
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

</body>
<script src="lib/jquery.min.js"></script>
<script src="lib/swiper.min.js"></script>
<script src="lib/bootstrap.min.js"></script>
<script src="js/common.js"></script>
<script src="js/index.js"></script>
<script>
    window.onload = function () {
        var mySwiper = new Swiper('.swiper-container', {

            autoplay: {
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }

</script>
</html>