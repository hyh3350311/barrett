package com.exam.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Time;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.exam.bean.Account;
import com.exam.bean.Config;
import com.exam.bean.ReturnObject;
import com.exam.util.Constants;
import com.exam.util.DBConnector;
import com.exam.util.RedisUtil;
import com.exam.util.Utils;

/**
 * @author jyb
 *
 */
@Controller
@RequestMapping("/user")
public class UserController {

	@RequestMapping("/addvip")
	public void addUser(@RequestParam(value = "username", required = true) String username,
			@RequestParam(value = "add_length", required = true) int add_length, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		// TODO 需要记录操作
		Connection conn = null;
		ReturnObject m = new ReturnObject();
		try {
			conn = DBConnector.getConnection();
			conn.setAutoCommit(false);
			String sql = "update user set expire_date=DATE_ADD(if (now()>expire_date,now(),expire_date),INTERVAL ? DAY) where account=?";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(2, username);
			statment.setInt(1, add_length);
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

	@RequestMapping("/addcoin")
	public void addCoin(@RequestParam(value = "username", required = true) String username,
			@RequestParam(value = "coin", required = true) int coin, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		// TODO 需要记录操作
		Connection conn = null;
		ReturnObject m = new ReturnObject();
		try {
			conn = DBConnector.getConnection();
			conn.setAutoCommit(false);
			String sql = "update user set coin=coin+? where account=?";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setInt(1, coin);
			statment.setString(2, username);
			// statment.setString(1, cid);
			int r = statment.executeUpdate();
			if (r <= 0) {
				m.setCode(201);
				m.setMsg("not add success");
			}
			// TODO添加成功后需要让用户信息刷新
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

	@RequestMapping("/getcoin")
	public void getCoin(HttpServletRequest request, HttpServletResponse response) throws IOException {
		HttpSession session = request.getSession();
		Account user = (Account) session.getAttribute("account");
		System.out.println("sdsdsdsdf-----"+session.getAttribute("account"));
		ReturnObject m = new ReturnObject();
		if (user == null) {
			m.setCode(Constants.CODE_USER_NO_LOGIN);
			m.setMsg(Constants.MSG_USER_NO_LOGIN);
			Utils.reponse(response, m);
			return;
		}
		int coin = user.getCoin();

		m.setCode(Constants.CODE_SUCCESS);
		m.setMsg(Constants.MSG_SUCCESS);
		Map<String, Integer> coinMap = new HashMap<String, Integer>();
		coinMap.put("coin", coin);
		m.setData(coinMap);
		Utils.reponse(response, m);

	}

	@RequestMapping("/takecoin")

	public void authTopicByDecCoin(@RequestParam(value = "username", required = true) String username,
			@RequestParam(value = "tid", required = true) String tid, HttpServletRequest request,
			HttpServletResponse response) throws IOException {

		HttpSession session = request.getSession();
		Account user = (Account) session.getAttribute("account");
		ReturnObject m = new ReturnObject();
		if (user == null) {
			m.setCode(Constants.CODE_USER_NO_LOGIN);
			m.setMsg(Constants.MSG_USER_NO_LOGIN);
			Utils.reponse(response, m);
			return;
		}
		boolean success = takeCoin(username, tid);

		if (!success) {
			m.setCode(Constants.CODE_USER_DEC_COIN_FAIL);
			m.setMsg(Constants.MSG_USER_DEC_COIN_FAIL);
		} else {
			m.setCode(Constants.CODE_SUCCESS);
			m.setMsg(Constants.MSG_SUCCESS);
			user.setCoin(user.getCoin() - 1);
		}
		Utils.reponse(response, m);
	}

	public int getUserCoin(HttpServletRequest request) {
		HttpSession session = request.getSession();
		Account user = (Account) session.getAttribute("account");
		if (user == null) {
			return 0;
		}
		return user.getCoin();
	}

	public boolean takeCoin(String account_id, String topicid) {
		boolean dec_success = decCoin(account_id);
		if (dec_success) {
			RedisUtil.setTopic(account_id, topicid);
			return true;
		}
		return false;
	}

	public boolean decCoin(String account_id) {
		Connection conn = null;
		try {
			conn = DBConnector.getConnection();
			conn.setAutoCommit(false);
			String sql = "update bullet.user set coin=coin-1 where account=? and coin > 0";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, account_id);
			// statment.setString(1, cid);
			int r = statment.executeUpdate();
			if (r <= 0) {
				return false;
			}
			conn.commit();
		} catch (SQLException e) {
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		} finally {
			Utils.closeConnection(conn);
		}
		return true;
	}

	public static ReturnObject checkAuth(Account account, String topicid) {
		ReturnObject m = new ReturnObject();
		String username = account.getAccount();

		if (RedisUtil.exsitsTopic(username, topicid)) {
			m.setCode(Constants.CODE_SUCCESS);
			m.setMsg(Constants.MSG_SUCCESS);
			return m;
		}

		if (account.getExpire_date().after(new Date())) {
			// 是vip用户，今天是否可以查看
			int count = RedisUtil.getQueryCount(username);
			if (count >= Config.getConfig().getMax_get_topic()) {
				m.setCode(Constants.CODE_USER_GET_TOPIC_MAX);
				m.setMsg(Constants.MSG_USER_GET_TOPIC_MAX);
				return m;
			}
			// 否则计入redis中
			RedisUtil.setTopic(username, topicid);
			RedisUtil.incrementQueryCount(username);
			m.setCode(Constants.CODE_SUCCESS);
			m.setMsg(Constants.MSG_SUCCESS);
			return m;
		} else {
			// 如果有金币 是金币用户，否则提示没有权限查看
			if (account.getCoin() > 0) {
				m.setCode(Constants.CODE_USER_COIN_EXISTS);
				m.setMsg(Constants.MSG_USER_COIN_EXISTS);
			} else {
				m.setCode(Constants.CODE_USER_COIN_EXISTS);
				m.setMsg(Constants.MSG_USER_COIN_EXISTS);
			}

		}
		return m;
	}

}
