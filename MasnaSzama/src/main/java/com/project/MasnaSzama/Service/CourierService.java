package com.project.MasnaSzama.Service;

import com.project.MasnaSzama.Repository.CourierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Courier {
    private final CourierRepo courierRepo;
    
    @Autowired
    public CourierService(CourierRepo courierRepo) {
        this.courierRepo = courierRepo;
    }
}
