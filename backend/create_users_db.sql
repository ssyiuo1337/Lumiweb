-- Создание новой базы данных
CREATE DATABASE users_db;

-- Подключение к новой базе данных
\c users_db;

-- Создание таблицы users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индексов
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);

-- Комментарии к таблице и колонкам
COMMENT ON TABLE users IS 'Таблица для хранения информации о пользователях';
COMMENT ON COLUMN users.id IS 'Уникальный идентификатор пользователя';
COMMENT ON COLUMN users.username IS 'Имя пользователя';
COMMENT ON COLUMN users.email IS 'Электронная почта пользователя';
COMMENT ON COLUMN users.password IS 'Хэшированный пароль пользователя';
COMMENT ON COLUMN users.created_at IS 'Дата и время создания записи';
