package com.GSA.library.model;

import java.io.Serializable;
import javax.persistence.*;


@Entity
@Table(name = "Author")
public class Author {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "authorFirst")
    private String authorFirst;

    @Column(name = "authorLast")
    private String authorLast;

    @Column(name = "authorID")
    private  String authorID;

    public long getId() {
        return id;
    }

    public String getAuthorFirst() {
        return authorFirst;
    }

    public void setAuthorFirst(String authorFirst) {
        this.authorFirst = authorFirst;
    }

    public String getAuthorLast() {
        return authorLast;
    }

    public void setAuthorLast(String authorLast) {
        this.authorLast = authorLast;
    }

    public String getAuthorID() {
        return authorID;
    }

    public void setAuthorID(String authorID) {
        this.authorID = authorID;
    }

    @Override
    public String toString(){
        return "Author [id= " + id + " Firstname= " + authorFirst + " Lastname= " +
                authorLast + " AuthorID= " + authorID + "]";
    }
}
