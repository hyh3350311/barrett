package com.springdemo.controller;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.exam.bean.User;

@Controller
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/in")
    public String login(@RequestParam(value="username", required=false) String username,
    		@RequestParam(value="password", required=false) String password,HttpSession session,
    		Model model){
    	System.out.println(username);
    	System.out.println(password);
    	model.addAttribute("user", username);
    	if( username != null){
    		session.setAttribute("user", "nihao");
    		User user = new User();
    		user.setUserName(username);
    		model.addAttribute("u", user);
    		session.setMaxInactiveInterval(10);
    	}
        return "demo";
    }
    
    @RequestMapping("/signin")
    public String signin(){
        return "demo";
    }
    
    @RequestMapping("/api")
    public void api( HttpServletResponse response) throws IOException{
    	PrintWriter out = response.getWriter();
        StringBuffer sb = new StringBuffer("nihao");
        out.print(sb.toString());
        out.close();
    }
    
    
}
