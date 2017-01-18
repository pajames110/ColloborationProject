package com.james.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.james.model.Blog;

@Transactional
@Repository("blogDao")
public class BlogDaoImpl implements BlogDao {

	@Autowired
	SessionFactory sessionFactory;
	
	public BlogDaoImpl(SessionFactory sessionFactory) {
		System.out.println("inside");
		this.sessionFactory = sessionFactory;
	}

	@Transactional
	public void saveOrUpdateBlog(Blog blog) {
		try {
			System.out.println("inside save or update");
			Session session = sessionFactory.openSession();
			session.saveOrUpdate(blog);
			session.flush();

		} catch (Exception e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
		}

	}

	@Transactional
	public Blog getBlogById(String blogId) {

		String hql = "from Blog where BlogId='" + blogId + "'";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);

		return null;
	}
	@Transactional
	public List<Blog> getAllBlogs() {
		Session session = sessionFactory.openSession();
		Query query = session.createQuery("from blog");
		List<Blog> blog = query.list();

		return blog;
	}

	@Transactional
	public boolean delete(String blogId) {
		try {
			Blog blogToDelete = new Blog();
			blogToDelete.setBlogId(blogId);
			;
			Session session = sessionFactory.openSession();
			session.delete(blogToDelete);
			session.flush();

			return true;
		} catch (HibernateException e) {
			// TODO Auto-generated catch block

			e.printStackTrace();
			return false;
		}
	}

}
