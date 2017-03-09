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
	public int collectIron() {
		// TODO Auto-generated method stub
		resource.setIron(resource.getIron()+10);
		return resource.getIron();
	}
	public int collectWool() {
		// TODO Auto-generated method stub
		resource.setWool(resource.getWool()+10);
		return resource.getWool();
	}
	public int collectStone() {
		// TODO Auto-generated method stub
		resource.setStone(resource.getStone()+10);
		return resource.getStone();
	}
	public int collectHuman() {
		// TODO Auto-generated method stub
		resource.setHuman(resource.getHuman()+10);
		return resource.getHuman();
	}
	public int collectMeat() {
		// TODO Auto-generated method stub
		resource.setMeat(resource.getMeat()+10);
		return resource.getMeat();
	}
	public int collectTeeth() {
		// TODO Auto-generated method stub
		resource.setTeeth(resource.getTeeth()+10);
		return resource.getTeeth();
	}
	public int collectScales() {
		// TODO Auto-generated method stub
		resource.setScales(resource.getScales()+10);
		return resource.getScales();
	}
	public int collectBait() {
		// TODO Auto-generated method stub
		resource.setBait(resource.getBait()+10);
		return resource.getBait();
	}

	
}
