package com.james.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.james.dao.BlogCommentDao;
import com.james.model.BlogComment;


@RestController
public class BlogCommentController {

	@Autowired
	BlogCommentDao blogCommentDao;

	@RequestMapping(value = "/addComment", headers = "accept=Application/json", method = RequestMethod.POST)
	public void addComment(@RequestBody BlogComment blogComment) {
		blogCommentDao.addComment(blogComment);
	}

	@RequestMapping(value = "/viewComments/{blogid}", headers = "accept=Application/json", method = RequestMethod.GET)
	public List<BlogComment> viewComments(@PathVariable("blogid") String blogid) {
		System.out.println("in comment controller");
		return blogCommentDao.viewComments(blogid);

	}
}
