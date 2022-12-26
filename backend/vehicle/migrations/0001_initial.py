# Generated by Django 4.1.2 on 2022-12-22 22:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('carowner', '0001_initial'),
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booked_from', models.DateTimeField(auto_now_add=True)),
                ('booked_to', models.DateTimeField(auto_now_add=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_bookings', to='customer.customer')),
            ],
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('pictures', models.ImageField(default=False, upload_to='images/brands_img')),
            ],
        ),
        migrations.CreateModel(
            name='Motor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('year', models.IntegerField(choices=[(2011, 2011), (2012, 2012), (2013, 2013), (2014, 2014), (2015, 2015), (2016, 2016), (2017, 2017), (2018, 2018), (2019, 2019), (2020, 2020), (2021, 2021), (2022, 2022)], default=2022, verbose_name='year')),
                ('price', models.FloatField()),
                ('available_from', models.DateTimeField()),
                ('available_end', models.DateTimeField()),
                ('pick_up_location', models.CharField(max_length=200)),
                ('drop_off_location', models.CharField(max_length=200)),
                ('pictures', models.ImageField(upload_to='images/motors_img')),
                ('brand', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='brand', to='vehicle.brand')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='owner', to='carowner.owner')),
            ],
        ),
        migrations.CreateModel(
            name='MotorRating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('reviews', models.TextField()),
                ('add_time', models.DateTimeField(auto_now_add=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ratings_customers', to='customer.customer')),
                ('motor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='car_ratings', to='vehicle.motor')),
            ],
        ),
        migrations.CreateModel(
            name='BookingItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booking', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='booking_items', to='vehicle.booking')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vehicle.motor')),
            ],
        ),
    ]
