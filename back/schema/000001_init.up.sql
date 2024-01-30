CREATE TABLE users (
    id SERIAL NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(1000),
    role VARCHAR(255)
);

CREATE TABLE positions (
    id SERIAL NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    tags VARCHAR(255) NOT NULL
);