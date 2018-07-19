package com.exam.controller;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONML;
import org.json.JSONObject;
import org.json.JSONPointer;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.exam.bean.ReturnObject;
import com.exam.bean.User;
import com.exam.util.DBConnector;
import com.exam.util.Utils;
import com.exam.util.WordUtil;

@Controller
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/in")
    public void login(@RequestParam(value="username", required=false) String username,
    		@RequestParam(value="password", required=false) String password,HttpSession session,
    		Model model,HttpServletResponse response) throws IOException{
    	String user = (String) session.getAttribute("user");
    	ReturnObject m = new ReturnObject();
    	if (user != null) {
    		m.setCode(200);
			m.setMsg("success");
//			String s = JSON.toJSONString(m);
//			PrintWriter out = response.getWriter();
//			StringBuffer sb = new StringBuffer(s);
//			out.print(sb.toString());
//			out.close();
			Utils.reponse(response, m);
			return;
    	}
    	Connection conn = null;
    	try {
    		conn = DBConnector.getConnection();
    		String sql = "select * from bullet.operator where username=? and password=?";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, username);
			statment.setString(2, Utils.MD5(password));
			ResultSet resultSet = statment.executeQuery();
			
			if(resultSet.next()) {
				m.setCode(200);
				m.setMsg("success");
	    		session.setAttribute("user", username);
	    		session.setMaxInactiveInterval(60*60);
//				JSON.parseObject("", new TypeReference<ReturnObject>() {});
			}else {
				m.setCode(201);
				m.setMsg("username or password not correct");
			}
//			String s = JSON.toJSONString(m);
//			PrintWriter out = response.getWriter();
//			StringBuffer sb = new StringBuffer(s);
//			out.print(sb.toString());
//			out.close();
			Utils.reponse(response, m);
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			Utils.closeConnection(conn);
		}
//    	if( username != null){
//    		session.setAttribute("user", "nihao");
//    		User user = new User();
//    		user.setUserName(username);
//    		model.addAttribute("u", user);
//    		session.setMaxInactiveInterval(10);
//    	}
    }
    
    @RequestMapping("/signin")
    public void signin(){
        return ;
    }
    
    @RequestMapping("/api")
    public void api( HttpServletResponse response) throws IOException{
    	PrintWriter out = response.getWriter();
        StringBuffer sb = new StringBuffer("nihao");
        out.print(sb.toString());
        out.close();
    }
    
    
}
