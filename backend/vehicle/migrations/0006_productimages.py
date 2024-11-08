# Generated by Django 4.1.2 on 2022-12-30 12:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vehicle', '0005_rename_brand_brandvehicle'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to='images/motors_img')),
                ('motor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='motor_images', to='vehicle.motor')),
            ],
        ),
    ]
