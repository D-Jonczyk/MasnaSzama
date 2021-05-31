package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Model.Person.Person;
import com.project.MasnaSzama.Model.User.UserAccount;
import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Service.UserService;
import com.project.MasnaSzama.Service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client")
public class UserController {
    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<UserAccount> getUserAccountByUserId(@PathVariable("id") Long userId) {
        UserAccount userAccount = userService.findUserAccountByUserId(userId);
        return new ResponseEntity<>(userAccount, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<UserAccount> updatedUser(@RequestBody UserAccount userAccount) {
        UserAccount updatedUser = userService.updatedUser(userAccount);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);

    }

    @PutMapping("/loadImage")
    public ResponseEntity<UserAccount> loadImageUser(@RequestBody UserAccount userAccount) {
        UserAccount imageUser = userService.imageUser(userAccount);
        return new ResponseEntity<>(imageUser, HttpStatus.OK);

    }
}