package com.GSA.library.repo;

import com.GSA.library.model.Book; 
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long>{

}