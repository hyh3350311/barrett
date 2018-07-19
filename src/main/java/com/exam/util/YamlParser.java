package com.exam.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.ho.yaml.Yaml;
import org.springframework.context.ApplicationContext;

import com.exam.bean.Config;

public class YamlParser {
	@SuppressWarnings("unchecked")
	public static void init(String config_file_path) {
		try {
//			Object obj = Yaml.load(new File("db.yml"));
			HashMap<String, Object> db_config = (HashMap<String, Object>)Yaml.load(new File(config_file_path));
			String env = (String) db_config.get("env");
			HashMap<String, Object> env_config = (HashMap<String, Object>) db_config.get(env);	
			HashMap<String, String> db_user = (HashMap<String, String>)env_config.get("db");
			DBConnector.setDriver(db_user.get("driver"));
			DBConnector.setJdbcUrl(db_user.get("jdbcUrl"));
			DBConnector.setUser(db_user.get("user"));
			DBConnector.setPassword(db_user.get("password"));
			
			HashMap<String, Object> redis_config = (HashMap<String, Object>)env_config.get("redis");
			RedisUtil.setHost(redis_config.get("host").toString());
			RedisUtil.setPort((Integer)redis_config.get("port"));
			RedisUtil.init();
			
			HashMap<String, Object> com_config = (HashMap<String, Object>)env_config.get("config");
			Config.getConfig().setMax_get_topic((Integer)com_config.get("max_query"));
			
			Config.getConfig().setHottopic_display_szie((Integer)com_config.get("hottopic_display_size"));
			
			Config.getConfig().setHottopic_time((Integer)com_config.get("hottopic_time"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} 
		
	}
}
