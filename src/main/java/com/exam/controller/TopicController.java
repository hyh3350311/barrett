package com.exam.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.exam.bean.Account;
import com.exam.bean.Category;
import com.exam.bean.Config;
import com.exam.bean.ReturnObject;
import com.exam.bean.Subject;
import com.exam.bean.Topic;
import com.exam.util.Constants;
import com.exam.util.DBConnector;
import com.exam.util.Utils;
import com.exam.util.WordUtil;

@Controller
@RequestMapping("/topic")
public class TopicController {
	@RequestMapping("/answer")
	public String answer()throws IOException {
		return "index";
	}
	
	// 1单选题，2多选题，3判断题，4解答题 ，5填空题
	private int DANXUAN = 1;
	private int DUOXUAN = 2;
	private int PANDUAN = 3;
	private int JIEDA = 4;
	private int TIANKONG = 5;

	@RequestMapping("/add")
	public void add(@RequestParam(value = "tname", required = false) String tname,
			@RequestParam(value = "type", required = false) int type,
			@RequestParam(value = "cid", required = false) int cid,
			@RequestParam(value = "sid", required = false) int sid,
			@RequestParam(value = "answer_item", required = false) String answer_item,
			@RequestParam(value = "answer", required = false) String answer,
			@RequestParam(value = "analysis", required = false) String analysis,
			@RequestParam(value = "img_url", required = false) String img_url, HttpServletResponse response)
			throws IOException {
		Topic topic = new Topic();
		topic.setAnalysis(analysis);
		topic.setAnswer(answer);
		topic.setAnswer_item(answer_item);
		topic.setCid(cid);
		topic.setImg_url(img_url);
		topic.setSid(sid);
		topic.setTname(tname);
		topic.setType(type);
		Connection conn = DBConnector.getConnection();
		ReturnObject re = new ReturnObject();
		try {
			conn.setAutoCommit(false);
			int id = addOneTopic(conn, topic);
			if (id > 0) {
				conn.commit();
				re.setCode(Constants.CODE_SUCCESS);
				re.setMsg(Constants.MSG_SUCCESS);
				Map<String, Integer> map = new HashMap<String, Integer>();
				map.put("id", id);
				re.setData(map);
			} else {
				conn.rollback();
				System.out.println("添加不成功");
				re.setCode(Constants.CODE_ADD_TOPIC_FAIL);
				re.setMsg(Constants.MSG_ADD_TOPIC_FAIL);
			}

		} catch (Exception e) {
			re.setCode(Constants.CODE_ADD_TOPIC_FAIL);
			re.setMsg(Constants.MSG_ADD_TOPIC_FAIL);
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}

		Utils.reponse(response, re);
	}

	@RequestMapping("/list")
	public void list(@RequestParam(value = "tname", required = false) String tname,
			@RequestParam(value = "type", required = false) String type,
			@RequestParam(value = "cid", required = false) String cid,
			@RequestParam(value = "sid", required = false) String sid,
			@RequestParam(value = "start_page", required = true) int start_page,
			@RequestParam(value = "page_size", required = true) int page_size, HttpServletResponse response)
			throws IOException {
		Topic topic = new Topic();
		topic.setCid((cid == null)?0:Integer.parseInt(cid));
		topic.setSid((sid == null)?0:Integer.parseInt(sid));
		topic.setTname(tname);
		topic.setType((type == null)?0:Integer.parseInt(type));
		Connection conn = DBConnector.getConnection();
		ReturnObject re = new ReturnObject();
		try {
			conn.setAutoCommit(false);
			int count = countTopic(conn, topic,start_page,page_size);
			if (count <= 0) {
				re.setCode(Constants.CODE_SUCCESS);
				re.setMsg(Constants.MSG_SUCCESS);
				Map<String, Integer> map = new HashMap<String, Integer>();
				map.put("count", 0);
				re.setData(map);
			} else {
				List<Topic> list = listTopic(conn, topic, start_page, page_size);
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("count", count);
				map.put("list", list);
				re.setData(map);
			}

		} catch (Exception e) {
			re.setCode(Constants.CODE_ADD_TOPIC_FAIL);
			re.setMsg(Constants.MSG_ADD_TOPIC_FAIL);
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}

		Utils.reponse(response, re);
	}

