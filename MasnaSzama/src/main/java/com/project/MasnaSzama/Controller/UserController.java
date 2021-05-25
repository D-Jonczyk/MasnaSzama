package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.Person.Customer;
import com.project.MasnaSzama.Model.User.UserAccount;
import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Service.UserService;
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

    @GetMapping(path = "/getLogin")
    public UserDTO getUserLogin(@RequestParam String userName, @RequestParam String userPassword) {
        return (UserDTO) userService.getUserLogin(userName, userPassword);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<UserAccount> getUserAccountByPersonId(@PathVariable("id") Long personId){
        UserAccount userAccount = userService.findUserAccountById(personId);
        return new ResponseEntity<>(userAccount, HttpStatus.OK);
    }

}
