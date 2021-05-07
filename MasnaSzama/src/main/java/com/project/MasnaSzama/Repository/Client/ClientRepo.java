package com.project.MasnaSzama.Repository.Client;


import com.project.MasnaSzama.DTO.ClientDTO;
import com.project.MasnaSzama.DTO.RestaurantMealDTO;
import com.project.MasnaSzama.DTO.RestaurantSummaryDTO;
import com.project.MasnaSzama.Model.Order.Meal;
import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.Restaurant.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.EntityManager;
import java.util.List;

public interface ClientRepo extends CrudRepository<Customer, Long> {
        @Query(value = "SELECT new com.project.MasnaSzama.DTO.ClientDTO" +
                "(u.userName, u.password)"+
                "FROM UserAccount u ")
        List<ClientDTO> getUserLogin();
    }

