# Generated by Django 5.1.3 on 2024-12-04 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spark', '0009_remove_sparkproject_miro_board_link_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sparkproject',
            name='miro_board_id',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='sparkproject',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
