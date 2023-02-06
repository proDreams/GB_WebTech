CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    age INT NOT NULL,
    address TEXT NOT NULL
);

INSERT INTO
    users(name, age, address)
VALUES
    ('Иван', '30', 'Ижевск'),
    ('Никита', '25', 'Екатеринбург'),
    ('Кристина', '34', 'Бор'),
    ('Юрий', '25', 'Москва'),
    ('Дарья', '34', 'Омск'),
    ('Владимир', '32', 'Москва');

SELECT
    name
FROM
    users
WHERE
    age < 30
    AND address = 'Москва';