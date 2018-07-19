package com.exam.bean;

public class ReturnObject {
	private int code;
	private String msg;
	private Object data;
	public void setCode(int code) {
		this.code = code;
	}
	public ReturnObject() {
		this.code=200;
		this.msg="success";
	}
	public ReturnObject(int code, String msg, Object data) {
		super();
		this.code = code;
		this.msg = msg;
		this.data = data;
	}
	public int getCode() {
		return code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}

}
