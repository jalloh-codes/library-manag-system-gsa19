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

    @Column(name = "categorie")
    private String categorie;

    protected Book() {
    }

    public long getId() {
        return id;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
        return "Book [id=" + id + ", title=" + title + ", authorFirst=" +
                ", authorLast=" + ", descriptio=" + descriptio + "" + "authorID" + authorID
                + ", published=" + published + "booknum=" + booknum + ",image= " + image + "categorie" + categorie + "]";
    }

}