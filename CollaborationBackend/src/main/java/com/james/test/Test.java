//package com.james.test;
//
//import org.springframework.context.annotation.AnnotationConfigApplicationContext;
//
//import com.james.dao.BlogDao;
//import com.james.model.Blog;
//
//public class Test {
//	
//	public static void main(String[] args){
//		
//		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
//		context.scan("com.james.*");
//		context.refresh();
//		
//		
//		Blog blog= (Blog) context.getBean("blog");
//		BlogDao blogDao= (BlogDao) context.getBean("blogDao");
//		
//		blog.setBlogId("BLOG_01");
// 		blog.setTitle("Java Discussion");
// 		blog.setContent("Java Prepation can be talked over here");;
// 
// 		
//	}
//
//
//}
