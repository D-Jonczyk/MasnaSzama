package com.project.MasnaSzama.Controller;

import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Service.CourierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courier")
public class CourierController {
    private final CourierService courierService;

    public CourierController(CourierService courierService) {
        this.courierService = courierService;
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Courier>> getAllCouriers() {
        List<Courier> couriers = (List<Courier>) courierService.findAllCouriers();
        return new ResponseEntity<>(couriers, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Courier> getCourierByPersonId(@PathVariable("id") Long personId){
        Courier courier = courierService.findCourierById(personId);
        return new ResponseEntity<>(courier, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Courier> addCourier(@RequestBody Courier courier) {
        Courier newCourier = courierService.addCourier(courier);
        return new ResponseEntity<>(newCourier, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Courier> updateCourier(@RequestBody Courier courier) {
        Courier updatedCourier = courierService.updateCourier(courier);
        return new ResponseEntity<>(updatedCourier, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCourier(@PathVariable("id") Long id) {
        courierService.deleteCourier(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
