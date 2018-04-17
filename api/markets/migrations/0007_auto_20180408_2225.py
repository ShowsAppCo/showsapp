# Generated by Django 2.0.2 on 2018-04-08 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('markets', '0006_item_requires_good_faith_money'),
    ]

    operations = [
        migrations.AddField(
            model_name='offer',
            name='good_faith_money_paid',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='offer',
            name='on_hold',
            field=models.BooleanField(default=False),
        ),
    ]