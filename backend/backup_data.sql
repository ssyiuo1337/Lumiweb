-- Подключение к исходной базе данных
\c default_db;

-- Создание бэкапа данных
COPY (
    SELECT
        id,
        username,
        email,
        password,
        created_at
    FROM users
) TO '/tmp/users_backup.csv' WITH CSV HEADER;

-- Восстановление данных в новую базу данных
\c users_db;

-- Вставка данных в новую таблицу
INSERT INTO users (username, email, password, created_at)
SELECT
    username,
    email,
    password,
    COALESCE(created_at, CURRENT_TIMESTAMP)
FROM users_old
WHERE NOT EXISTS (
    SELECT 1
    FROM users
    WHERE users.email = users_old.email
);
