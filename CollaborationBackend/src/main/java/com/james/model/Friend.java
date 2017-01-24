package com.james.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Friend {

	@Id@GeneratedValue
	private int id;
		private String name;
		private String friendname;
		private String isOnline;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getFriendname() {
			return friendname;
		}
		public void setFriendname(String friendname) {
			this.friendname = friendname;
		}
		public String getIsOnline() {
			return isOnline;
		}
		public void setIsOnline(String isOnline) {
			this.isOnline = isOnline;
		}
		@Override
		public String toString() {
			return "Friend [id=" + id + ", name=" + name + ", friendname=" + friendname + ", isOnline=" + isOnline
					+ "]";
		}
		
		
		
}
