package com.project.MasnaSzama.Repository;

import com.project.MasnaSzama.Model.Person.Employee.Courier;
import com.project.MasnaSzama.Model.Views.CourierSchedules;
import com.project.MasnaSzama.Model.Views.OrdersDelivery;
import com.project.MasnaSzama.Model.Views.OrdersFinished;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CourierRepo extends CrudRepository<Courier, Long> {
    void deleteCourierByPersonId(Long personId);

    Optional<Courier> findCourierByPersonId(Long personId);

    @Query(value = "SELECT new com.project.MasnaSzama.Model.Views.CourierSchedules" +
            "(cs.scheduleId, cs.startTime, cs.endTime, cs.fullDate, cs.courierId) " +
            "FROM CourierSchedules cs " +
            "WHERE cs.courierId = ?1 AND cs.weekNumber = ?2 ")
    List<CourierSchedules> getCourierSchedule(Long courierId, Integer weekNumber);

    @Query(value = "SELECT new com.project.MasnaSzama.Model.Views.OrdersFinished" +
            "(od.orderId, od.courierId, od.orderPrice, od.restoName, od.customerAddress, " +
            " od.phoneNumber, od.orderedTime, od.desiredDeliveryTime, od.deliveredTime ) " +
            "FROM OrdersFinished od " +
            "WHERE od.courierId = ?1")
    List<OrdersFinished> getDeliveryHistory(Long courierId);
}
