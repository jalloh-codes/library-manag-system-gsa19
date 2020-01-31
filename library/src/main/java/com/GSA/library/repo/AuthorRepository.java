package com.GSA.library.repo;

import com.GSA.library.model.Author;
import org.springframework.data.repository.CrudRepository;
public interface AuthorRepository extends CrudRepository<Author, Long> {

}
