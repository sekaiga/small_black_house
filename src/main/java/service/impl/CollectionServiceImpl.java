package service.impl;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bean.BasicResource;
import bean.Maker;
import service.CollectionService;

@Service("CollectionService")
public class CollectionServiceImpl implements CollectionService{

	private static Logger log = Logger.getLogger(CollectionServiceImpl.class);
	
	@Autowired
	Maker maker;
	@Autowired
	BasicResource resource;
	
	@Override
	public synchronized int collectWood() {
		log.debug(resource.getWood());
		resource.setWood(resource.getWood()+10);
		return resource.getWood();
	}
	public int collectIron() {
		resource.setIron(resource.getIron()+10);
		return resource.getIron();
	}
	public int collectWool() {
		resource.setWool(resource.getWool()+10);
		return resource.getWool();
	}
	public int collectStone() {
		resource.setStone(resource.getStone()+10);
		return resource.getStone();
	}
	public int collectHuman() {
		resource.setHuman(resource.getHuman()+10);
		return resource.getHuman();
	}
	public int collectMeat() {
		resource.setMeat(resource.getMeat()+10);
		return resource.getMeat();
	}
	public int collectTeeth() {
		resource.setTeeth(resource.getTeeth()+10);
		return resource.getTeeth();
	}
	public int collectScales() {
		resource.setScales(resource.getScales()+10);
		return resource.getScales();
	}
	public int collectBait() {
		resource.setBait(resource.getBait()+10);
		return resource.getBait();
	}

	
}
