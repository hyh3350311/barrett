package com.exam.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.exam.bean.Category;
import com.exam.bean.ReturnObject;
import com.exam.util.Constants;
import com.exam.util.DBConnector;
import com.exam.util.Utils;

@Controller
@RequestMapping("/catgory")
public class CategoryController {
	
	@RequestMapping("/adjustorder")
	public void adjuestOrder(@RequestParam(value = "cid", required = true) String cid,
			@RequestParam(value = "order", required = true) int order,
			HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		Connection conn = null;
		ReturnObject m = new ReturnObject();
		try {
			conn = DBConnector.getConnection();
			conn.setAutoCommit(false);
			String sql = "update category set ob=? where cid=?";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(2, cid);
			statment.setInt(1, order);
			// statment.setString(1, cid);
			int r = statment.executeUpdate();
			if (r <= 0) {
				m.setCode(201);
				m.setMsg("not update success");
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
			m.setMsg("not update success");
		} finally {
			Utils.closeConnection(conn);
		}
		Utils.reponse(response, m);

	}

	@RequestMapping("/add")
	public void add(@RequestParam(value = "cname", required = false) String cname, HttpServletResponse response)
			throws IOException {

		Connection conn = null;
		try {
			conn = DBConnector.getConnection();
			String sql = "insert into bullet.category(cname)values(?)";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, cname);
			int r = statment.executeUpdate();
			ReturnObject m = new ReturnObject();
			if (r <= 0) {
				m.setCode(201);
				m.setMsg("not add success");
			}
			Utils.reponse(response, m);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			Utils.closeConnection(conn);
		}
	}

	@RequestMapping("/update")
	public void update(@RequestParam(value = "cname", required = false) String cname, HttpServletResponse response)
			throws IOException {

		Connection conn = null;
		try {
			conn = DBConnector.getConnection();
			String sql = "update bullet.category set cname=? where cid=?";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, cname);
			// statment.setString(1, cid);
			int r = statment.executeUpdate();
			ReturnObject m = new ReturnObject();
			if (r <= 0) {
				m.setCode(201);
				m.setMsg("not add success");
			}
			Utils.reponse(response, m);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			Utils.closeConnection(conn);
		}
	}

	@RequestMapping("/list")
	public void list(HttpServletResponse response) throws IOException {

		Connection conn = null;
		try {
			conn = DBConnector.getConnection();
			String sql = "select cid,cname ,ob from bullet.category where status=1 order by ob";
			PreparedStatement statment = conn.prepareStatement(sql);
			ResultSet rs = statment.executeQuery();
			ReturnObject m = new ReturnObject();
			List<Category> list= new ArrayList<Category>();
			while (rs.next()) {
				Category c = new Category();
				
				c.setCid(rs.getInt(1));
				c.setCname(rs.getString(2));
				c.setOrder(rs.getInt(3));
				list.add(c);
			}
				m.setCode(Constants.CODE_SUCCESS);
				m.setMsg(Constants.MSG_SUCCESS);
				m.setData(list);
			Utils.reponse(response, m);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			Utils.closeConnection(conn);
		}
	}

	public static Category getCategoryByName(String name) {
		Connection conn = DBConnector.getConnection();
		String sql = "select cid ,cname from category where cname=? and status=1";
		Category c = new Category();
		try {
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, name);
			ResultSet resultset = statment.executeQuery();
			while (resultset.next()) {
				c.setCid(resultset.getInt(1));
				c.setCname(resultset.getString(2));
			}
			statment.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			Utils.closeConnection(conn);
		}
		return c;
	}

}
