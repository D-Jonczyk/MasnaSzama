package com.project.MasnaSzama.DTO;

public class UserDTO {
    private String userName;
    private String password;
    private String userRole;

    public UserDTO(String userName, String password, String userRole) {
        this.userName = userName;
        this.password = password;
        this.userRole = userRole;
    }
    public String getUserName(){return userName;}

    public String getPassword(){return password;}

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}





