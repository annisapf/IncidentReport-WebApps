CREATE DATABASE ireport;
USE ireport;
CREATE TABLE IncidentReport(
    id INT AUTO_INCREMENT NOT NULL,
    event_name VARCHAR(100) NOT NULL,
    place_name VARCHAR(100) NOT NULL,
    solved BOOLEAN default false,
    PRIMARY KEY (id)
);