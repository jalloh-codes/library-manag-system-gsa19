package com.GSA.library.model;
import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "Checkout")
public class Rent implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name ="RentDay")
    private String RentDay;

    @Column(name ="DueDay")
    private String DueDay;

    @Column(name ="StudentID")
    private String StudentID;

    @Column(name ="booknum")
    private String booknum;


    protected Rent() {

    }

    public long getId() {
        return id;
    }

    public String getRentDay() {
        return RentDay;
    }

    public void setRentDay(String rentDay) {
        RentDay = rentDay;
    }

    public String getDueDay() {
        return DueDay;
    }

    public void setDueDay(String dueDay) {
        DueDay = dueDay;
    }

    public String getStudentID() {
        return StudentID;
    }

    public void setStudentID(String studentID) {
        StudentID = studentID;
    }

    public String getBooknum() {
        return booknum;
    }

    public void setBooknum(String booknum) {
        this.booknum = booknum;
    }

    @Override
    public String toString(){
        return "Student Rented [ ID=" + this.StudentID + " Day Rented Date= " +this.RentDay +
                " Due Date= " + this.DueDay +" BookID " + this.booknum + " ]";
    }
}
