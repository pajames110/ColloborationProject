package com.james.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Jobs {

	@Id
	@GeneratedValue
	private int job_id;
	private String job_name;
	private String job_role;
	private String job_requirements;
	private String job_description;

	public int getJob_id() {
		return job_id;
	}

	public void setJob_id(int job_id) {
		this.job_id = job_id;
	}

	public String getJob_name() {
		return job_name;
	}

	public void setJob_name(String job_name) {
		this.job_name = job_name;
	}

	public String getJob_role() {
		return job_role;
	}

	public void setJob_role(String job_role) {
		this.job_role = job_role;
	}

	public String getJob_requirements() {
		return job_requirements;
	}

	public void setJob_requirements(String job_requirements) {
		this.job_requirements = job_requirements;
	}

	public String getJob_description() {
		return job_description;
	}

	public void setJob_description(String job_description) {
		this.job_description = job_description;
	}

}
