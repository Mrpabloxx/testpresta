# Generated by Django 4.2.1 on 2023-05-03 14:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('apellidos', models.CharField(max_length=20)),
                ('fechaNacimiento', models.CharField(max_length=30)),
                ('rfc', models.CharField(max_length=13)),
                ('correo', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=10)),
                ('password', models.CharField(max_length=12)),
                ('rol', models.CharField(max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('apellidos', models.CharField(max_length=20)),
                ('fechaNacimiento', models.CharField(max_length=30)),
                ('rfc', models.CharField(max_length=13)),
                ('correo', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=10)),
                ('password', models.CharField(max_length=12)),
                ('rol', models.CharField(max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('Activo', 'Activo'), ('Inactivo', 'Inactivo')], default='Inactivo', max_length=9)),
                ('monto', models.FloatField(default=0)),
                ('pagos', models.CharField(choices=[('Semanal', 'Semanal'), ('Quicenal', 'Quincenal'), ('Mensual', 'Mensual')], default='Semanal', max_length=9)),
                ('cliente', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.cliente')),
            ],
        ),
    ]
