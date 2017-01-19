package com.james.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.james.model.Forum;



public class ForumDaoImpl implements ForumDao {

	@Autowired
	SessionFactory sessionFactory;
		public void addForum(Forum forum) {
			
			sessionFactory.getCurrentSession().save(forum);
		}
		public List<Forum> viewForums() {
		List<Forum> list = sessionFactory.getCurrentSession().createCriteria(Forum.class).list();
			return list;
		}
		
		public void deleteForum(Forum forum) {
		sessionFactory.getCurrentSession().delete(forum);
			
			
		}
		
		public void updateForum(Forum forum) {
			
			sessionFactory.getCurrentSession().update(forum);
		}
		public List<Forum> viewForum(boolean status) {
			String hql="from Forum where status="+"'"+true+"'";
			Query query=sessionFactory.getCurrentSession().createQuery(hql);
			List<Forum> list=  query.list();
			return  list;
		}
}
