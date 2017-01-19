package com.james.dao;

import java.util.List;

import com.james.model.Forum;


public interface ForumDao {
	
	void addForum(Forum forum);

	List<Forum> viewForums();

	void deleteForum(Forum forum);

	void updateForum(Forum forum);

	List<Forum> viewForum(boolean status);

}
