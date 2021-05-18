package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.DTO.ClientDTO;
import com.project.MasnaSzama.Repository.Client.ClientRepo;
import com.project.MasnaSzama.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    private final ClientRepo clientRepo;

    @Autowired
    public ClientService(ClientRepo clientRepo ) {
        this.clientRepo = clientRepo;
    }

    public List<ClientDTO> getUserLogin()
    {
        List<ClientDTO> user=clientRepo.getUserLogin();
        return user;
    }


    public ClientDTO postUserLogin(ClientDTO clientDTO) {
        ClientDTO user=clientRepo.postUserLogin(clientDTO.getEmailAdress(),clientDTO.getPassword());
        return user;
    }
}
