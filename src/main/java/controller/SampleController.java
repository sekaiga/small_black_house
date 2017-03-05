package main.java.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.java.bean.Greeting;

@RestController
@RequestMapping("/sample")
public class SampleController {
	
	@RequestMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(name);
	}
	
	@RequestMapping("/greeting1")
	public String greeting1() {
		return "aa";
	}
}
