package com.project.MasnaSzama.Repository;

import com.project.MasnaSzama.Model.User.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    Optional<UserAccount> findByUserName(String userName);
    Optional<UserAccount> findByEmailAddress(String emailAddress);
}