	@RequestMapping("/update")
	public void update(@RequestParam(value = "id", required = true) int id,
			@RequestParam(value = "tname", required = true) String tname,
			@RequestParam(value = "type", required = true) int type,
			@RequestParam(value = "cid", required = true) int cid,
			@RequestParam(value = "sid", required = true) int sid,
			@RequestParam(value = "answer_item", required = false) String answer_item,
			@RequestParam(value = "answer", required = true) String answer,
			@RequestParam(value = "analysis", required = false) String analysis,
			@RequestParam(value = "img_url", required = false) String img_url, HttpServletResponse response)
			throws IOException {
		Topic topic = new Topic();
		topic.setAnalysis(analysis);
		topic.setAnswer(answer);
		topic.setAnswer_item(answer_item);
		topic.setCid(cid);
		topic.setImg_url(img_url);
		topic.setSid(sid);
		topic.setTname(tname);
		topic.setType(type);
		topic.setId(id);
		Connection conn = DBConnector.getConnection();
		ReturnObject re = new ReturnObject();
		try {
			conn.setAutoCommit(false);
			boolean issuccess = updateTopic(conn, topic);
			if (issuccess) {
				conn.commit();
				re.setCode(Constants.CODE_SUCCESS);
				re.setMsg(Constants.MSG_SUCCESS);
				Map<String, Integer> map = new HashMap<String, Integer>();
				map.put("id", id);
				re.setData(map);
			} else {
				conn.rollback();
				re.setCode(Constants.CODE_UPDATE_TOPIC_FAIL);
				re.setMsg(Constants.MSG_UPADTE_TOPIC_FAIL);
			}

		} catch (Exception e) {
			re.setCode(Constants.CODE_UPDATE_TOPIC_FAIL);
			re.setMsg(Constants.MSG_UPADTE_TOPIC_FAIL);
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}

		Utils.reponse(response, re);
	}

	@RequestMapping("/delete")
	public void delete(@RequestParam(value = "id", required = false) int id, HttpServletResponse response)
			throws IOException {
		Topic topic = new Topic();
		topic.setId(id);
		Connection conn = DBConnector.getConnection();
		ReturnObject re = new ReturnObject();
		try {
			conn.setAutoCommit(false);
			boolean issuccess = deleteTopic(conn, topic);
			if (issuccess) {
				conn.commit();
				re.setCode(Constants.CODE_SUCCESS);
				re.setMsg(Constants.MSG_SUCCESS);
				Map<String, Integer> map = new HashMap<String, Integer>();
				map.put("id", id);
				re.setData(map);
			} else {
				conn.rollback();
				re.setCode(Constants.CODE_DELETE_TOPIC_FAIL);
				re.setMsg(Constants.MSG_DELETE_TOPIC_FAIL);
			}

		} catch (Exception e) {
			re.setCode(Constants.CODE_DELETE_TOPIC_FAIL);
			re.setMsg(Constants.MSG_DELETE_TOPIC_FAIL);
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}

		Utils.reponse(response, re);
	}

	public int addOneTopic(Connection conn, Topic topic) throws SQLException {
		String sql = "insert into topic(tname,type,cid,sid,answer_item,answer,analysis,img_url) values (?,?,?,?,?,?,?,?)";
		PreparedStatement statment = conn.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
		statment.setString(1, topic.getTname());
		statment.setInt(2, topic.getType());
		statment.setInt(3, topic.getCid());
		statment.setInt(4, topic.getSid());
		statment.setString(5, topic.getAnswer_item());
		statment.setString(6, topic.getAnswer());
		statment.setString(7, topic.getAnalysis());
		statment.setString(8, topic.getImg_url());
		statment.executeUpdate();
		ResultSet rs = statment.getGeneratedKeys();
		if (rs.next()) {
			int id = rs.getInt(1);
			return id;
		}
		statment.close();
		return 0;
	}

