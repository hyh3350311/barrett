package com.exam.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.MessageDigest;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.exam.bean.ReturnObject;

public class Utils {
	
	public static void closeConnection(Connection conn) {
		if (conn != null){
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void reponse(HttpServletResponse response,ReturnObject m) {
		String s = JSON.toJSONString(m);
		PrintWriter out;
		try {
//			response.setHeader("Access-Control-Allow-Origin", "*");
//			response.setHeader("Access-Control-Allow-Credentials", "true");
			response.setHeader("content-type", "text/html;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			out = response.getWriter();
			StringBuffer sb = new StringBuffer(s);
			out.print(sb.toString());
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	
	public static String MD5(String s) {
		if(s == null) {
			return s;
		}
	    try {
	        MessageDigest md = MessageDigest.getInstance("MD5");
	        byte[] bytes = md.digest(s.getBytes("utf-8"));
	        return toHex(bytes);
	    }
	    catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}
	private static String toHex(byte[] bytes) {

	    final char[] HEX_DIGITS = "0123456789ABCDEF".toCharArray();
	    StringBuilder ret = new StringBuilder(bytes.length * 2);
	    for (int i=0; i<bytes.length; i++) {
	        ret.append(HEX_DIGITS[(bytes[i] >> 4) & 0x0f]);
	        ret.append(HEX_DIGITS[bytes[i] & 0x0f]);
	    }
	    return ret.toString().toLowerCase();
	}
	
	public static boolean isXuanZe(String str) {
	    // 邮箱验证规则
	    String regEx = "[A-Z]{1,}";
	    // 编译正则表达式
	    Pattern pattern = Pattern.compile(regEx);
	    // 忽略大小写的写法
	    // Pattern pat = Pattern.compile(regEx, Pattern.CASE_INSENSITIVE);
	    Matcher matcher = pattern.matcher(str);
	    // 字符串是否与正则表达式相匹配
	    boolean rs = matcher.matches();
	    return rs;
	}
	
	public static String getFormatCurDate() {
		Date today = new Date(); 
    	SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd"); 
    	String formattedDate = formatter.format(today);
    	return formattedDate;
	}
	
	public static String subString(String line,int n) {
		if (line==null) {
			return "";
		}
		if (n <=0) {
			return line;
		}
		if (line.length() < n) {
			return line;
		}
		return line.substring(0, n);
	}
	public static String setSplitValue(String[] split_line) {
		String s="";
		for(int i=1;i<split_line.length;i++) {
			s+=split_line[i];
		}
		return s;
	}
	
	public static String timedelta(int delta) {
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        Calendar c = Calendar.getInstance();
         
        //过去七天
        c.setTime(new Date());
        c.add(Calendar.DATE, delta);
        Date d = c.getTime();
        String day = format.format(d);
        return day;
	}
}
