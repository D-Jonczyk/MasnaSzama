package com.project.MasnaSzama.DTO;

public class ClientDTO {
    private String userName;
    private String password;

    public ClientDTO(String emailAdress, String password) {
        this.userName = emailAdress;
        this.password = password;
    }
    public String getEmailAdress(){return userName;}
    public String getPassword(){return password;}
}





