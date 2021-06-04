//package com.project.MasnaSzama.Service;
//
//import com.project.MasnaSzama.Model.User.UserAccount;
//import com.project.MasnaSzama.Repository.UserAccountRepository;
//import lombok.AllArgsConstructor;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//@AllArgsConstructor
//public class UserAccountService implements UserDetailsService {
//
//    private final static String USER_NOT_FOUND_MSG =
//            "user with name %s not found";
//
//    private final UserAccountRepository userAccountRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    @Override
//    public UserDetails loadUserByUsername(String username)
//            throws UsernameNotFoundException {
//        return userAccountRepository.findByUserName(username)
//                .orElseThrow(() ->
//                        new UsernameNotFoundException(
//                                String.format(USER_NOT_FOUND_MSG, username)));
//    }
//
//    public String signUpUser(UserAccount userAccount) {
//        boolean userExists = userAccountRepository
//                .findByUserName(userAccount.getUserName())
//                .isPresent();
//        boolean emailExists = userAccountRepository
//                .findByEmailAddress(userAccount.getEmailAddress())
//                .isPresent();
//
//        if(userExists) {
//            throw new IllegalStateException("username already taken");
//        }
//        if(emailExists) {
//            throw new IllegalStateException("email already taken");
//        }
//
//        String encodedPassword = passwordEncoder.encode(userAccount.getPassword());
//        userAccount.setUserPassword(encodedPassword);
//        userAccountRepository.save(userAccount);
//
//        return "it works";
//    }
//}
