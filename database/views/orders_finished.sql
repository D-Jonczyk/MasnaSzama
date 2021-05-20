DROP VIEW IF EXISTS orders_finished;
CREATE VIEW orders_finished AS
SELECT o.order_id, 
	co.person_id AS 'courier_id', 
	o.order_price, 
	r.name AS 'resto_name', 
    CONCAT(ad.street, ' ', ad.number) AS 'customer_address',
    cu.phone_number,
	DATE_FORMAT(o.ordered_time, "%T") AS 'ordered_time', 
	DATE_FORMAT(o.desired_delivery_time, "%T") AS 'desired_delivery_time',
    DATE_FORMAT(ADDTIME(o.desired_delivery_time, (RAND()*(200+(-200))-200)), "%T") AS 'delivered_time'
FROM couriers_orders co
JOIN order_ o ON o.order_id = co.order_id
JOIN status_ s ON o.status_id = s.status_id
JOIN courier c ON co.person_id = c.person_id
JOIN restaurant r ON o.restaurant_id = r.restaurant_id
JOIN customer cu ON o.customer_id = cu.person_id
JOIN address ad ON cu.address_id = ad.address_id
WHERE s.name LIKE 'finished';
