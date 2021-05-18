package com.project.MasnaSzama.Repository.User;


import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Model.Person.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends CrudRepository<Customer, Long> {


    @Query(value = "SELECT new com.project.MasnaSzama.DTO.UserDTO" +
            "(u.lastName)"+
            "FROM UserAccount u "+
            "WHERE u.userName =?1 and u.password = ?2 ")
    UserDTO getUserLogin(String userName,String password);

}


