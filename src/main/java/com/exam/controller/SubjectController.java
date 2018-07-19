package com.exam.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.exam.bean.Category;
import com.exam.bean.ReturnObject;
import com.exam.bean.Subject;
import com.exam.util.Constants;
import com.exam.util.DBConnector;
import com.exam.util.Utils;

@Controller
@RequestMapping("/subject")
public class SubjectController {
	
	@RequestMapping("/adjustorder")
	public void adjuestOrder(@RequestParam(value = "sid", required = true) String sid,
			@RequestParam(value = "order", required = true) int order,
			HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		Connection conn = null;
		ReturnObject m = new ReturnObject();
		try {
			conn = DBConnector.getConnection();
			conn.setAutoCommit(false);
			String sql = "update subject set ob=? where sid=?";
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(2, sid);
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
	public void add(@RequestParam(value = "sname", required = false) String sname,@RequestParam(value = "cname", required = false) String cname, HttpServletResponse response)
			throws IOException {

		Connection conn = null;
		try {
			conn = DBConnector.getConnection();
			String sql = "insert into bullet.subject(sname,cid)values(?,?)";
			Category c = CategoryController.getCategoryByName(cname);
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, sname);
			statment.setInt(2, c.getCid());
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
	public void list(@RequestParam(value = "cid", required = false) String ctid,HttpServletResponse response) throws IOException {

		Connection conn = null;
		try {
			conn = DBConnector.getConnection();
			String sql = "select s.sid,s.sname,s.cid,c.cname,s.ob,c.ob from bullet.subject s join category c on s.cid=c.cid order by c.ob,s.ob,s.sid";
			if (ctid != null && !ctid.equals("")) {
				sql = "select s.sid,s.sname,s.cid,c.cname,s.ob,c.ob from bullet.subject s join category c on s.cid=c.cid and c.cid="+ctid+" order by c.ob,s.ob,s.sid";
			}
			PreparedStatement statment = conn.prepareStatement(sql);
			ResultSet resultset = statment.executeQuery();
			List<Subject> list = new ArrayList<Subject>();
			ReturnObject re = new ReturnObject();
			Map<Integer, Map<String,Object>> map = new LinkedHashMap<Integer, Map<String,Object>>();
			while (resultset.next()) {
				Subject c = new Subject();
				c.setSid(resultset.getInt(1));
				c.setCid(resultset.getInt(3));
				c.setSname(resultset.getString(2));
				c.setOrder(resultset.getInt(5));
//				list.add(c);
				int cid = resultset.getInt(3);
				String cname = resultset.getString(4);
				 Map<String,Object> smap = map.get(cid);
				 if (smap == null) {
					 smap = new HashMap<String, Object>();
					 map.put(cid, smap);
				 }
				 smap.put("cid", cid);
				 smap.put("cname", cname);
				 Object olist = smap.get("list");
				 if (olist == null) {
					 olist = new ArrayList<Subject>();
					 smap.put("list", olist);
				 }
				 List<Subject> slist = (List<Subject>) olist;
				 slist.add(c);
			}
			
			re.setCode(Constants.CODE_SUCCESS);
			re.setMsg(Constants.MSG_SUCCESS);
			re.setData(map.values());
			Utils.reponse(response, re);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			Utils.closeConnection(conn);
		}
	}
	
	public static Subject getSubjectByName(String name,int cid) {
		Connection conn = DBConnector.getConnection();
		String sql = "select sid ,sname,cid from subject where sname=?  and cid=?";
		Subject c = new Subject();
		try {
			PreparedStatement statment = conn.prepareStatement(sql);
			statment.setString(1, name);
			statment.setInt(2, cid);
			ResultSet resultset = statment.executeQuery();
			while (resultset.next()) {
				c.setSid(resultset.getInt(1));
				c.setCid(resultset.getInt(3));
				c.setSname(resultset.getString(2));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return c;
	}
}
