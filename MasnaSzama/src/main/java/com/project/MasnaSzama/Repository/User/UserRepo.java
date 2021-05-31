package com.project.MasnaSzama.Repository.User;

import com.project.MasnaSzama.Model.User.UserAccount;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<UserAccount, Long> {

}


