package com.james.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.james.model.Blog;


public interface BlogDao {
	
	public void saveOrUpdateBlog(Blog blog);
	
	public Blog getBlogById(String blogId);
	
	public List<Blog> getAllBlogs();
	
	public boolean delete(String blogId);

}
