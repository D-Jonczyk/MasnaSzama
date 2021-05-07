package com.project.MasnaSzama.DTO;

public class ClientDTO {
    private String emailAdress;
    private String password;

    public ClientDTO(String emailAdress, String password) {
        this.emailAdress = emailAdress;
        this.password = password;
    }
    public String getEmailAdress(){return emailAdress;}
    public String getPassword(){return password;}
}





