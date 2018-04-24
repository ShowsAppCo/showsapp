# Generated by Django 2.0.2 on 2018-04-24 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('markets', '0012_offer_accepted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='latitude',
            field=models.FloatField(default=0.0, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='longitude',
            field=models.FloatField(default=0.0, null=True),
        ),
    ]
