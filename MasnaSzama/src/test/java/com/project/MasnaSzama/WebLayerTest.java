package com.project.MasnaSzama;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.MasnaSzama.Model.Order.Order;
import com.project.MasnaSzama.Model.Order.Status;
import com.project.MasnaSzama.Model.Payment.Payment;
import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Date;

@SpringBootTest
@AutoConfigureMockMvc
public class WebLayerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    public void testRestaurantByCity() throws Exception {
        this.mockMvc.perform(get("/restaurant/getbycity?city=krakow")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("McDonald's")));
    }

    @Test
    public void testMealsByCityId() throws Exception {
        this.mockMvc.perform(get("/restaurant//getmeals?id=44")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("acorn")));
    }

   /* @Test
    public void isCreateNewOrderEndpointExist() throws Exception {

        Status status = new Status(10L,"xxx");
        Payment payment = new Payment(1100L);
        Customer customer = new Customer();
        Restaurant restaurant = new Restaurant(1001L);
        Order order = new Order(2,22,"2020-01-01 12:12:12",
                "2020-01-01 13:12:12", 1300L, restaurant,
                customer, payment, status);

        mockMvc.perform(put("/createNewOrder")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(order)))
                .andExpect(status().isOk());
    }*/

}
