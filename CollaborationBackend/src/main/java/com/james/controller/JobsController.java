package com.james.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.james.dao.JobsDao;
import com.james.model.Jobs;



@RestController
public class JobsController {
	
	@Autowired
	JobsDao jobsDao;
	@RequestMapping(value="/addJobs",headers="accept=Application/json",method=RequestMethod.POST)
	public void addJobs(@RequestBody Jobs jobs)
	{
		jobsDao.addJobs(jobs);
	}

		

	@RequestMapping(value="/viewJobs",headers="accept=Application/json",method=RequestMethod.GET)
	public List<Jobs> viewJobs()
	{
		return jobsDao.viewJobs();
		
	}
	@RequestMapping(value="/deleteJob",headers="accept=Application/json",method=RequestMethod.POST)
	public void deleteJobs(@RequestBody Jobs jobs)
	{
		jobsDao.deleteJob(jobs);
	}
	@RequestMapping(value="/updateJob",headers="accept=Application/json",method=RequestMethod.PUT)
	public void updateJobs(@RequestBody Jobs jobs)
	{
		jobsDao.updateJob(jobs);
	}

}
