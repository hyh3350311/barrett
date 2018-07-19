package com.exam.util;

import redis.clients.jedis.Jedis;

public class RedisUtil {
	private static String host = null;
	private static int port ;
	private static final String PREFIX_U_T = "v_u_t_"; // 用户的当天可以查看的题目集合 key前缀
	private static final String PREFIX_U_C = "v_u_c_"; // 当天题目计数 v_u_c_yyyymmdd_username 
	
	
	private static Jedis jedis = null;
	public static String getHost() {
		return host;
	}
	public static void setHost(String host) {
		RedisUtil.host = host;
	}
	public static int getPort() {
		return port;
	}
	public static void setPort(int port) {
		RedisUtil.port = port;
	}
	public static void init() {
		if (jedis == null) {
			jedis = new Jedis(host, port);
		}
	}
	public static String get(String key) {
		String value = jedis.get(key);
		return value;
	}
	
	public static void set(String key, String value) {
		jedis.setex(key, 24*60*60, value);
	}
	
	public static void setTopic(String username,String topic_id) {
		if (!jedis.exists(PREFIX_U_T+"_"+username+"_"+topic_id)) {
			jedis.incr(PREFIX_U_T+"_"+username+"_"+topic_id);
			jedis.expire(PREFIX_U_T+"_"+username+"_"+topic_id, 30*24*60*60);
		}
	}
	
	public static boolean exsitsTopic(String username,String topic_id) {
		return jedis.exists(PREFIX_U_T+"_"+username+"_"+topic_id);
	}
	

	public static void incrementQueryCount(String username) {
		if (!jedis.exists(PREFIX_U_C+Utils.getFormatCurDate()+"_"+username)) {
			jedis.incr(PREFIX_U_C+Utils.getFormatCurDate()+"_"+username);
			jedis.expire(PREFIX_U_C+Utils.getFormatCurDate()+"_"+username, 24*60*60);
		}else {
			jedis.incr(PREFIX_U_C+Utils.getFormatCurDate()+"_"+username);
		}
	}
	
	public static int getQueryCount(String username) {
		String count = jedis.get(PREFIX_U_C+Utils.getFormatCurDate()+"_"+username);
		if (count == null || count.equals("")) {
			return 0;
		}
		return Integer.parseInt(count);
	}
}
