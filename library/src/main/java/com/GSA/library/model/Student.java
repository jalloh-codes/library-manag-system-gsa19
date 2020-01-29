package com.GSA.library.model;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "Student")
public class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name ="Fname")
    private String Fname;

    @Column(name ="Lname")
    private String Lname;

    @Column(name ="StudentID")
    private String StudentID;

    @Column(name = "Address")
    private String Address;

    @Column(name = "Apt")
    private String Apt;

    @Column(name = "City")
    private String City;

    @Column(name = "State")
    private String State;

    @Column(name = "ZipeCode")
    private String Zipcode;

    @Column(name = "Major")
    private String Major;

    protected Student() {

    }

    public long getId() {
        return id;
    }


    public String getFname() {
        return Fname;
    }

    public void setFname(String fname) {
        Fname = fname;
    }

    public String getLname() {
        return Lname;
    }

    public void setLname(String lname) {
        Lname = lname;
    }

    public String getStudentID() {
        return StudentID;
    }

    public void setStudentID(String studentID) {
        StudentID = studentID;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getMajor() {
        return Major;
    }

    public void setMajor(String major) {
        Major = major;
    }

    public String getCity() {
        return City;
    }

    public void setCity(String city) {
        City = city;
    }

    public String getApt() {
        return Apt;
    }

    public void setApt(String apt) {
        Apt = apt;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public String getZipcode() {
        return Zipcode;
    }

    public void setZipcode(String zipcode) {
        Zipcode = zipcode;
    }

    @Override
    public String toString(){
        return " Student [ id=" + this.getId() + " Firstname= " + this.getFname() + " Lastname= " + this.getLname() +
                " StudentID= "+ this.StudentID+  " Major=" + this.Major + " Address=" + this.Address + " ]";
    }
}
