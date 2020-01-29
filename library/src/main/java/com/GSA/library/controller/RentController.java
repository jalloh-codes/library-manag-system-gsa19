package com.GSA.library.controller;

import com.GSA.library.model.Rent;
import com.GSA.library.repo.RentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RentController {

    @Autowired
    RentRepository rentRepository;


    @GetMapping("/rented")
    public List<Rent> getAllRents(){
        System.out.println("Get all Rented book");

        List<Rent> list = new ArrayList<>();
        Iterable<Rent> customers = rentRepository.findAll();

        customers.forEach(list::add);
        return list;
    }

    @PostMapping("/rented/create")
    public Rent createRent(@Valid @RequestBody Rent rent) {
        System.out.println("Book rented: " + rent.getBooknum() +" by StudentID: " + rent.getStudentID());

        return rentRepository.save(rent);
    }

    @GetMapping("/rented/{id}")
    public ResponseEntity<Rent> getRent(@PathVariable("id") long id){
        System.out.println("Get author id ");

        Optional<Rent> bookData = rentRepository.findById(id);
        if(bookData.isPresent()){
            return new ResponseEntity<>(bookData.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/rented/delete/{id}")
    public ResponseEntity<String> deleteAuthor(@PathVariable("id") Long id) {
        System.out.println("return Book with ID = " + id );

        try {
            rentRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to return ", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Book has been returned", HttpStatus.OK);
    }
}
