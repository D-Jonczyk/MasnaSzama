package com.project.MasnaSzama;

import com.project.MasnaSzama.Model.Person.Courier;
import com.project.MasnaSzama.Model.Schedule.Schedule;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class CouriersSchedulesTest {
    private static SessionFactory sessionFactory;
    private Session session;

    @Test
    public void testSomething() {
        String[] courierData = { "Daniel Jonczyk", "Jan Kowalski"};
        String[] scheduleData = {"10:00", "12:00"};
        Set<Schedule> schedules = new HashSet<>();

        for (String sched : scheduleData) {
            schedules.add(new Schedule(sched));
        }

        for (String cour : courierData) {
            Courier courier = new Courier(cour.split(" ")[0],
                                          cour.split(" ")[1]);

            assertEquals(0, courier.getCouriersSchedules().size());
            courier.setCouriersSchedules(schedules);
            session.persist(courier);

            assertNotNull(courier);
        }
    }
}
