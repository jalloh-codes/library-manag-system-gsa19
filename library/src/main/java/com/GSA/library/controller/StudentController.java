package com.GSA.library.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.GSA.library.repo.StudentRepository;
import com.GSA.library.model.Student;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    StudentRepository studentRepository;


    @GetMapping("/students")
    public List<Student> getAllStudents(){
        System.out.println("Get all Students");

        List<Student> list = new ArrayList<>();
        Iterable<Student> customers = studentRepository.findAll();

        customers.forEach(list::add);
        return list;
    }

    @PostMapping("/students/create")
    public Student createStudent(@Valid @RequestBody Student student) {
        System.out.println("Created Student: " + student.getStudentID() +" " + student.getFname() + " " + student.getLname());

        return studentRepository.save(student);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable("id") long id){
        System.out.println("Get author id ");

        Optional<Student> bookData = studentRepository.findById(id);
        if(bookData.isPresent()){
            return new ResponseEntity<>(bookData.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/students/delete/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long id) {
        System.out.println("Delete Student with ID = " + id );

        try {
            studentRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Student has been deleted", HttpStatus.OK);
    }
}
