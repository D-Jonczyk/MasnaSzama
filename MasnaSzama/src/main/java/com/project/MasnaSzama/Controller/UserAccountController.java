package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Model.User.UserAccount;
import com.project.MasnaSzama.Service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userAccount")
public class UserAccountController {
    private final UserAccountService userAccountService;

    @Autowired
    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    public UserAccountService getUserAccountService() {
        return userAccountService;
    }


}
