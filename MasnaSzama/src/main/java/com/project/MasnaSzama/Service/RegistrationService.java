//package com.project.MasnaSzama.Service;
//
//import com.project.MasnaSzama.Model.User.Role;
//import com.project.MasnaSzama.Model.User.UserAccount;
//import com.project.MasnaSzama.auth.EmailValidator;
//import com.project.MasnaSzama.auth.RegistrationRequest;
//import lombok.AllArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@AllArgsConstructor
//public class RegistrationService {
//
//    private final UserAccountService userAccountService;
//    private final EmailValidator emailValidator;
//
//    public String register(RegistrationRequest request) {
//        boolean isValidEmail = emailValidator
//                .test(request.getEmailAddress());
//
//        if(!isValidEmail) {
//            throw new IllegalStateException("email not valid");
//        }
//        return userAccountService.signUpUser(
//                new UserAccount(
//                        request.getUserName(),
//                        request.getEmailAddress(),
//                        request.getUserPassword(),
//                        request.getPerson(),
//                        Role.CUSTOMER
//                )
//        );
//    }
//}
