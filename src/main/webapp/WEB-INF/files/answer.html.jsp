﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <link type="text/css" rel="stylesheet" href="css/css.css"/>
    <link type="text/css" rel="stylesheet" href="css/style.css"/>
    <link type="text/css" rel="stylesheet" href="css/page.css"/>
    <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css"/>
    <script src="js/jquery.min.js"></script>
    <script src="js/Slide.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.jslides.js"></script>
</head>

<body>
<div class="header">
    <a href="/index.html"><img src="images/logo.png" width="212" height="62" class="logo"/></a>
    <ul class="ul_header_r">
        <!--<li>-->
        <!--<samp class="ss"><input type="text" class="sr" onmouseover="if(this.value=='请输入关键词...'){this.value=''}"-->
        <!--value="请输入关键词..."/>-->
        <!--<input type="button" class="btn01" align="right"/></input>-->
        <!--</samp>-->
        <!--</li>-->
        <li class="inlogin"><span>***，欢迎登陆</span>
            <button class="logout">退出登陆</button>
        </li>
        <li class="dl-bt"><a href="/login.html" class="a_dr">用户登录</a></li>
        <li class="zc-bt"><a href="/signIn.html" class="a_zc">立即注册</a></li>
    </ul>
</div>
<!-- header -->
<!-- menu -->
<div class="menu">
    <ul class="ul_menu">
        <li><a href="/index.html">网站首页</a></li>
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

    <!-- menu -->
    <!-- page -->
	<div style="display: none">
	   
	   <p>${topic.tname }</p>
	   <p>${topic.answer_item }</p>
	    	
    </div>
    <div class="wz"><span>答案库 > 当前页面</span></div>

    <!-- left -->
    <div class="page_left_nr">
        <div class="page_left_01 t-mt">
            <h1 class="h1_bt">爱默生说：“诚实的人必须对自己守信，他的最后靠山就是真诚。”下列说法中，符合上述意
                思的是（ ）。</h1>


            <div class="page_left_02">
                <p>可以做一项调查，各个行业的工作导致身体的各种生理变化。</p>

                <p>例如在冰激凌场工作的女工，是否因为工作时间内接触的都是寒冷的空气而导致生理周期不稳定？还有白领压力很</p>

                <p>大，是否会导致失眠甚至多梦？</p>
                <a href="#" class="a_ck">点击查看答案</a>
                <img src="images/xx_img.jpg" width="840" height="22" style=" display:block; margin:15px auto;"/>

                <p>可以做一项调查，各个行业的工作导致身体的各种生理变化。</p></p>
                <p>例如在冰激凌场工作的女工，是否因为工作时间内接触的都是寒冷的空气而导致生理周期不稳定？还有白领压力很</p>

                <p>大，是否会导致失眠甚至多梦？</p>
            </div>


        </div>
        <div class="page_left_03">
            <span class="span_s_text">继续查找其他问题的答案</span>
            <samp class="ss1"><input type="text" class="sr1 searchName"
                                     onmouseover="if(this.value=='请输入关键词...'){this.value=''}" value="请输入关键词..."/>
                <input type="button" class="btn011" id="search" align="right"/></input>
            </samp>
        </div>
        <div class="page_left_04">
            <span>相关试题</span>
            <ul class="ul_xgst">
                <li><a href="#">企业管理人员有效促进合作的途径和方法包括（ ）。</a></li>
                <li><a href="#">所谓拜金主义，其本质是（ ）。</a></li>
                <li><a href="#">作为职业活劫内在的道德准则，“勤勉”的本质要求是（ ）。</a></li>
                <li><a href="#">关于职业化与新型劳动观，正确的说法是（ ）。</a></li>
                <li><a href="#">关于“敬业”的说法中，正确的是（ ）。</a></li>
                <li><a href="#">“诚信”的特征包括（ ）。</a></li>
                <li><a href="#">根据《中国商业企业诚信公约》，下列说法中正确的是（ ）。</a></li>
                <li><a href="#">经营者下列做法中违犯《中华人民共和国反不正当竞争法》规定的是（ ）。</a></li>
                <li><a href="#">下列属于比尔•盖茨关于10大优秀员工准则的是（ ）。</a></li>
                <li><a href="#">爱默生说：“诚实的人必须对自己守信，他的最后靠山就是真诚。”下列说法中，符合上述意思的是（ ）。</a></li>
            </ul>

            <!--<div class="page">-->
                <!--<ul class="ul_page">-->
                    <!--<li><a href="#">1</a></li>-->
                    <!--<li><a href="#">2</a></li>-->
                    <!--<li><a href="#">3</a></li>-->
                    <!--<li><a href="#">4</a></li>-->
                    <!--<li><a href="#">5</a></li>-->
                    <!--<li><a href="#">6</a></li>-->
                    <!--<li><a href="#">&gt;</a></li>-->
                    <!--<li><a href="#" id="">&gt;&gt;</a></li>-->
                    <!--<li><input name="" type="text" class="text_01"/></li>-->
                    <!--<li><a href="#" id="a_tz">跳转</a></li>-->
                <!--</ul>-->
            <!--</div>-->

        </div>

    </div>
    <!-- left -->
    <!-- right -->
    <!--<div class="page_right">-->
        <!--<div class="hotcase_g">-->
            <!--<div id="full-screen-slider">-->
                <!--<ul id="slides">-->
                    <!--<li style="background:url('images/case_b1.jpg') no-repeat center top"><a-->
                            <!--href="http://www.baidu.com/" target="_blank">新铺微商城，生意好伙伴</a></li>-->
                    <!--<li style="background:url('images/case_b2.jpg') no-repeat center top"><a-->
                            <!--href="http://www.baidu.com/" target="_blank">销量=暴增</a></li>-->
                    <!--<li style="background:url('images/case_b3.jpg') no-repeat center top"><a-->
                            <!--href="http://www.baidu.com/" target="_blank">他们已经在应用</a></li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="clear"></div>-->

        <!--&lt;!&ndash;<span class="span_biaoqian">【标签】</span>&ndash;&gt;-->
        <!--&lt;!&ndash;<ul class="ul_biaoqian">&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">普法考试</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">两学一做</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">三严三实</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">中国梦</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">党内法规</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">四个全面</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">领导能力测试</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">政府采购</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">基本理论</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">政策法规</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">党的建设</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">经济建设</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">生态文明建设</a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a href="#">国情与形势任务</a></li>&ndash;&gt;-->
        <!--&lt;!&ndash;</ul>&ndash;&gt;-->

    <!--</div>-->
    <!-- right -->
    <!-- page -->
    <div class="clear"></div>

    <!-- footer -->

    <!-- footer -->

    <!-- dak -->
    <div class="dak_list">
        <div class="dak_list_nr">
            <span class="span_dtk_bt">答案库</span>
            <ul class="ul_dak_list">
                <li><a href="#" class="a_list_menu">职业干部</a>

                    <div class="sub">
                        <span><a href="#">普法考试</a></span>
                        <span><a href="#">两学一做</a></span>
                        <span><a href="#">三严三实</a></span>
                        <span><a href="#">中国梦</a></span>
                        <span><a href="#">党内法规</a></span>
                        <span><a href="#">四个全面</a></span>
                        <span><a href="#">领导能力测试</a></span>
                        <span><a href="#">政府采购</a></span>
                        <span><a href="#">基本理论</a></span>
                        <span><a href="#">政策法规</a></span>
                        <span><a href="#">党的建设</a></span>
                        <span><a href="#">经济建设</a></span>
                        <span><a href="#">政治建设</a></span>
                        <span><a href="#">文化建设</a></span>
                        <span><a href="#">社会建设</a></span>
                        <span><a href="#">生态文明建设</a></span>
                        <span><a href="#">国情与形势任务</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">继续教育</a>

                    <div class="sub">
                        <span><a href="#">二建继续教育</a></span>
                        <span><a href="#">专业技术继续教育</a></span>
                        <span><a href="#">保险继续教育</a></span>
                        <span><a href="#">会计继续教育</a></span>
                        <span><a href="#">执业药师继续教育</a></span>
                        <span><a href="#">职称继续教育</a></span>
                        <span><a href="#">道路运输继续教育</a></span>
                        <span><a href="#">教师继续教育</a></span>
                        <span><a href="#">建筑九大员继续教育</a></span>
                        <span><a href="#">通信继续教育</a></span>
                        <span><a href="#">政工继续教育</a></span>
                        <span><a href="#">统计继续教育</a></span>
                        <span><a href="#">国际商务单证员</a></span>
                        <span><a href="#">监理工程师继续教育</a></span>
                        <span><a href="#">造价工程师继续教育</a></span>
                        <span><a href="#">系统集成项目管理</a></span>
                        <span><a href="#">税务师继续教育</a></span>
                        <span><a href="#">咨询工程师继续教育</a></span>
                        <span><a href="#">三类人员继续教育</a></span>
                        <span><a href="#">水利造价师继续教育</a></span>
                        <span><a href="#">水利工程检测员继续教育</a></span>
                        <span><a href="#">驻店药师继续教育</a></span>
                        <span><a href="#">公路水运试验检测人员</a></span>
                        <span><a href="#">护理继续教育</a></span>
                        <span><a href="#">医学继续教育</a></span>
                    </div>

                </li>
                <li><a href="#" class="a_list_menu">技能鉴定</a>

                    <div class="sub">
                        <span><a href="#">保险高管</a></span>
                        <span><a href="#">水利五大员</a></span>
                        <span><a href="#">建筑三类人员</a></span>
                        <span><a href="#">公益性岗位</a></span>
                        <span><a href="#">月嫂/母婴护理师</a></span>
                        <span><a href="#">医疗卫生系统人员</a></span>
                        <span><a href="#">海船船员</a></span>
                        <span><a href="#">动物疫病防治员</a></span>
                        <span><a href="#">中药调剂员</a></span>
                        <span><a href="#">眼镜定配工</a></span>
                        <span><a href="#">眼镜验光员</a></span>
                        <span><a href="#">动物检疫检验员</a></span>
                        <span><a href="#">医院三基考试</a></span>
                        <span><a href="#">内河船员</a></span>
                        <span><a href="#">中药购销员</a></span>
                        <span><a href="#">银行岗位</a></span>
                        <span><a href="#">特种作业人员</a></span>
                        <span><a href="#">航空安全员</a></span>
                        <span><a href="#">生活照料服务类</a></span>
                        <span><a href="#">餐饮服务人员</a></span>
                        <span><a href="#">消防员</a></span>
                        <span><a href="#">医药药品职业技能鉴定</a></span>
                        <span><a href="#">医疗器械类</a></span>
                        <span><a href="#">安全保护服务人员</a></span>
                        <span><a href="#">土木工程建筑施工</a></span>
                        <span><a href="#">机械设备维修</a></span>
                        <span><a href="#">石油石化职业技能鉴定</a></span>
                        <span><a href="#">测绘职业技能鉴定</a></span>
                        <span><a href="#">乘务员</a></span>
                        <span><a href="#">房屋建筑施工人员</a></span>
                        <span><a href="#">煤矿安全人员</a></span>
                        <span><a href="#">化学危险品</a></span>
                        <span><a href="#">汽车技师职业技能鉴定</a></span>
                        <span><a href="#">教练资格证</a></span>
                        <span><a href="#">仓储管理人员</a></span>
                        <span><a href="#">化验员</a></span>
                        <span><a href="#">快递员</a></span>
                        <span><a href="#">无人机资格证</a></span>
                        <span><a href="#">农业系统职称考试</a></span>
                        <span><a href="#">收银审核员</a></span>
                        <span><a href="#">文化教育职业技能鉴定</a></span>
                        <span><a href="#">美容化妆人员</a></span>
                        <span><a href="#">园林绿化作业人员</a></span>
                        <span><a href="#">酒饮料精制茶制造人员</a></span>
                        <span><a href="#">水利设施管养人员</a></span>
                        <span><a href="#">操作工技能鉴定</a></span>
                        <span><a href="#">公路交通技工人员</a></span>
                        <span><a href="#">火电电力职业技能鉴定</a></span>
                        <span><a href="#">安全监察人员</a></span>
                        <span><a href="#">铁路职业技能鉴定</a></span>
                        <span><a href="#">粮油食品检验人员</a></span>
                        <span><a href="#">化学工业职业技能鉴定</a></span>
                        <span><a href="#">民政职业技能鉴定</a></span>
                        <span><a href="#">服务行业人员</a></span>
                        <span><a href="#">烟草专卖技能鉴定</a></span>
                        <span><a href="#">冶金工业技能鉴定</a></span>
                        <span><a href="#">民航职业技能鉴定</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">职称资格</a>

                    <div class="sub">
                        <span><a href="#">保险</a></span>
                        <span><a href="#">司法考试</a></span>
                        <span><a href="#">教师资格</a></span>
                        <span><a href="#">劳动保障协理员</a></span>
                        <span><a href="#">网格员</a></span>
                        <span><a href="#">专利代理人</a></span>
                        <span><a href="#">保荐代表人</a></span>
                        <span><a href="#">拍卖师</a></span>
                        <span><a href="#">房屋登记官</a></span>
                        <span><a href="#">行政执法资格</a></span>
                        <span><a href="#">基金销售人员从业</a></span>
                        <span><a href="#">房地产经纪人协理</a></span>
                        <span><a href="#">期货从业资格</a></span>
                        <span><a href="#">证券从业资格</a></span>
                        <span><a href="#">证券经纪人</a></span>
                        <span><a href="#">会展策划师</a></span>
                        <span><a href="#">社区工作者</a></span>
                        <span><a href="#">食品安全员</a></span>
                        <span><a href="#">企业培训师</a></span>
                        <span><a href="#">营销师</a></span>
                        <span><a href="#">国际商务</a></span>
                        <span><a href="#">导游资格</a></span>
                        <span><a href="#">社会工作者</a></span>
                        <span><a href="#">人力资源</a></span>
                        <span><a href="#">汉语水平考试</a></span>
                        <span><a href="#">金融理财师</a></span>
                        <span><a href="#">出版专业</a></span>
                        <span><a href="#">技工类</a></span>
                        <span><a href="#">教师公开招聘</a></span>
                        <span><a href="#">公共营养师</a></span>
                        <span><a href="#">心理咨询师</a></span>
                        <span><a href="#">管理咨询师</a></span>
                        <span><a href="#">企业法律顾问</a></span>
                        <span><a href="#">电子商务师</a></span>
                        <span><a href="#">项目管理师</a></span>
                        <span><a href="#">秘书资格</a></span>
                        <span><a href="#">标准化工程师</a></span>
                        <span><a href="#">黄金从业资格</a></span>
                        <span><a href="#">健康管理师</a></span>
                        <span><a href="#">广告师</a></span>
                        <span><a href="#">网络编辑</a></span>
                        <span><a href="#">其它</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">建筑类</a>

                    <div class="sub">
                        <span><a href="#">机械员</a></span>
                        <span><a href="#">劳务员</a></span>
                        <span><a href="#">测量员</a></span>
                        <span><a href="#">试验员</a></span>
                        <span><a href="#">监理员</a></span>
                        <span><a href="#">安全员</a></span>
                        <span><a href="#">质量员</a></span>
                        <span><a href="#">标准员</a></span>
                        <span><a href="#">材料员</a></span>
                        <span><a href="#">施工员</a></span>
                        <span><a href="#">预算员</a></span>
                        <span><a href="#">资料员</a></span>
                        <span><a href="#">造价员 </a></span>
                        <span><a href="#">房地产经纪人</a></span>
                        <span><a href="#">二级建造师</a></span>
                        <span><a href="#">一级建造师</a></span>
                        <span><a href="#">bim建模师</a></span>
                        <span><a href="#">土地登记代理</a></span>
                        <span><a href="#">暖通工程师</a></span>
                        <span><a href="#">化工工程师</a></span>
                        <span><a href="#">注册计量师</a></span>
                        <span><a href="#">注册测绘师</a></span>
                        <span><a href="#">注册公用设备工程师</a></span>
                        <span><a href="#">注册电气工程师</a></span>
                        <span><a href="#">招标师资格</a></span>
                        <span><a href="#">投资项目管理</a></span>
                        <span><a href="#">室内设计师</a></span>
                        <span><a href="#">公路造价师</a></span>
                        <span><a href="#">环保工程师</a></span>
                        <span><a href="#">环境影响评价</a></span>
                        <span><a href="#">二级注册建筑师</a></span>
                        <span><a href="#">一级注册建筑师</a></span>
                        <span><a href="#">岩土工程师</a></span>
                        <span><a href="#">结构工程师</a></span>
                        <span><a href="#">城市规划师</a></span>
                        <span><a href="#">中级质量工程师</a></span>
                        <span><a href="#">初级质量工程师</a></span>
                        <span><a href="#">土地估价师</a></span>
                        <span><a href="#">房地产估价师</a></span>
                        <span><a href="#">咨询工程师</a></span>
                        <span><a href="#">监理工程师</a></span>
                        <span><a href="#">造价工程师</a></span>
                        <span><a href="#">不动产登记官 </a></span>
                        <span><a href="#">城建档案管理员</a></span>
                        <span><a href="#">注册采矿工程师</a></span>
                        <span><a href="#">房地产策划师</a></span>
                        <span><a href="#">注册给排水工程师</a></span>
                        <span><a href="#">消防工程师</a></span>
                        <span><a href="#">物业管理师</a></span>
                        <span><a href="#">设备监理师</a></span>
                        <span><a href="#">公路监理师</a></span>
                        <span><a href="#">安全评价师</a></span>
                        <span><a href="#">安全工程师</a></span>
                        <span><a href="#">公路工程试验检测员</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">公务员</a>

                    <div class="sub">
                        <span><a href="#">公务员</a></span>
                        <span><a href="#">事业单位</a></span>
                        <span><a href="#">军转干</a></span>
                        <span><a href="#">公选</a></span>
                        <span><a href="#">大学村官</a></span>
                        <span><a href="#">选调生</a></span>
                        <span><a href="#">政法干警</a></span>
                        <span><a href="#">教师招聘</a></span>
                        <span><a href="#">三支一扶</a></span>
                        <span><a href="#">特岗教师</a></span>
                        <span><a href="#">银行招聘</a></span>
                        <span><a href="#">税务稽查</a></span>
                        <span><a href="#">国家电网</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">医卫类</a>

                    <div class="sub">
                        <span><a href="#">医师定期考核</a></span>
                        <span><a href="#">乡村医生</a></span>
                        <span><a href="#">超声医学科</a></span>
                        <span><a href="#">助产士</a></span>
                        <span><a href="#">乡镇执业助理医师</a></span>
                        <span><a href="#">执业兽医</a></span>
                        <span><a href="#">畜牧兽医</a></span>
                        <span><a href="#">官方兽医</a></span>
                        <span><a href="#">放射医学(中级)</a></span>
                        <span><a href="#">放射医学(师)</a></span>
                        <span><a href="#">放射医学(士)</a></span>
                        <span><a href="#">医学检验(中级)</a></span>
                        <span><a href="#">医学检验(师)</a></span>
                        <span><a href="#">医学检验(士)</a></span>
                        <span><a href="#">中药学(中级)</a></span>
                        <span><a href="#">中药学(师)</a></span>
                        <span><a href="#">中药学(士)</a></span>
                        <span><a href="#">药学(中级)</a></span>
                        <span><a href="#">药学(师)</a></span>
                        <span><a href="#">药学(士)</a></span>
                        <span><a href="#">全科主治</a></span>
                        <span><a href="#">儿科主治</a></span>
                        <span><a href="#">妇产科主治 </a></span>
                        <span><a href="#">内科主治</a></span>
                        <span><a href="#">外科主治</a></span>
                        <span><a href="#">主任/副主任护师</a></span>
                        <span><a href="#">主管护师 (中级)</a></span>
                        <span><a href="#">初级护师</a></span>
                        <span><a href="#">护士资格证</a></span>
                        <span><a href="#">执业药师 </a></span>
                        <span><a href="#">公卫助理医师</a></span>
                        <span><a href="#">公卫执业医师</a></span>
                        <span><a href="#">中西医结合助理医师</a></span>
                        <span><a href="#">中西医结合执业医师</a></span>
                        <span><a href="#">口腔助理医师</a></span>
                        <span><a href="#">口腔执业医师</a></span>
                        <span><a href="#">中医助理医师</a></span>
                        <span><a href="#">中医执业医师</a></span>
                        <span><a href="#">临床助理医师</a></span>
                        <span><a href="#">临床执业医师</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">学历类</a>

                    <div class="sub">
                        <span><a href="#">高考</a></span>
                        <span><a href="#">自考</a></span>
                        <span><a href="#">成人高考</a></span>
                        <span><a href="#">研究生</a></span>
                        <span><a href="#">小升初</a></span>
                        <span><a href="#">中考</a></span>
                        <span><a href="#">考博</a></span>
                        <span><a href="#">法律硕士</a></span>
                        <span><a href="#">MBA</a></span>
                        <span><a href="#">MPA</a></span>
                        <span><a href="#">法律硕士</a></span>
                        <span><a href="#">工程硕士</a></span>
                        <span><a href="#">在职申硕</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">财会类</a>

                    <div class="sub">
                        <span><a href="#">准精算师</a></span>
                        <span><a href="#">投资分析师(CIIA) </a></span>
                        <span><a href="#">特许金融分析师(CFA) </a></span>
                        <span><a href="#">国际会计师（AIA）</a></span>
                        <span><a href="#">理财规划师 </a></span>
                        <span><a href="#">ACCA/CAT </a></span>
                        <span><a href="#">精算师</a></span>
                        <span><a href="#">国际内审师 </a></span>
                        <span><a href="#">基金从业资格</a></span>
                        <span><a href="#">统计从业资格</a></span>
                        <span><a href="#">银行业专业人员(中级)</a></span>
                        <span><a href="#">银行业专业人员(初级)</a></span>
                        <span><a href="#">注册税务师(CTA) </a></span>
                        <span><a href="#">注册资产评估师</a></span>
                        <span><a href="#">高级统计师 </a></span>
                        <span><a href="#">初级统计师</a></span>
                        <span><a href="#">中级审计师 </a></span>
                        <span><a href="#">初级审计师 </a></span>
                        <span><a href="#">高级经济师 </a></span>
                        <span><a href="#">中级经济师 </a></span>
                        <span><a href="#">初级经济师 </a></span>
                        <span><a href="#">注册会计师(CPA) </a></span>
                        <span><a href="#">会计高级职称 </a></span>
                        <span><a href="#">中级会计职称 </a></span>
                        <span><a href="#">初级会计职称 </a></span>
                        <span><a href="#">中级统计师 </a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">英语类</a>

                    <div class="sub">
                        <span><a href="#">英语四级</a></span>
                        <span><a href="#">英语六级</a></span>
                        <span><a href="#">公共英语</a></span>
                        <span><a href="#">成人英语三级</a></span>
                        <span><a href="#">托福</a></span>
                        <span><a href="#">雅思</a></span>
                        <span><a href="#">gre</a></span>
                        <span><a href="#">翻译英语</a></span>
                        <span><a href="#">申硕英语</a></span>
                        <span><a href="#">英语专业四级</a></span>
                        <span><a href="#">英语专业八级</a></span>
                        <span><a href="#">剑桥商务英语</a></span>
                        <span><a href="#">托业</a></span>
                        <span><a href="#">少儿英语等级</a></span>
                        <span><a href="#">大学英语应用能力考试</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">计算机类</a>

                    <div class="sub">
                        <span><a href="#">计算机等级考试</a></span>
                        <span><a href="#">软考</a></span>
                        <span><a href="#">通信</a></span>
                        <span><a href="#">职称计算机</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">益智类</a>

                    <div class="sub">
                        <span><a href="#">IQ智力题</a></span>
                        <span><a href="#">对联大全</a></span>
                        <span><a href="#">歇后语大全 </a></span>
                        <span><a href="#">益智数学</a></span>
                        <span><a href="#">逻辑推理 </a></span>
                        <span><a href="#">谜语大全</a></span>
                        <span><a href="#">脑筋急转弯</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">高等教育</a>

                    <div class="sub">
                        <span><a href="#">军事学</a></span>
                        <span><a href="#">两课</a></span>
                        <span><a href="#">医学</a></span>
                        <span><a href="#">管理学</a></span>
                        <span><a href="#">理学</a></span>
                        <span><a href="#">历史学</a></span>
                        <span><a href="#">农学</a></span>
                        <span><a href="#">工学</a></span>
                        <span><a href="#">哲学</a></span>
                        <span><a href="#">文学</a></span>
                        <span><a href="#">教育学</a></span>
                        <span><a href="#">法学</a></span>
                        <span><a href="#">经济学</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">其他</a>

                    <div class="sub">
                        <span><a href="#">轨道车司机</a></span>
                        <span><a href="#">仿真考试</a></span>
                        <span><a href="#">摩托车</a></span>
                        <span><a href="#">恢复考试</a></span>
                        <span><a href="#">安全文明</a></span>
                        <span><a href="#">货车试题</a></span>
                        <span><a href="#">客车试题</a></span>
                        <span><a href="#">小车试题</a></span>
                        <span><a href="#">从业资格</a></span>
                        <span><a href="#">出租车</a></span>
                        <span><a href="#">网约车司机</a></span>
                        <span><a href="#">救护车驾驶员</a></span>
                        <span><a href="#">驾驶员技师</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">十万个为什么</a>

                    <div class="sub">
                        <span><a href="#">十万个为什么</a></span>
                    </div>
                </li>
                <li><a href="#" class="a_list_menu">诗歌常识</a>

                    <div class="sub">
                        <span><a href="#">诗歌常识</a></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <script src="js/common.js"></script>
    <script src="js/answer.js"></script>
</div>
<div class="footer">
    <p><a href="#">关于我们</a>|<a href="#">付款方式</a>|<a href="#">广告联系</a>|<a href="#">联系我们</a>|<a href="#">网站地图</a>|<a
            href="#">网站申明</a>|<a href="#">友情链接</a>|<a href="#">网站招聘</a>|<a href="#">帮助中心</a></p>

    <p>答案库&nbsp;&nbsp;版权所有&nbsp;&nbsp;2009-2018&nbsp;&nbsp;湘ICP备18012610号 </p>
</div>
<div class="modal fade topicModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">查看题目</h4>
            </div>
            <div class="modal-body">
                <p class="topicMsg">One fine body&hellip;</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary tConfirm">确认</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>
</body>
</html>
