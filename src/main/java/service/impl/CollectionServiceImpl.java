package service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bean.BasicResource;
import bean.Maker;
import service.CollectionService;

@Service("CollectionService")
public class CollectionServiceImpl implements CollectionService{

	@Autowired
	Maker maker;
	@Autowired
	BasicResource resource;
	
	@Override
	public int collectWood() {
		// TODO Auto-generated method stub
		resource.setWood(resource.getWood()+10);
		return resource.getWood();
	}

	
}