	public boolean updateTopic(Connection conn, Topic topic) throws SQLException {
		String sql = "update topic set tname=? ,type=?,cid=?,sid=?,answer_item=?,answer=?,analysis=?,img_url=? where id=?";
		PreparedStatement statment = conn.prepareStatement(sql);
		statment.setString(1, topic.getTname());
		statment.setInt(2, topic.getType());
		statment.setInt(3, topic.getCid());
		statment.setInt(4, topic.getSid());
		statment.setString(5, topic.getAnswer_item());
		statment.setString(6, topic.getAnswer());
		statment.setString(7, topic.getAnalysis());
		statment.setString(8, topic.getImg_url());
		statment.setInt(9, topic.getId());

		int r = statment.executeUpdate();
		statment.close();
		if (r>0) {
			return true;
		}
		return false;
	}

	public boolean deleteTopic(Connection conn, Topic topic) throws SQLException {
		String sql = "delete from topic where id=?";
		PreparedStatement statment = conn.prepareStatement(sql);
		statment.setInt(1, topic.getId());
		int r = statment.executeUpdate();
		statment.close();
		if (r>0) {
			return true;
		}
		return false;
	}

	private static String gnerateListWhere(Topic topic) {
		String where = "";
		if (topic.getType() > 0) {
			where += " and type=" + topic.getType();
		}
		if (topic.getCid() > 0) {
			where += " and cid=" + topic.getCid();
		}
		if (topic.getSid() > 0) {
			where += " and sid=" + topic.getSid();
		}
		if (topic.getTname() != null) {
			where += " and tname like '%" + topic.getTname() + "%'";
		}
		if (where == "") {
			return "";
		} else {
			where = where.trim().replaceFirst("and", "where");
		}
		return where;
	}

	public int countTopic(Connection conn, Topic topic,int start_page,int page_size) throws SQLException {
		String where = gnerateListWhere(topic);
		String count_sql = "select count(1) from topic  "+where;
		PreparedStatement statment = conn.prepareStatement(count_sql);
		ResultSet resultset = statment.executeQuery();
		int count = 0;
		while (resultset.next()) {
			count = resultset.getInt(1);
		}
		statment.close();
		return count;
	}

	public static List<Topic>  listTopic(Connection conn, Topic _topic, int start_page, int page_size) throws SQLException {
		String where = gnerateListWhere(_topic);
		String sql = "select id,tname,type,cid,sid,answer_item,answer,analysis,img_url ,create_date from topic "+where+" order by id desc limit ?,? ";
		PreparedStatement statment = conn.prepareStatement(sql);
		statment.setInt(1, start_page*page_size);
		statment.setInt(2, page_size);
		ResultSet resultset = statment.executeQuery();
		List<Topic> list = new ArrayList<Topic>();
		while (resultset.next()) {
			Topic topic = new Topic();
			topic.setId(resultset.getInt(1));
			topic.setTname(resultset.getString(2));
			topic.setType(resultset.getInt(3));
			topic.setCid(resultset.getInt(4));
			topic.setSid(resultset.getInt(5));
			topic.setAnswer_item((resultset.getString(6)));
			topic.setAnswer(resultset.getString(7));
			topic.setAnalysis(resultset.getString(8));
			topic.setImg_url(resultset.getString(9));
			topic.setCreate_date(resultset.getDate(10));
			list.add(topic);
		}
		statment.close();
		return list;
	}

