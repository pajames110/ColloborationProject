package com.james.test;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.james.dao.BlogDao;
import com.james.model.Blog;

public class Test {
	
	public static void main(String[] args){
		
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.james.*");
		context.refresh();
		
		
		Blog blog= (Blog) context.getBean("blog");
		BlogDao blogDao= (BlogDao) context.getBean("blogDao");
		
		blog.setBlog_id(1);
 		blog.setTitle("Java Discussion");
 		blog.setStatus(true);
 		
 		blogDao.saveOrUpdateBlog(blog);
 
 		
	}


}
