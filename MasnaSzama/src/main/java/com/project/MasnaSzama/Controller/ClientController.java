package com.project.MasnaSzama.Controller;


import com.project.MasnaSzama.DTO.ClientDTO;
import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController ( ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping(path="/getLogin")
    public List<ClientDTO> getUserLogin(){
        return clientService.getUserLogin();
    }

    @PostMapping(path = "/postLogin")
    public ClientDTO postUserLogin(ClientDTO clientDTO) {
        return (ClientDTO) clientService.postUserLogin(clientDTO);
    }

}
