package com.project.MasnaSzama.DTO;

public class UserDTO {
   // private String userName;
  //  private String password;
    private String lastName;

    public UserDTO(/*String userName, String password,*/ String lastName) {
      //  this.userName = userName;
      //  this.password = password;
        this.lastName = lastName;
    }
  //  public String getUserName(){return userName;}
  //  public String getPassword(){return password;}
    public String getLastName(){return lastName;}
}





