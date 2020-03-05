package com.GSA.library.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.GSA.library.model.Author;
import com.GSA.library.repo.AuthorRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AuthorController {

    @Autowired
    AuthorRepository authorRepository;


    @GetMapping("/authors")
    public List<Author> getAllAuthors(){
        System.out.println("Get all Authors");

        List<Author> list = new ArrayList<>();
        Iterable<Author> customers = authorRepository.findAll();

        customers.forEach(list::add);
        return list;
    }

    @PostMapping("/authors/create")
    public Author createAuhtor(@Valid @RequestBody Author auhtor) {
        System.out.println("Created Author: " + auhtor.getAuthorFirst() +" "
                + auhtor.getAuthorLast());
        return authorRepository.save(auhtor);
    }

    @DeleteMapping("/author/delete/{id}")
    public ResponseEntity<String> deleteAuhtor(@PathVariable("id") Long id) {
        System.out.println("Delete Author with ID = " + id );
        try {
            authorRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete", HttpStatus.EXPECTATION_FAILED);
        }
        return new ResponseEntity<>("Author has been deleted", HttpStatus.OK);
    }

    @PutMapping("/author/update/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable("id") long id, @RequestBody Author author){
        System.out.println("Upated Author with the id " +id);
        Optional<Author> bookData = authorRepository.findById(id);
        if(bookData.isPresent()){
            Author saveBook = bookData.get();
            saveBook.setAuthorFirst(author.getAuthorFirst());
            saveBook.setAuthorLast(author.getAuthorLast());
            saveBook.setAuthorID(author.getAuthorID());
            Author updatedBook = authorRepository.save(saveBook);
            return new ResponseEntity<>(updatedBook, HttpStatus.OK);
        }else{
            System.out.println("Not saved");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
