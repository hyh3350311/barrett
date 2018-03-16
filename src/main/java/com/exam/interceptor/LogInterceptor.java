package com.exam.interceptor;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.exam.bean.User;

public class LogInterceptor extends HandlerInterceptorAdapter {
	/**
	 * This implementation always returns {@code true}.
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
		throws Exception {
		Object user =  request.getSession().getAttribute("user");
		System.out.println("---"+user);
		if (user == null) {
			System.out.println("为空啊");
			PrintWriter out = response.getWriter();
            StringBuffer sb = new StringBuffer("<script type=\"text/javascript\" charset=\"UTF-8\">");
            sb.append("alert(\"你的账号被挤掉，或者没有登录，或者页面已经过期，请重新登录\");");
            sb.append("window.location.href='/exam/login/in?username=ss';");
            sb.append("</script>");
            out.print(sb.toString());
            out.close();
            return false;
		}
		return true;
	}
}
