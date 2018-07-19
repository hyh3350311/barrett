package com.exam.util;

import java.io.File;
import java.io.IOException;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

public class InitListener implements ApplicationListener<ContextRefreshedEvent> {
    public void onApplicationEvent(ContextRefreshedEvent event) {
//    	System.out.println("xxx---");
//    	try {
//			String s = event.getApplicationContext().getResource("").getFile().getAbsolutePath();
//			System.out.println("xxx"+s);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		String config_file_path = this.getClass().getResource("./config.yml").getFile();
		
    	if(event.getApplicationContext().getParent() == null){//root application context 没有parent，他就是老大.
            //需要执行的逻辑代码，当spring容器初始化完成后就会执行该方法。
    		YamlParser.init(config_file_path);
       }
 }
}