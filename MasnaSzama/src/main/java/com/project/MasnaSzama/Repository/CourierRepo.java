package com.project.MasnaSzama.Repository;

import com.project.MasnaSzama.Model.Person.Employee.Courier;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CourierRepo extends CrudRepository<Courier, Long> {
    void deleteCourierByPersonId(Long personId);

    Optional<Courier> findCourierByPersonId(Long personId);
}
