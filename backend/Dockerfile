FROM python:3.11-slim

WORKDIR /app

# Установка системных зависимостей
RUN apt-get update && apt-get install -y \
    build-essential \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Установка зависимостей Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir django-cors-headers gunicorn

# Копирование кода приложения
COPY . .

# Создание и применение миграций
RUN python manage.py makemigrations
RUN python manage.py migrate

# Сборка статических файлов
RUN python manage.py collectstatic --noinput

# Создание директории для логов
RUN mkdir -p /var/log/dw_backend

# Запуск приложения через gunicorn
CMD ["gunicorn", "dw_backend.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4", "--timeout", "120"]
