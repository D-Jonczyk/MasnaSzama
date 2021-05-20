/*
package com.project.MasnaSzama;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

        @Bean
        public UserDetailsService userDetailsService(){
        UserDetails userDetails = User.withDefaultPasswordEncoder()
                .username("user")
                .password("user1")
                .roles("USER")
                .build();
        UserDetails admin = User.withDefaultPasswordEncoder()
                .username("admin")
                .password("admin1")
                .roles("ADMIN")
                .build();
        return new InMemoryUserDetailsManager(userDetails, admin);
        }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().
                antMatchers("/main").permitAll()
                .anyRequest().hasRole("ADMIN")
                .and()
                .formLogin().permitAll()
                .and()
                .logout().permitAll();


    }
}
*/