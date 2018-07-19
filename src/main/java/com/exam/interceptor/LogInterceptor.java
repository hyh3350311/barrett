package com.exam.interceptor;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSessionListener;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.alibaba.fastjson.JSON;
import com.exam.bean.ReturnObject;
import com.exam.bean.User;

public class LogInterceptor extends HandlerInterceptorAdapter {
	/**
	 * This implementation always returns {@code true}.
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
		throws Exception {
		Object user =  request.getSession().getAttribute("user");
		
		response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));  
		System.out.println(request.getHeader("Origin"));
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");  
		response.setHeader("Access-Control-Max-Age", "0");  
		response.setHeader("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,userId,token,Access-Control-Allow-Headers");  
		response.setHeader("Access-Control-Allow-Credentials", "true");  
		response.setHeader("XDomainRequestAllowed","1"); 
//		if (user == null) {
//			ReturnObject m = new ReturnObject();
//			m.setCode(202);
//			m.setMsg("no login");
//			String s = JSON.toJSONString(m);
//			PrintWriter out = response.getWriter();
//			StringBuffer sb = new StringBuffer(s);
//			out.print(sb.toString());
//			out.close();
//            return false;
//		}
		
		return true;
	}
}
