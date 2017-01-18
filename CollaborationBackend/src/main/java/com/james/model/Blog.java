package com.james.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Entity
@Component
public class Blog {
	
	@Id
	private String BlogId;
	private String title;
	private String usersID;
	private Date dateOfCreation;
	private String content;
	private String category;
	private int approved;
	private String blogCreationDate;
	
	public String getBlogId() {
		return BlogId;
	}
	public void setBlogId(String blogId) {
		BlogId = blogId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getUsersID() {
		return usersID;
	}
	public void setUsersID(String usersID) {
		this.usersID = usersID;
	}
	public Date getDateOfCreation() {
		return dateOfCreation;
	}
	public void setDateOfCreation(Date dateOfCreation) {
		this.dateOfCreation = dateOfCreation;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getApproved() {
		return approved;
	}
	public void setApproved(int approved) {
		this.approved = approved;
	}
	public String getBlogCreationDate() {
		return blogCreationDate;
	}
	public void setBlogCreationDate(String blogCreationDate) {
		this.blogCreationDate = blogCreationDate;
	}
}
