//package com.project.MasnaSzama.Security;
//
//import com.project.MasnaSzama.Model.User.Role;
//import com.project.MasnaSzama.Service.UserAccountService;
//import lombok.AllArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.cors.CorsConfiguration;
//
//import static com.project.MasnaSzama.Model.User.Role.COURIER;
//
//@Configuration
//@AllArgsConstructor
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    private final PasswordEncoder passwordEncoder;
//    private final UserAccountService userAccountService;
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
//        http
//                .csrf().disable()
//                .authorizeRequests()
//                .antMatchers("/**").permitAll()
//                .antMatchers("/main").permitAll()
//                .antMatchers("/login/**").permitAll()
//                .antMatchers("/restaurant/getbycity").permitAll()
//                .antMatchers("/restaurant/getmeals").permitAll()
//                .antMatchers("/courier/**",
//                        "/order/getDeliveryByCourierId",
//                        "/order/updateDeliveryOrderStatus").hasRole(COURIER.name())
//                .antMatchers("/register/**").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                    .defaultSuccessUrl("/main", true);
//
//    }
//
//    @Override
//    protected void configure (AuthenticationManagerBuilder auth) throws Exception {
//        auth.authenticationProvider(daoAuthenticationProvider());
//    }
//
//    @Bean
//    public DaoAuthenticationProvider daoAuthenticationProvider() {
//        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//        provider.setPasswordEncoder(passwordEncoder);
//        provider.setUserDetailsService(userAccountService);
//        return provider;
//    }
//}
