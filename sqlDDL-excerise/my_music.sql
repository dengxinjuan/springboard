DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music



CREATE TABLE ablum
(
  id SERIAL PRIMARY KEY,
  ablum_name TEXT NOT NULL
);

INSERT INTO ablum
(ablum_name)
VALUES
('Middle of Nowhere'),
('A Night at the Opera'),
('Daydream'),
('A Star Is Born'), 
('Silver Side Up'), 
('The Blueprint 3'),
('Prism'),
('Hands All Over'),
('Let Go'),
('The Writing''s on the Wall');



CREATE TABLE song
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album INTEGER REFERENCES ablum(id) NOT NULL
);

INSERT INTO song
  (title, duration_in_seconds, release_date, album)
VALUES
  ('MMMBop', 238, '04-15-1997', 1),
  ('Bohemian Rhapsody', 355, '10-31-1975',  2),
  ('One Sweet Day', 282, '11-14-1995',3),
  ('Shallow', 216, '09-27-2018', 4),
  ('How You Remind Me', 223, '08-21-2001',5),
  ('New York State of Mind', 276, '10-20-2009',6),
  ('Dark Horse', 215, '12-17-2013',7),
  ('Moves Like Jagger', 201, '06-21-2011', 8),
  ('Complicated', 244, '05-14-2002',9),
  ('Say My Name', 240, '11-07-1999',10);


 CREATE TABLE producer_album
(
  id SERIAL PRIMARY KEY,
  producer_name TEXT NOT NULL,
  album INTEGER REFERENCES ablum(id)
);

INSERT INTO producer_album
  (producer_name,album)
VALUES
  ('Dust Brothers', 1),
  ('Stephen Lironi',1),
  ('Roy Thomas Baker',2),
  ('Walter Afanasieff',3),
  ('Benjamin Rice',4),
  ('Rick Parashar',5),
  ('Al Shux',6),
  ('Max Martin',7),
  ('Cirkut',7),
  ('Shellback', 8),
  ('Benny Blanco',8),
  ('The Matrix',9),
  ('Darkchild',10);

