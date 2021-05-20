DROP VIEW IF EXISTS courier_schedules;

CREATE VIEW courier_schedules AS
SELECT s.schedule_id, s.start_time, s.end_time, s.full_date, es.person_id as "courier_id"
FROM schedule s
JOIN employees_schedules es ON s.schedule_id = es.schedule_id
JOIN courier c ON es.person_id = c.person_id;
