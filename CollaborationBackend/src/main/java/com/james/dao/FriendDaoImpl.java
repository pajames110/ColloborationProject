package com.james.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.james.model.Friend;

@Transactional
@Repository
public class FriendDaoImpl implements FriendDao {

	@Autowired
	SessionFactory sessionfactory;

	public void addFriend(Friend friend) {

		friend.setIsOnline("offline");
		sessionfactory.getCurrentSession().save(friend);
	}

	public void updateFriend(Friend friend) {
		sessionfactory.getCurrentSession().update(friend);
	}

	public void deleteFriend(Friend friend) {
		sessionfactory.getCurrentSession().delete(friend);
	}

	public List<Friend> viewFriends(String name) {
		Criteria ct = sessionfactory.getCurrentSession().createCriteria(Friend.class);
		ct.add(Restrictions.eq("name", name));

		List list = ct.list();
	
		System.out.println(""+list.toString());
		
		return list;
	}
}
