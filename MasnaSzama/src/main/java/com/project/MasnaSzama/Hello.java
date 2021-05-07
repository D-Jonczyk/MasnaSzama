package com.project.MasnaSzama;

import com.project.MasnaSzama.DTO.ClientDTO;
import com.project.MasnaSzama.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Hello {

    @GetMapping("/hello")
    public String sayHello(){
        return "hello!";
    }

}
