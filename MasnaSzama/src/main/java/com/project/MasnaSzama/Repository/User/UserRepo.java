package com.project.MasnaSzama.Repository.User;


import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.User.UserAccount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepo extends CrudRepository<UserAccount, Long> {

    Optional<UserAccount> findUserAccountByPersonId(Long personId);

    @Query(value = "SELECT new com.project.MasnaSzama.DTO.UserDTO" +
            "(u.userName, u.userPassword)"+
            "FROM UserAccount u "+
            "WHERE u.userName =?1 and u.userPassword = ?2 ")
    UserDTO getUserLogin(String userName,String userPassword);



}


