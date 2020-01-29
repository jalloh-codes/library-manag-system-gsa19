package com.GSA.library.repo;

import com.GSA.library.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository  extends CrudRepository<Student, Long> {
}
