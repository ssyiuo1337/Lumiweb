import os
import django

# Настройка Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dw_backend.settings')
django.setup()

from django.apps import apps
from django.db import connection

def print_models_info():
    print("Список всех моделей и их полей:")
    for model in apps.get_models():
        print(f"\nМодель: {model.__name__}")
        print("Поля:")
        for field in model._meta.fields:
            print(f"  - {field.name}: {field.get_internal_type()}")

if __name__ == "__main__":
    print_models_info()