	public static Topic selectOneTopic(Connection conn, Topic topic) throws SQLException {
		String sql = "select id,tname,type,cid,sid,answer_item,answer,analysis,img_url from topic where id=?";
		PreparedStatement statment = conn.prepareStatement(sql);
		statment.setInt(1, topic.getId());
		ResultSet resultset = statment.executeQuery();

		while (resultset.next()) {
			topic.setTname(resultset.getString(2));
			topic.setType(resultset.getInt(3));
			topic.setCid(resultset.getInt(4));
			topic.setSid(resultset.getInt(5));
			topic.setAnswer_item((resultset.getString(6)));
			topic.setAnswer(resultset.getString(7));
			topic.setAnalysis(resultset.getString(8));
			topic.setImg_url(resultset.getString(9));
		}
		statment.close();
		return topic;
	}

	@RequestMapping("/batch")
	public void batch(@RequestParam(value = "filenames", required = true) String filenames, HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		ReturnObject m = new ReturnObject();
		ServletContext sc = request.getServletContext();
		String dirPath = sc.getRealPath("/WEB-INF/files/");
		String[] filename_list = filenames.split(";");
		Connection conn = DBConnector.getConnection();
		try {
			conn.setAutoCommit(false);
			a: for (String filename : filename_list) {

				String absolut_path = dirPath + filename;
				String topics = WordUtil.wordParse(absolut_path);
				String[] topic_list = topics.split("\n");
				// 1找试题的大小分类 频道 栏目
				// 2解析试题
				int cid = 0;
				int sid = 0;
				int stage = 0;
				Topic tmp_topic = new Topic();
				Map<String, Topic> topic_map = new HashMap<String, Topic>();
				m.setCode(Constants.CODE_SUCCESS);
				m.setMsg(Constants.MSG_SUCCESS);
				for (int i = 0; i < topic_list.length; i++) {
					String _line = topic_list[i];
					if (_line.trim().startsWith("频道")) {
						String[] split_line = splitByFenhao(_line);
						if (split_line.length != 2) {
							m.setCode(Constants.CODE_BATCH_ADD_TOPIC_TITLE_FAIL);
							m.setMsg("不是一个格式合法的频道栏目信息");
							break a;
						}
						String catgory = split_line[1];
						Category c = CategoryController.getCategoryByName(catgory);
						if (c.getCid() <= 0) {
							m.setCode(Constants.CODE_BATCH_ADD_TOPIC_TITLE_FAIL);
							m.setMsg(Constants.MSG_BATCH_ADD_TOPIC_TITLE_FAIL);
							break a;
						}
						cid = c.getCid();
					} else if (_line.trim().startsWith("栏目")) {
						String[] split_line = splitByFenhao(_line);
						if (split_line.length != 2) {
							m.setCode(Constants.CODE_BATCH_ADD_TOPIC_TITLE_FAIL);
							m.setMsg("不是一个格式合法的频道栏目信息");
							break a;
						}
						String subject = split_line[1];
						Subject s = SubjectController.getSubjectByName(subject, cid);
						if (s.getSid() <= 0) {
							m.setCode(Constants.CODE_BATCH_ADD_TOPIC_TITLE_FAIL);
							m.setMsg(Constants.MSG_BATCH_ADD_TOPIC_TITLE_FAIL);
							break a;
						}
						sid = s.getSid();
						tmp_topic.setCid(cid);
						tmp_topic.setSid(sid);
					} else {
						if (!_line.trim().equals("")) {

							stage = parse_line2topic(i,topic_map, tmp_topic, _line.trim(), stage);
							// 如果map中有new topic 更新当前topic,并且tmp_topic指向新值
							Topic _tmp = topic_map.get("new_topic");
							if (_tmp != null) {
								addOneTopic(conn, tmp_topic);
								tmp_topic = _tmp;
								topic_map.put("new_topic", null);
							}

						}
					}

				}
				addOneTopic(conn, tmp_topic);
			}
			conn.commit();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			m.setCode(Constants.CODE_BATCH_ADD_TOPIC_TITLE_FAIL);
			m.setMsg(e.getMessage());
		} finally {

			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}
		Utils.reponse(response, m);

	}

