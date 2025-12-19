DROP TABLE IF EXISTS movies;
CREATE TABLE IF NOT EXISTS  movies(
    id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
    ,movieTitle VARCHAR(29) NOT NULL
    ,runTime VARCHAR(3) NOT NULL
    ,movieYear VARCHAR(4) NOT NULL
    ,genre VARCHAR(12) NOT NULL
);
INSERT INTO movies(id,movieTitle,runTime,movieYear,genre) VALUES (1, 'The Dark Knight', '152', '2008', 'Action');
INSERT INTO movies(id,movieTitle,runTime,movieYear,genre) VALUES (2, 'The Hunger Games', '140', '2013', 'Sci-Fi');
INSERT INTO movies(id,movieTitle,runTime,movieYear,genre) VALUES (3, 'Notting hill', '124', '1999', 'Romantik');
INSERT INTO movies(id,movieTitle,runTime,movieYear,genre) VALUES (4, 'Catch me if you can', '141', '2002', 'Komedi');
INSERT INTO movies(id,movieTitle,runTime,movieYear,genre) VALUES (5, 'Get out', '104', '2017', 'Thriller');

select * from movies;
