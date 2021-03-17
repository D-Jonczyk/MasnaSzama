package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.Person.Courier;
import com.project.MasnaSzama.Model.UserAccount;
import com.project.MasnaSzama.Repository.CourierRepository;
import com.project.MasnaSzama.Repository.UserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/demo")
public class MainController {
    @Autowired
    private UserAccountRepository userAccountRepository;
    private CourierRepository courierRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewUser (@RequestParam String name,
                                            @RequestParam String email)
    {
        UserAccount n = new UserAccount();
        n.setUserName(name);
        n.setEmailAddress(email);
        userAccountRepository.save(n);
        return "Saved";
    }

    @PostMapping(path="/sendWorkingHours")
    public @ResponseBody String sendWorkingHours(@RequestParam String startingHour,
                                                 @RequestParam String firstName)
    {
        Courier c = new Courier();
        c.setFirstName(firstName);
        c.setStartingHour(startingHour);
        courierRepository.save(c);
        return "Dodano godzine rozpoczecia: " + startingHour;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<UserAccount> getAllUsers()
    {
        return userAccountRepository.findAll();
    }

}