	private int parse_line2topic(int i,Map<String, Topic> topic_map, Topic topic, String line, int stage) throws Exception {
		if (stage == 0) {
			// 应该导入题目
			if (line == null || line.equals("")) {
				return stage;
			}
			String[] split_line = splitByFenhao(line);
			if (split_line.length < 2) {
				throw new Exception(Utils.subString(line, 10) + ",不是一个格式合法的题目。在第"+i+"行");
			}
			if (!split_line[0].contains("第") || !split_line[0].contains("题")) {
				throw new Exception(Utils.subString(line, 10) + ",不符合‘第*题’格式。在第"+i+"行");
			}
			topic.setTname(Utils.setSplitValue(split_line));
			return ++stage;
		} else if (stage == 1) {
			// 应该导入题目选项和参考答案
			if (line == null || line.equals("")) {
				return stage;
			}

			if (line.contains("参考答案")) {
				setAnswer(i,line, topic);
				return ++stage;
			} else {
				setAnswer_item(i,line, topic);
				return stage;
			}
		} else if (stage == 2) {
			// 设置答案解析，也可能没有解析 怎么判断一个题目已经解析完了
			if (line.contains("答案解析")) {
				setAnalysis(i,line, topic);
				return stage;
			}
			if (line.contains("第") && line.contains("题")) {
				// 从题开始
				Topic _topic = new Topic();

				String[] split_line = splitByFenhao(line);
				if (split_line.length < 2) {
					throw new Exception(Utils.subString(line, 10) + ",不是一个格式合法的题目。在第"+i+"行");
				}
				_topic.setTname(Utils.setSplitValue(split_line));
				_topic.setCid(topic.getCid());
				_topic.setSid(topic.getSid());
				topic_map.put("new_topic", _topic);
				return 1;
			} else {
//				throw new Exception(Utils.subString(line, 10) + ",不符合‘第*题’格式。在第"+i+"行");
				String an = topic.getAnalysis();
				if (an == null) {
					an = line;
				}else {
					an = an + line;
				}
				topic.setAnalysis(an);
				return stage;
			}
		}
		// 如果一个流程结束应该返回-1
		return stage;
	}

	private void setAnalysis(int i,String line, Topic topic) throws Exception {
		String[] split_line = splitByFenhao(line);
		if (split_line.length < 2) {
			throw new Exception(Utils.subString(line, 10) + ",不是一个格式合法的答案解析。在第"+i+"行");
		}
		String analysis = Utils.setSplitValue(split_line);
		topic.setAnalysis(analysis);
	}

	private void setAnswer_item(int i,String line, Topic topic) throws Exception {
		if (topic.getAnswer_item() == null) {
			topic.setAnswer_item(line);
		} else {
			String _item = topic.getAnswer_item();
			topic.setAnswer_item(_item + "<br>" + line);
		}
	}

	private void setAnswer(int i,String line, Topic topic) throws Exception {
		String[] split_line = splitByFenhao(line);
		if (split_line.length < 2) {
			throw new Exception(Utils.subString(line, 10) + ",不是一个格式合法的参考答案。在第"+i+"行");
		}
		String answer = Utils.setSplitValue(split_line);
		boolean isXuanze = Utils.isXuanZe(answer);
		if (isXuanze) {
			topic.setType(DANXUAN);
			if (answer.length() >= 2) {
				topic.setType(DUOXUAN);
			}
		}
		topic.setAnswer(answer);
	}

	private String[] splitByFenhao(String line) {
		String _split = ":";
		if (line.trim().contains("：")) {
			_split = "：";
		} else if (line.trim().contains(":")) {
			_split = ":";
		}
		return line.split(_split);
	}
	
