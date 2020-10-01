DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic


CREATE TABLE airline
(
  airid SERIAL PRIMARY KEY,
  airline_name TEXT NOT NULL
);

INSERT INTO airline
  (airline_name)
VALUES
  ( 'United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ( 'Air China'),
  ('United'),
  ('American Airlines'),
  ( 'Avianca Brasil');

CREATE TABLE ticket
(
  ticketid SERIAL PRIMARY KEY,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline INTEGER REFERENCES airline(airid),
  from_city TEXT NOT NULL,
  from_country TEXT NOT NULL,
  to_city TEXT NOT NULL,
  to_country TEXT NOT NULL
);



  INSERT INTO ticket
  ( departure,arrival, airline, from_city, from_country, to_city, to_country)
VALUES
  ('2018-04-08 09:00:00', '2018-04-08 12:00:00', 1, 'Washington DC', 'United States', 'Seattle', 'United States'),
  ('2018-12-19 12:45:00', '2018-12-19 16:15:00', 2, 'Tokyo', 'Japan', 'London', 'United Kingdom'),
  ('2018-01-02 07:00:00', '2018-01-02 08:03:00', 3, 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
  ('2018-04-15 16:50:00', '2018-04-15 21:00:00', 3, 'Seattle', 'United States', 'Mexico City', 'Mexico'),
  ('2018-08-01 18:30:00', '2018-08-01 21:50:00', 4, 'Paris', 'France', 'Casablanca', 'Morocco'),
  ('2018-10-31 01:15:00', '2018-10-31 12:55:00', 5, 'Dubai', 'UAE', 'Beijing', 'China'),
  ('2019-02-06 06:00:00', '2019-02-06 07:47:00', 6, 'New York', 'United States', 'Charlotte', 'United States'),
  ('2018-12-22 14:42:00', '2018-12-22 15:56:00', 7, 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
  ('2019-02-06 16:28:00', '2019-02-06 19:18:00', 7, 'Charlotte', 'United States', 'New Orleans', 'United States'),
  ('2019-01-20 19:30:00', '2019-01-20 22:45:00', 8, 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');


CREATE TABLE passenger
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  seat TEXT NOT NULL,
  ticket_id INTEGER REFERENCES ticket(ticketid)
  
);

INSERT INTO passenger
  (first_name, last_name, seat,ticket_id)
VALUES
  ('Jennifer', 'Finch', '33B', 1),
  ('Thadeus', 'Gathercoal', '8A', 2),
  ('Sonja', 'Pauley', '12F', 3),
  ('Jennifer', 'Finch', '20A', 4),
  ('Waneta', 'Skeleton', '23D', 5),
  ('Thadeus', 'Gathercoal', '18C', 6),
  ('Berkie', 'Wycliff', '9E', 7),
  ('Alvin', 'Leathes', '1A', 8),
  ('Berkie', 'Wycliff', '32B', 9),
  ('Cory', 'Squibbes', '10D', 10);
