/* Replace with your SQL commands */
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    price numeric DEFAULT 0.00,
    category varchar(50),
    description varchar(100),
    url varchar(100)
);