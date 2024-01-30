CREATE TABLE users (
    id SERIAL NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(1000),
    role VARCHAR(255)

);