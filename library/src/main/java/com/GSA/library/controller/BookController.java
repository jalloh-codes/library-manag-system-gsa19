package com.GSA.library.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import com.GSA.library.model.Book;
import com.GSA.library.repo.BookRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BookController{
    @Autowired
    BookRepository bookRepository;


    @GetMapping("/books")
    public List<Book> getAllBooks(){
        System.out.println("Get all Books");

        List<Book> list = new ArrayList<>();
        Iterable<Book> customers = bookRepository.findAll();

        customers.forEach(list::add);
        return list;
    }

    @PostMapping("/books/create")
    public Book createBook(@Valid @RequestBody Book book) {
        System.out.println("Created Book: " + book.getTitle());

        return bookRepository.save(book);
    }
    @PutMapping("/books/update/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") long id, @RequestBody Book book){
        System.out.println("Upated Book with the id " +id);
        Optional<Book> bookData = bookRepository.findById(id);
        if(bookData.isPresent()){
            Book saveBook = bookData.get();
            saveBook.setTitle(book.getTitle());
            saveBook.setAuthorID(book.getAuthorID());
            saveBook.setDescriptio(book.getDescriptio());
            saveBook.setPublished(book.getPublished());
            saveBook.setImage(book.getImage());
            saveBook.setBooknum(book.getBooknum());
            saveBook.setCategorie(book.getCategorie());

            Book updatedBook = bookRepository.save(saveBook);
            return new ResponseEntity<>(updatedBook, HttpStatus.OK);
        }else{
            System.out.println("Not saved");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBook(@PathVariable("id") long id){
        System.out.println("Get book id ");

        Optional<Book> bookData = bookRepository.findById(id);
        if(bookData.isPresent()){
            return new ResponseEntity<>(bookData.get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/books/delete/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable("id") Long id) {
        System.out.println("Delete Book with ID = " + id );

        try {
            bookRepository.deleteById(id);
        } catch (Exception e) {
            return new ResponseEntity<>("Fail to delete", HttpStatus.EXPECTATION_FAILED);
        }

        return new ResponseEntity<>("Book has been deleted", HttpStatus.OK);
    }

}


