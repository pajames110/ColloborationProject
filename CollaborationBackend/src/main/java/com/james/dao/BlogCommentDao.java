package com.james.dao;

import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Repository;

import com.james.model.BlogComment;

@Repository
@ComponentScan("com.james")
public interface BlogCommentDao {

	void addComment(BlogComment blogComment);

	List<BlogComment> viewComments(String blogid);

}
