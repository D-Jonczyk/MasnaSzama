package com.project.MasnaSzama.DTO;

public class UserDTO {
    private String userName;
    private String userPassword;


    public UserDTO(String userName, String userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;

    }
    public String getUserName(){return userName;}
   public String getUserPassword(){return userPassword;}

}





