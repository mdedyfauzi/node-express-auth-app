CREATE DATABASE jwttutorial;

-- set extension uuid-ossp on database : create extension if not exists "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(225) NOT NULL,
    user_email VARCHAR(225) NOT NULL,
    user_password VARCHAR(225) NOT NULL
);

-- insert example user

INSERT INTO users (user_name, user_email, user_password) VALUES ('johndoe', 'johndoe123@email.com', 'test111*');