# Generated by Django 2.0.2 on 2018-04-12 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('markets', '0011_waitinglistsubscription_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='offer',
            name='accepted',
            field=models.BooleanField(default=False),
        ),
    ]
