package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.Exception.UserNotFoundException;
import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Repository.CourierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourierService {
    private final CourierRepo courierRepo;

    @Autowired
    public CourierService(CourierRepo courierRepo) {
        this.courierRepo = courierRepo;
    }

    public Iterable<Courier> findAllCouriers() {
        return courierRepo.findAll();
    }

    public Courier updateCourier(Courier courier) {
        return courierRepo.save(courier);
    }

    public Courier findCourierById(Long personId){
        return courierRepo.findCourierByPersonId(personId)
                .orElseThrow(() -> new UserNotFoundException("User by id " + personId + "was not found."));
    }

    public void deleteCourier(Long id) {
        courierRepo.deleteCourierByPersonId(id);
    }

    public Courier addCourier(Courier courier) {
        return courierRepo.save(courier);
    }
}