	@RequestMapping("/userlist")
	public void user_list(@RequestParam(value = "tname", required = false) String tname,
			@RequestParam(value = "type", required = false) String type,
			@RequestParam(value = "cid", required = false) String cid,
			@RequestParam(value = "sid", required = false) String sid,
			@RequestParam(value = "start_page", required = true) int start_page,
			@RequestParam(value = "page_size", required = true) int page_size, HttpServletResponse response)
			throws IOException {
		Topic topic = new Topic();
		topic.setCid((cid == null)?0:Integer.parseInt(cid));
		topic.setSid((sid == null)?0:Integer.parseInt(sid));
		topic.setTname(tname);
		topic.setType((type == null)?0:Integer.parseInt(type));
		Connection conn = DBConnector.getConnection();
		ReturnObject re = new ReturnObject();
		try {
			conn.setAutoCommit(false);
			int count = countTopic(conn, topic,start_page,page_size);
			if (count <= 0) {
				re.setCode(Constants.CODE_SUCCESS);
				re.setMsg(Constants.MSG_SUCCESS);
				Map<String, Integer> map = new HashMap<String, Integer>();
				map.put("count", 0);
				re.setData(map);
			} else {
				List<Topic> list = listTopic(conn, topic, start_page, page_size);
				for (Topic t : list) {
					// 此处是给用户模糊查询用。不应该显示答案。
					t.setAnswer(null);
					t.setAnalysis(null);
				}
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("count", count);
				map.put("list", list);
				re.setData(map);
			}

		} catch (Exception e) {
			re.setCode(Constants.CODE_LIST_TOPIC_FAIL);
			re.setMsg(Constants.MSG_LIST_TOPIC_FAIL);
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}

		Utils.reponse(response, re);
	}
	
