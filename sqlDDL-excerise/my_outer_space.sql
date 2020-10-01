DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

CREATE TABLE milkyway_planets(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL
);

INSERT INTO milkyway_planets
  (name, orbital_period_in_years, orbits_around)
VALUES
  ('Earth', 1.00, 'The Sun'),
  ('Mars', 1.88, 'The Sun'),
  ('Venus', 0.62, 'The Sun'),
  ('Neptune', 164.8, 'The Sun'),
  ('Proxima Centauri b', 0.03, 'Proxima Centauri'),
  ('Gliese 876 b', 0.23, 'Gliese 876');

CREATE TABLE moons(
  moonId SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  matchid INTEGER REFERENCES milkyway_planets(id));

INSERT INTO moons
(name,matchid)
VALUES
('The Moon',1),
('Phobos',2),
('Deimos',2),
('Naiad',4),
('Thalassa',4),
('Despina',4 ),
('Galatea', 4),
('Larissa',4 ),
('S/2004 N 1',4),
('Proteus', 4),
('Triton',4),
('Nereid', 4),
('Halimede',4 ),
('Sao', 4),
('Laomedeia',4),
 ('Psamathe', 4),
 ('Neso',4);

