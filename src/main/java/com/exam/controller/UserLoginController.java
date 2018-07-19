package com.exam.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.exam.bean.Account;
import com.exam.bean.ReturnObject;
import com.exam.util.Constants;
import com.exam.util.DBConnector;
import com.exam.util.Utils;

/**
 * 用户可以看到题目但查看不了答案，查看答案必须要登录，登录后如果不是激活状态也不能查看题目答案.
 * 考虑用户可以查看单个题目,故有用户积分制(金币制,用户查看一个题目就会消耗一个积分),包月/年费用户会记录用户的到期时间，到期时间之前都可以查看
 * 题目。但用户可以当日查看题目会有限制（限制次数通过配置文件配置）
 * 用户登录控制系统
 * 
 * 用户可以通过搜索，搜索批量题目
 * @author jyb
 *
 */
@Controller
@RequestMapping("/userlogin")
public class UserLoginController {
	@RequestMapping("/regist")
	public void addUser(
			@RequestParam(value = "username", required = true) String username,
			@RequestParam(value = "mobile", required = true) String mobile,
			@RequestParam(value = "email", required = true) String email,
			@RequestParam(value = "password", required = true) String password
			, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		// TODO 需要记录操作
		Connection conn = null;
		ReturnObject m = new ReturnObject();
		try {
			conn = DBConnector.getConnection();
			conn.setAutoCommit(false);
			String sql = "insert user (account,mobile,email,password) values(?,?,?,?)";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, username);
			statment.setString(2, mobile);
			statment.setString(3, email);
			statment.setString(4, Utils.MD5(password));
			// statment.setString(1, cid);
			int r = statment.executeUpdate();
			if (r <= 0) {
				m.setCode(201);
				m.setMsg("not add success");
			}
			conn.commit();
		} catch (Exception e) {
			try {
				conn.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
			m.setCode(201);
			m.setMsg("not add success");
		} finally {
			Utils.closeConnection(conn);
		}
		Utils.reponse(response, m);

	}
	
	 @RequestMapping("/out")
	 /**
	  * 用户登录系统
	  * */
    public void loginout(HttpSession session,
    		Model model,HttpServletResponse response) throws IOException{
		 Account user = (Account) session.getAttribute("account");
	    	ReturnObject m = new ReturnObject();
	    	if (user != null) {
	    		session.removeAttribute("account");
	    		Utils.reponse(response, m);
				return;
	    	}
	    	System.out.println("sdsdsds"+session.getAttribute("account"));
	    	m.setMsg("not logined");
	    	Utils.reponse(response, m);
	 }
	 @RequestMapping("/in")
	 /**
	  * 用户登录系统
	  * */
    public void login(@RequestParam(value="username", required=false) String username,
    		@RequestParam(value="password", required=false) String password,HttpSession session,
    		Model model,HttpServletResponse response) throws IOException{
		 Account user = (Account) session.getAttribute("account");
		 	System.out.println(session);
	    	ReturnObject m = new ReturnObject();
	    	if (user != null) {
	    		m.setCode(Constants.CODE_SUCCESS);
				m.setMsg(Constants.MSG_SUCCESS);
				Utils.reponse(response, m);
				return;
	    	}
	    	Connection conn = null;
	    	try {
	    		conn = DBConnector.getConnection();
	    		String sql = "select id,account, mobile,email,coin,status,expire_date from bullet.user where account=? and password=?";
				PreparedStatement statment = conn.prepareStatement(sql);
				statment.setString(1, username);
				statment.setString(2, Utils.MD5(password));
				ResultSet resultSet = statment.executeQuery();
				
				if(resultSet.next()) {
					m.setCode(200);
					m.setMsg("success");
					user = new Account();
					int id = resultSet.getInt(1);
					String act = resultSet.getString(2);
					String mobile = resultSet.getString(3);
					String email = resultSet.getString(4);
					int coin = resultSet.getInt(5);
					int status = resultSet.getInt(6);
					Date d = resultSet.getDate(7);
					user.setId(id);
					user.setAccount(act);
					user.setMobile(mobile);
					user.setEmail(email);
					user.setCoin(coin);
					user.setStatus(status);
					if (d == null) {
						d = new Date();
					}
					user.setExpire_date(d);
		    		session.setAttribute("account", user);
		    		session.setMaxInactiveInterval(5*60*60);
		    		
		    		System.out.println("登陆成功"+session);
//					JSON.parseObject("", new TypeReference<ReturnObject>() {});
				}else {
					m.setCode(201);
					m.setMsg("username or password not correct");
				}
				Utils.reponse(response, m);
			} catch (SQLException e) {
				e.printStackTrace();
			}finally {
				Utils.closeConnection(conn);
			}
	 }
	 
}
