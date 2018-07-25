package com.exam.controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.exam.bean.Category;
import com.exam.bean.Config;
import com.exam.bean.Subject;
import com.exam.bean.Topic;
import com.exam.util.Constants;
import com.exam.util.DBConnector;
import com.exam.util.Utils;

@Controller
@RequestMapping("/jsp")
public class JspController {

    @RequestMapping("/index")
    public String index(Model model){
    	try {
			List<Category> list = CategoryController.listCatgory();
			model.addAttribute("catgory_list", list);
			model.addAttribute("domain",Config.getConfig().getDomain());
			//  首页栏目
			List<Subject> all_subject_list =  new ArrayList<Subject>();
			List<Topic> all_topic_list =  new ArrayList<Topic>();
			if (list.size()>=3) {
				List<Subject> s1 = SubjectController.listSubject(""+list.get(0).getCid()); 
				List<Subject> s2 = SubjectController.listSubject(""+list.get(1).getCid()); 
				List<Subject> s3 = SubjectController.listSubject(""+list.get(2).getCid()); 
				all_subject_list.addAll(s1);
				all_subject_list.addAll(s2);
				all_subject_list.addAll(s3);
				
				List<Topic> t1 = TopicController.getHottopic(list.get(0).getCid(), null);
				List<Topic> t2 = TopicController.getHottopic(list.get(0).getCid(), null);
				List<Topic> t3 = TopicController.getHottopic(list.get(0).getCid(), null);
				all_topic_list.addAll(t1);
				all_topic_list.addAll(t2);
				all_topic_list.addAll(t3);
			}
			model.addAttribute("subject_list", all_subject_list);
			model.addAttribute("hot_list", all_topic_list);
			// 首页热点答案
			
			// 首页最新试题
			List<Topic> new_topic_list = TopicController.pachongList(null, null, null, null, 0, 20);
			model.addAttribute("new_topic_list", new_topic_list);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return "index";
    }
    
    @RequestMapping("/subject")
    public String subject(@RequestParam(value = "cid", required = false) Integer cid,
			@RequestParam(value = "sid", required = false) Integer sid,HttpServletRequest request,
			HttpServletResponse response,Model model){
    	model.addAttribute("domain",Config.getConfig().getDomain());
    	try {
	    	if (cid != null) {
	    		List<Topic> t1 = TopicController.getHottopic(cid, null);
	    		List<Topic> new_topic_list = TopicController.pachongList(null, null, ""+cid, null, 0, 20);
	    		List<Subject> s1 = SubjectController.listSubject(""+cid); 
	    		model.addAttribute("subject_list",s1);
	    		model.addAttribute("hot_list",t1);
	    		model.addAttribute("new_topic_list",new_topic_list);
	    	}
	    	if (sid != null) {
	    		List<Topic> t1 = TopicController.getHottopic(null, sid);
	    		List<Topic> new_topic_list = TopicController.pachongList(null, null, null, ""+sid, 0, 20);
	    		List<Subject> s1 = SubjectController.listSubject(""+cid); 
	    		model.addAttribute("subject_list",s1);
	    		model.addAttribute("hot_list",t1);
	    		model.addAttribute("new_topic_list",new_topic_list);
	    	}
    	}catch (Exception e) {
    		e.getStackTrace();
		}
    	return "subject";
    }
    
    @RequestMapping("/answer")
    public String answer(@RequestParam(value = "tid", required = true) Integer tid,
			HttpServletResponse response,Model model){
    	model.addAttribute("domain",Config.getConfig().getDomain());
    	Topic topic = new Topic();
		topic.setId(tid);
		Connection conn = DBConnector.getConnection();
		try {
			topic = TopicController.selectOneTopic(conn, topic);
			topic.setAnswer(null);
			topic.setAnalysis(null);
			model.addAttribute("topic",topic);
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
    	return "answer";
    }
}