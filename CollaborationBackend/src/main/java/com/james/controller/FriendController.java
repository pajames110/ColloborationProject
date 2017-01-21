package com.james.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.james.dao.FriendDao;
import com.james.model.Friend;

@RestController
public class FriendController {

	@Autowired
	FriendDao friendDao;

	@RequestMapping(value = "/addFriend", headers = "accept=Application/json", method = RequestMethod.POST)
	public void addFriend(@RequestBody Friend friend) {
		friendDao.addFriend(friend);
	}

	@RequestMapping(value = "/viewFriends/{name}", headers = "accept=Application/json", method = RequestMethod.GET)
	public List<Friend> viewFriends(@PathVariable("name") String name) {
		return friendDao.viewFriends(name);
	}

	@RequestMapping(value = "/deleteFriend", headers = "accept=Application/json", method = RequestMethod.POST)
	public void deleteFriend(@RequestBody Friend friend) {
		friendDao.deleteFriend(friend);
	}

	@RequestMapping(value = "/updateFriend", headers = "accept=Application/json", method = RequestMethod.PUT)
	public void updateFriend(@RequestBody Friend friend) {
		friendDao.updateFriend(friend);
	}

}
