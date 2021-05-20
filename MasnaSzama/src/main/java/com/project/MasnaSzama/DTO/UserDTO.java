package com.project.MasnaSzama.DTO;

public class UserDTO {
    private String userName;
    private String password;


    public UserDTO(String userName, String password) {
        this.userName = userName;
        this.password = password;

    }
    public String getUserName(){return userName;}
   public String getPassword(){return password;}

}





