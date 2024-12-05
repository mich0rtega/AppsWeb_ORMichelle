# Generated by Django 4.2 on 2024-11-08 01:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_alter_producto_cod_producto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('id_cliente', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.TextField()),
                ('telefono', models.IntegerField()),
                ('direcccion', models.CharField(max_length=100)),
                ('correo', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id_prov', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.TextField()),
                ('telefono', models.IntegerField()),
                ('direccion', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Cotizaciones',
            fields=[
                ('id_cotizacion', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('estado', models.CharField(choices=[('Pendiente', 'Pendiente'), ('Aprobada', 'Aprobada'), ('Rechazada', 'Rechazada')], default='Pendiente', max_length=50)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.clientes')),
            ],
        ),
    ]