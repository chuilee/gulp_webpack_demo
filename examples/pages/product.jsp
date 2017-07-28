<!DOCTYPE html>
<%@page import="cn.comm.util.ConfigUtil"%>
<%@page import="cn.comm.util.CommonParams"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
  String path = request.getContextPath();
  String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
  String basePath_2 = request.getScheme() + "://"+ request.getServerName() + path + "/";
  String acct = (String) session.getAttribute(CommonParams.SESSION_USER_ID);
  String cokie_name = CommonParams.COKIE_NAME;
  String uploadPath = ConfigUtil.get("file.upload.url");
  String downloadPath = ConfigUtil.get("file.download.url");
%>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>活动管理系统</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="stylesheet" href="src/css/bootstrap.css">
    <!-- <link rel="stylesheet" href="src/css/main.css"> -->
    <link rel="stylesheet" href="src/css/home-normalize.css">
    <link rel="stylesheet" href="src/css/home-style.css">
    <!-- <link rel="icon" href="src/favicon.ico" type="image/x-icon"> -->
    <script type="text/javascript" src="src/js/jquery-1.12.3.min.js"></script>
    <script type="text/javascript" src="src/js/jquery.fullPage.min.js"></script>
    <script type="text/javascript" src="src/js/jquery.mousewheel.js"></script>
    <script type="text/javascript" src="src/js/main.js"></script>
    <script>
    	var basePath = '<%=basePath%>';
        var basePath_2 = '<%=basePath_2%>';
        var acct = '<%=acct%>';
        var cokie_name = '<%=cokie_name%>';
        var uploadPath = '<%=uploadPath%>';
        var uploadPath = '<%=downloadPath%>';
        if (acct == 'null' || acct == null) {
         	acct = '';
     	}
    </script>
</head>

<body>
	<app></app>
  <script src="assets/js/about.js"></script>
</body>
</html>
