# Generated by Django 4.1.2 on 2022-12-29 11:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vehicle', '0003_alter_motorrating_motor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='motor',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='brand_vehicles', to='vehicle.brand'),
        ),
    ]
