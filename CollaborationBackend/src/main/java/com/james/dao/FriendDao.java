package com.james.dao;

import java.util.List;

import com.james.model.Friend;


public interface FriendDao {

	void addFriend(Friend friend);

	void updateFriend(Friend friend);

	void deleteFriend(Friend friend);

	List<Friend> viewFriends(String name);
}
