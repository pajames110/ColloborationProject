package com.james.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.james.dao.ForumDao;
import com.james.model.Forum;



@RestController
public class ForumController {

	@Autowired
	ForumDao forumDao;
	@RequestMapping(value="/addForum",headers="accept=Application/json",method=RequestMethod.POST)
	public void addForum(@RequestBody Forum forum)
	{
		forumDao.addForum(forum);
	}
	@RequestMapping(value="/viewForums",headers="accept=Application/json",method=RequestMethod.GET)
	public List<Forum> viewForums()
	{
		return forumDao.viewForums();
		
	}

	@RequestMapping(value="/deleteForum",headers="accept=Application/json",method=RequestMethod.POST)
	public void deleteForum(@RequestBody Forum forum)
	{
		forumDao.deleteForum(forum);
	}
	@RequestMapping(value="/updateForum",headers="accept=Application/json",method=RequestMethod.PUT)
	public void updateForum(@RequestBody Forum forum)
	{
		forumDao.updateForum(forum);
	}
	@RequestMapping(value="/viewForum",headers="accept=Application/json",method=RequestMethod.GET)
	public List<Forum> viewForum()
	{
		return forumDao.viewForum(true);
		
	}
	
}
