package com.project.MasnaSzama.Repository.User;

import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Model.User.UserAccount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<UserAccount, Long> {

    @Query(value = "SELECT new com.project.MasnaSzama.DTO.UserDTO" +
            "(u.userName, u.userPassword)"+
            "FROM UserAccount u "+
            "WHERE u.userName = ?1 and u.userPassword = ?2 ")
    UserDTO getUserLogin(String userName, String userPassword);

}
