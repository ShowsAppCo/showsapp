# Generated by Django 2.0.2 on 2018-04-07 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('markets', '0002_auto_20180407_1550'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='activated',
            field=models.BooleanField(default=False),
        ),
    ]
