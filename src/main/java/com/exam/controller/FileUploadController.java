package com.exam.controller;

import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.alibaba.fastjson.JSON;
import com.exam.bean.ReturnObject;
import com.exam.util.Constants;
import com.exam.util.Utils;

@Controller
@RequestMapping("/upload")
public class FileUploadController {

	 @RequestMapping("/up")
	    public void upload(HttpServletRequest request,HttpServletResponse response)throws Exception{
		 ServletContext sc = request.getServletContext();
		 ReturnObject m = new ReturnObject();
		 	
		    try{  
		        request.setCharacterEncoding("utf-8");  
		        //创建一个通用的多部分解析器  
		        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(sc);  
		        //判断 request 是否有文件上传,即多部分请求
		        List<String> urls = new ArrayList<String>();
		        Map<String,List> data = new HashMap<String,List >();
		        if(multipartResolver.isMultipart(request)){  
		            //转换成多部分request    
		            MultipartHttpServletRequest multiRequest =           
		                    multipartResolver.resolveMultipart(request);  
		            //取得request中的所有文件名  
		            Iterator<String> iter = multiRequest.getFileNames();  
		            while(iter.hasNext()){ 
		                //取得上传文件  
		                MultipartFile file = multiRequest.getFile(iter.next());  
		                if(file != null){  
		                    //取得当前上传文件的文件名称  
		                    String myFileName = file.getOriginalFilename();  
		                    //如果名称不为“”,说明该文件存在，否则说明该文件不存在  
		                    if(myFileName.trim() !=""){
		                        //重命名上传后的文件名  
		                        String fileName = file.getOriginalFilename();  
		                        //定义上传路径  
		                        String dirPath = sc.getRealPath("/WEB-INF/files/");  
//		                        String dirPath = "C:\\Users\\jyb\\Desktop\\";
		                        File dir = new File(dirPath);  
		                        if(!dir.exists()){  
		                            dir.mkdirs();  
		                        }  
		                        long current_timestamp = System.currentTimeMillis();
		                        
		                        File localFile = new File(dir,current_timestamp+"_"+fileName);  
		                        file.transferTo(localFile);  
		                        urls.add(current_timestamp+"_"+fileName);
		                        System.out.println(localFile.getAbsolutePath());
		                        //结果绑定文件路径  
		                          
		                    }  
		                }  
		            }
		            data.put("urls", urls);
		            m.setData(data);
		            m.setCode(Constants.CODE_SUCCESS);
				   	m.setMsg(Constants.MSG_SUCCESS);
		        }else {
		        	m.setCode(203);
				   	m.setMsg("not a file request");
		        }  
		  
		    }catch(Exception e){  
		        e.printStackTrace();  
		        m.setCode(202);
			    m.setMsg("failed,"+e.getMessage());
		    }  
		    System.out.println("aa"+System.currentTimeMillis());
		    Utils.reponse(response, m);
	    }
}
