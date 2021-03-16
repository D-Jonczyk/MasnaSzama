package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.UserAccount;
import com.project.MasnaSzama.Repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/demo")
public class MainController {
    @Autowired
    private UserAccountRepository userAccountRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewUser (@RequestParam String name,
                                            @RequestParam String email)
    {
        UserAccount n = new UserAccount();
        n.setName(name);
        n.setEmail(email);
        userAccountRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<UserAccount> getAllUsers()
    {
        return userAccountRepository.findAll();
    }
}
