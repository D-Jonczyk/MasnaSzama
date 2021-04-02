package com.project.MasnaSzama.Repository;

import com.project.MasnaSzama.Model.Order.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepo extends CrudRepository<Order, Long> {
}
