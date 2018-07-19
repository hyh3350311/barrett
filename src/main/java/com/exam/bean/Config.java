package com.exam.bean;

public class Config {
	private static final Config config = new Config();
	private int max_get_topic = 100;
	private int hottopic_display_szie=20;
	private int hottopic_time=180;
	public int getHottopic_display_szie() {
		return hottopic_display_szie;
	}
	public int getHottopic_time() {
		return hottopic_time;
	}
	public void setHottopic_time(int hottopic_time) {
		this.hottopic_time = hottopic_time;
	}
	public void setHottopic_display_szie(int hottopic_display_szie) {
		this.hottopic_display_szie = hottopic_display_szie;
	}
	public int getMax_get_topic() {
		return max_get_topic;
	}
	public void setMax_get_topic(int max_get_topic) {
		this.max_get_topic = max_get_topic;
	}
	private Config() {
	}
	public static Config getConfig() {
		return config;
	}
}
