CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE movie (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  director varchar(255) NOT NULL,
  year varchar(10) NOT NULL,
  colors BOOLEAN NOT NULL,
  duration INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO movie (title, director, year, colors, duration )
VALUES ("Citizen Kane","Orson Wells","1941",false,120),
("The Godfather", "Francis Ford Coppola", "1972", true,180),
("Pulp Fiction", "Quentin Tarantino", "1994", true, 180);
