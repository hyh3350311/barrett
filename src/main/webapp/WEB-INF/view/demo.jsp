<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>你好</title>
</head>
<body>
    <h1>This is SpringMVC Demo${user}---${u.userName}</h1>
    <c:forEach var="" items=""></c:forEach>
    <c:forEach var="cat" items="catgory_list">
    	<a href="subject/c${cat.cid}.html">${cat.cname }</a>
    </c:forEach>
</body>
</html>