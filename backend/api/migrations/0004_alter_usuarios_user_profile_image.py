# Generated by Django 4.1.2 on 2024-10-12 22:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_usuarios_is_active_remove_usuarios_is_staff_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='user_profile_image',
            field=models.BinaryField(),
        ),
    ]
