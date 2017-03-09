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
	
}