	@RequestMapping("/userselect")
	public void userselect(
			@RequestParam(value = "tid", required = true) int id,
			@RequestParam(value = "getanswer", required = true) boolean getanswer,
			HttpServletRequest request,
			 HttpServletResponse response)
			throws IOException {
		
		HttpSession session = request.getSession();
		System.out.println("查题目"+session);
		Account user = (Account) session.getAttribute("account");
		ReturnObject m = new ReturnObject();
		if (user == null && getanswer) {
			m.setCode(Constants.CODE_USER_NO_LOGIN);
			m.setMsg(Constants.MSG_USER_NO_LOGIN);
			Utils.reponse(response, m);
			return;
		}
		
		Connection conn = DBConnector.getConnection();
		ReturnObject re = new ReturnObject();
		Topic topic = new Topic();
		topic.setId(id);
		try {
			topic = selectOneTopic(conn, topic);
			if (getanswer) {
			// 检查是否有权限查看题目
				m = UserController.checkAuth(user, String.valueOf(id));
				if (m.getCode() != Constants.CODE_SUCCESS) {
					Utils.reponse(response, m);
					return;
				}
			}else {
				topic.setAnswer(null);
				topic.setAnalysis(null);
			}
			re.setCode(Constants.CODE_SUCCESS);
			re.setMsg(Constants.MSG_SUCCESS);
			re.setData(topic);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}finally {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		Utils.reponse(response, re);
	}

	@RequestMapping("/hottopic")
	public void hottopic(@RequestParam(value = "cid", required = false) Integer cid,
			@RequestParam(value = "sid", required = false) Integer sid,
			HttpServletResponse response)
			throws IOException {
		Connection conn = DBConnector.getConnection();
		ReturnObject re = new ReturnObject();
		try {
			String timedelta=Utils.timedelta(Config.getConfig().getHottopic_time());
			int display_size = Config.getConfig().getHottopic_display_szie();
			String count_sql = "select c.id,c.tname,c.sid from topic c LEFT JOIN access_record a on c.id=a.tid and date>=? where c.cid=? order by count desc,c.id desc limit ?";
			if (sid !=null && sid >0) {
				count_sql = "select c.id,c.tname,c.sid from topic c LEFT JOIN access_record a on c.id=a.tid and date>=? where c.cid=?  and c.sid=? order by count desc,c.id desc limit ?";
			}
			PreparedStatement statment = conn.prepareStatement(count_sql);
			statment.setInt(1, Integer.parseInt(timedelta));
			statment.setInt(2, cid);
			if (sid !=null && sid>0) {
				statment.setInt(3, sid);
				statment.setInt(4, display_size);
			}else {
				statment.setInt(3, display_size);
			}
			ResultSet resultset = statment.executeQuery();
			List<Map<String,String>> tids = new ArrayList<Map<String,String>>();
			while (resultset.next()) {
				int tid = resultset.getInt(1);
				String tname = resultset.getString(2);
				int fsid = resultset.getInt(3);
				Map<String,String> tmap = new HashMap<String,String>();
				tmap.put("id", String.valueOf(tid));
				tmap.put("tname", tname);
				tmap.put("sid", String.valueOf(fsid));
				tids.add(tmap);
			}
			statment.close();
			
			if (tids.size()<=0) {
				re.setCode(Constants.CODE_USER_GET_HOT_TOPIC_FAIL);
				re.setMsg(Constants.MSG_USER_GET_HOT_TOPIC_FAIL);
			}else {
				re.setData(tids);
			}

		} catch (Exception e) {
			re.setCode(Constants.CODE_USER_GET_HOT_TOPIC_FAIL);
			re.setMsg(Constants.MSG_USER_GET_HOT_TOPIC_FAIL);
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}

		Utils.reponse(response, re);
	}
	
	
	public static List<Topic> getHottopic(Integer cid,Integer sid)throws IOException {
		Connection conn = DBConnector.getConnection();
		try {
			String timedelta=Utils.timedelta(Config.getConfig().getHottopic_time());
			int display_size = Config.getConfig().getHottopic_display_szie();
			String count_sql = "select c.id,c.tname,c.sid from topic c LEFT JOIN access_record a on c.id=a.tid and date>=? where c.cid=? order by count desc,c.id desc limit ?";
			if (sid !=null && sid >0) {
				count_sql = "select c.id,c.tname,c.sid from topic c LEFT JOIN access_record a on c.id=a.tid and date>=? where c.cid=?  and c.sid=? order by count desc,c.id desc limit ?";
			}
			PreparedStatement statment = conn.prepareStatement(count_sql);
			statment.setInt(1, Integer.parseInt(timedelta));
			if (sid !=null && sid>0) {
				Category c = SubjectController.getCatgoryBySid(sid);
				statment.setInt(2, c.getCid());
				statment.setInt(3, sid);
				statment.setInt(4, display_size);
			}else {
				statment.setInt(2, cid);
				statment.setInt(3, display_size);
			}
			ResultSet resultset = statment.executeQuery();
			List<Topic> tids = new ArrayList<Topic>();
			while (resultset.next()) {
				int tid = resultset.getInt(1);
				String tname = resultset.getString(2);
//				int fsid = resultset.getInt(3);
				Topic t = new Topic();
				t.setId(tid);
				t.setTname(tname);
				tids.add(t);
			}
			
			return tids;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}
		return null;
	}
	
	
	public static List<Topic> pachongList(String tname,
			 String type,
			String cid,
			 String sid,
			int start_page,
			int page_size)	throws IOException {
		Topic topic = new Topic();
		topic.setCid((cid == null)?0:Integer.parseInt(cid));
		topic.setSid((sid == null)?0:Integer.parseInt(sid));
		topic.setTname(tname);
		topic.setType((type == null)?0:Integer.parseInt(type));
		Connection conn = DBConnector.getConnection();
		try {
			conn.setAutoCommit(false);
				List<Topic> list = listTopic(conn, topic, start_page, page_size);
				for (Topic t : list) {
					// 此处是给用户模糊查询用。不应该显示答案。
					t.setAnswer(null);
					t.setAnalysis(null);
				}
				return list;

		} catch (Exception e) {
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		} finally {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}
		return null;
	}
}
