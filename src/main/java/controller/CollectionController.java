package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import service.CollectionService;

@RestController
@RequestMapping("/collect")
public class CollectionController {

	@Autowired
	@Qualifier("CollectionService")
	CollectionService controllerService;
	
	@RequestMapping("/wood")
	public int collectWood(){
		return controllerService.collectWood();
	}
	@RequestMapping("/iron")
	public int collectIron(){
		return controllerService.collectIron();
	}
	@RequestMapping("/wool")
	public int collectWool(){
		return controllerService.collectWool();
	}
	@RequestMapping("/stone")
	public int collectStone(){
		return controllerService.collectStone();
	}
	@RequestMapping("/human")
	public int collectHuman(){
		return controllerService.collectHuman();
	}
	@RequestMapping("/meat")
	public int collectMeat(){
		return controllerService.collectMeat();
	}
	@RequestMapping("/teeth")
	public int collectTeeth(){
		return controllerService.collectTeeth();
	}
	@RequestMapping("/scales")
	public int collectScales(){
		return controllerService.collectScales();
	}
	@RequestMapping("/bait")
	public int collectBait(){
		return controllerService.collectBait();
	}
	
}
