package com.project.MasnaSzama.Model.Request;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Request {
@Id
private Long RequestId;
Integer RequestData;
Integer RequestCommentary;
Integer RequestStatus;

    @ManyToOne
    @JoinColumn (name= "admin_id", nullable=false)
    private Request request;

}
