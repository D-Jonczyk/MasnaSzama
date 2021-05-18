package com.project.MasnaSzama.Controller;


import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public UserDTO getUserLogin(@RequestParam String userName, @RequestParam String password) {
        return (UserDTO) userService.getUserLogin(userName, password);
    }


}
