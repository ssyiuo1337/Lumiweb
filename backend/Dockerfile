FROM python:3.11-slim

WORKDIR /app

# Установка зависимостей
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копирование кода приложения
COPY . .

# Создание и применение миграций
RUN python manage.py makemigrations
RUN python manage.py migrate

# Сборка статических файлов
RUN python manage.py collectstatic --noinput

# Запуск приложения
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
