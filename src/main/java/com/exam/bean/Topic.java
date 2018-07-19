package com.exam.bean;

import java.sql.Date;

public class Topic {
	private int id;
	private String tname;
	private int type;
	private int cid;
	private int sid;
	private Date create_date;
	public String getCreate_date() {
		if (create_date != null){
			return create_date.toString();
		}
		return  null;
	}
	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTname() {
		return tname;
	}
	public void setTname(String tname) {
		this.tname = tname;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getAnswer_item() {
		return answer_item;
	}
	public void setAnswer_item(String answer_item) {
		this.answer_item = answer_item;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public String getAnalysis() {
		return analysis;
	}
	public void setAnalysis(String analysis) {
		this.analysis = analysis;
	}
	public String getImg_url() {
		return img_url;
	}
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	private String answer_item;
	private String answer;
	private String analysis;
	private String img_url;
}
