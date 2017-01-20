package com.james.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.james.model.BlogComment;


@Transactional
@Repository
@ComponentScan("com.james")
public class BlogCommentDaoImpl implements BlogCommentDao{
	
	@Autowired
	SessionFactory sessionfactory;
	public void addComment(BlogComment blogComment) {
		
		sessionfactory.getCurrentSession().save(blogComment);
	}

	public List<BlogComment> viewComments(String blogid) {
		System.out.println("in comment daoimpl");
		Criteria ct=sessionfactory.getCurrentSession().createCriteria(BlogComment.class);
		 ct.add(Restrictions.eq("blogid", blogid));
		 List list=ct.list();
		 
		return list;
	}

}
