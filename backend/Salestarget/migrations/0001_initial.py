# Generated by Django 5.0.7 on 2025-02-28 07:08

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="SalesTarget",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("daily", models.PositiveIntegerField(default=0)),
                ("monthly", models.PositiveIntegerField(default=0)),
                ("yearly", models.PositiveIntegerField(default=0)),
            ],
        ),
    ]
