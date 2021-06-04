package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.Exception.UserNotFoundException;
import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Model.Person.Person;
import com.project.MasnaSzama.Model.User.UserAccount;
import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Repository.User.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    public UserAccount findUserAccountByUserId(Long userId){
        return userRepo.findUserAccountByUserId(userId)
                .orElseThrow(() -> new UserNotFoundException("User by id " + userId + "was not found."));
    }

    public UserAccount updatedUser(UserAccount userAccount) {
        return userRepo.save(userAccount);
    }
    public UserAccount imageUser (UserAccount userAccount) {
        return userRepo.save(userAccount);
    }

}
