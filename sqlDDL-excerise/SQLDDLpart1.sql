
----medical Center -----

DROP DATABASE IF EXISTS sql_DDL

CREATE DATABASE sql_DDL
\c sql_DDL

CREATE TABLE center (
   centerId SERIAL PRIMARY KEY,
    center TEXT NOT NULL,
    doctorId integer REFERENCES doctor ON DELETE SET NULL
);

CREATE TABLE doctor(
    doctorId SERIAL PRIMARY KEY,
    doctorName TEXT NOT NULL,
    patienceId integer REFERENCES patience ON DELETE SET NULL
)

CREATE TABLE patience(
     patienceId SERIAL PRIMARY KEY,
    patienceName TEXT NOT NULL,
    patienceDiagnose TEXT NOT NULL
)


------Craigslist----


CREATE TABLE region(
    regionId SERIAL PRIMARY KEY,
    regionName TEXT NOT NULL,
)

CREATE TABLE user (
    userId SERIAL PRIMARY KEY,
    userName TEXT NOT NULL,
    perferredRegion integer REFERENCES region ON DELETE SET NULL
)


CREATE TABLE category(
    categoryId SERIAL PRIMARY KEY,
   category TEXT NOT NULL,
)

CREATE TABLE  post(
    postId SERIAL PRIMARY KEY,
    postContent TEXT NOT NULL,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    userId integer REFERENCES user ON DELETE CASCADE,
    postRegion integer REFERENCES region ON DELETE CASCADE,
    category integer REFERENCES category ON DELETE CASCADE,

)

-------soccer league-----


CREATE TABLE league(
    leagueId SERIAL PRIMARY KEY,
   leagueName TEXT NOT NULL,
   startDate DATE NOT NULL,
   endDate DATE NOT NULL
)

CREATE TABLE team(
    teamId SERIAL PRIMARY KEY,
    team TEXT NOT NULL,
    leagueId integer REFERENCES league ON DELETE SET NULL,
    playerID integer REFERENCES player ON DELETE SET NULL,
)


CREATE TABLE player(
    playerId SERIAL PRIMARY KEY,
    player TEXT NOT NULL,
    goal TEXT NOT NULL,
    game TEXT REFERENCES game ON DELETE SET NULL,
)

CREATE TABLE refee(
    refeeId SERIAL PRIMARY KEY,
    refee TEXT NOT NULL,
)

CREATE TABLE game(
    gameId SERIAL PRIMARY KEY,
    game TEXT NOT NULL,
    team TEXT REFERENCES team ON DELETE SET NULL,
    referee TEXT REFERENCES refee ON DELETE SET NULL,
)