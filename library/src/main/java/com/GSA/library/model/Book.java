package com.GSA.library.model;

import java.io.Serializable;
import javax.persistence.*;


@Entity
@Table(name = "library")
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "authorFirst")
    private String authorFirst;

    @Column(name = "authorLast")
    private String authorLast;

    @Column(name = "authorID")
    private  String authorID;

    @Column(name = "booknum")
    private String booknum;

    @Column(name = "descriptio")
    private String descriptio;

    @Column(name = "published")
    private String published;

    @Lob
    @Column(name ="image")
    private String image;



    protected Book() {
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public String getBooknum() {
        return booknum;
    }

    public void setBooknum(String booknum) {
        this.booknum = booknum;
    }

    public String getPublished() {
        return published;
    }

    public void setPublished(String published) {
        this.published = published;
    }

    public String getDescriptio() {
        return descriptio;
    }

    public void setDescriptio(String descriptio) {
        this.descriptio = descriptio;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    @Override
    public String toString() {
        return "Book [id=" + id + ", title=" + title + ", authorFirst=" + authorFirst +
                 ", authorLast=" + authorLast + ", descriptio=" + descriptio + "" + "authorID" + authorID
                + ", published=" + published + "booknum=" + booknum + ",image= " + image +"]";
    }

}