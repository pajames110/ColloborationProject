package com.james.dao;

import java.util.List;


import com.james.model.Blog;


public interface BlogDao {
	
	void addBlog(Blog blog);

	List<Blog> viewBlogs();
	List<Blog> viewAllBlogs();
	void deleteBlog(Blog blog);
	void updateBlog(Blog blog);
	/*void updateBlogs(Blog blog);*/
	List<Blog> viewMyBlogs(String postedby);
}
