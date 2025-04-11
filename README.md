# LumiWeb

Проект представляет собой веб-приложение с разделением на фронтенд и бэкенд части.

## Структура проекта

```
lumiweb/
├── front/                 # Frontend часть (Vue.js + TypeScript)
│   ├── src/              # Исходный код фронтенда
│   ├── public/           # Статические файлы
│   └── package.json      # Зависимости фронтенда
│
└── backend/              # Backend часть (Django)
    ├── authorization/    # Модуль авторизации
    ├── subscription/     # Модуль подписок
    ├── user_statistics/  # Модуль статистики пользователей
    ├── payment/          # Модуль платежей
    ├── file_system/      # Модуль файловой системы
    └── dw_backend/       # Основные настройки Django
```

## Технологии

### Frontend
- Vue.js 3
- TypeScript
- Tailwind CSS
- Vite
- Cloudflare Turnstile для CAPTCHA

### Backend
- Django 5.1
- Django REST Framework
- JWT аутентификация
- MySQL
- PyMySQL

## Установка и запуск

### Backend

1. Установите зависимости:
```bash
cd backend
pip install -r requirements.txt
```

2. Настройте базу данных в `dw_backend/settings.py`

3. Примените миграции:
```bash
python manage.py migrate
```

4. Запустите сервер разработки:
```bash
python manage.py runserver
```

### Frontend

1. Установите зависимости:
```bash
cd front
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

## Функциональность

### Авторизация
- Регистрация с проверкой CAPTCHA
- Вход по email/username
- JWT аутентификация
- Смена пароля
- Управление HWID

### Подписки
- Система подписок
- Управление статусом подписки
- Отслеживание сроков подписки

### Статистика
- Отслеживание времени использования
- Система рефералов
- Статистика запусков

### Платежи
- Интеграция с платежными системами
- Обработка платежей
- Управление транзакциями

## Конфигурация

### Backend
- Настройки базы данных в `dw_backend/settings.py`
- Ключи API в переменных окружения
- Настройки JWT в `SIMPLE_JWT`

### Frontend
- Конфигурация Vite в `vite.config.ts`
- Настройки Tailwind в `tailwind.config.js`
- Переменные окружения в `.env.development` и `.env.production`

## Развертывание

Проект поддерживает развертывание через Docker:
- `front/Dockerfile` для фронтенда
- `backend/Dockerfile` для бэкенда

## Безопасность

- JWT аутентификация
- CSRF защита
- CORS настройки
- CAPTCHA защита
- HWID проверка
- Безопасное хранение паролей

## Лицензия

[Укажите вашу лицензию]
