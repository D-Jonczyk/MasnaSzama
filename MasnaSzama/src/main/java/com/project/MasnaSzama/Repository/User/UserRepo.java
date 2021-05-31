package com.project.MasnaSzama.Repository.User;

import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Model.Person.Person;
import com.project.MasnaSzama.Model.User.UserAccount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepo extends CrudRepository<UserAccount, Long> {

    Optional<UserAccount> findUserAccountByUserId(Long userId);
}
