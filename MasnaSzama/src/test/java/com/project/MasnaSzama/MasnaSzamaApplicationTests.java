package com.project.MasnaSzama;

import com.project.MasnaSzama.Controller.RestaurantController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MasnaSzamaApplicationTests {

	@Autowired
	private RestaurantController restaurantController;

	@Test
	public void contextLoads() throws Exception {
		assertThat(restaurantController).isNotNull();
	}

}
