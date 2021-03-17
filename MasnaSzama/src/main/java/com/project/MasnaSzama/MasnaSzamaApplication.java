package com.project.MasnaSzama;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@RequestMapping(path = "/")

public class MasnaSzamaApplication {

	public static void main(String[] args) {

		SpringApplication.run(MasnaSzamaApplication.class, args);
	}

	@GetMapping("/")
	public String mainSite(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s! Masna Szama wita", name);
	}

	@GetMapping("/greeting")
	public String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s! Masna Szama wita", name);
	}

	@GetMapping("/users")
	public String getRestaurants() {
		return String.format("Nasze restauracje");
	}
}
