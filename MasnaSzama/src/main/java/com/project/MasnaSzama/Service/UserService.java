package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.DTO.UserDTO;
import com.project.MasnaSzama.Repository.User.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public UserDTO getUserLogin(String userName,String userPassword) {
        return userRepo.getUserLogin(userName, userPassword);

    }
}
