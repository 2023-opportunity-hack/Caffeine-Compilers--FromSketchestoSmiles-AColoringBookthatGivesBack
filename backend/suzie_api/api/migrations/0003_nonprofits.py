# Generated by Django 4.2.6 on 2023-10-07 21:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_drawings'),
    ]

    operations = [
        migrations.CreateModel(
            name='NonProfits',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20, null=True)),
                ('about', models.TextField(null=True)),
                ('url', models.TextField(null=True)),
                ('created_on', models.DateTimeField(null=True)),
                ('modified_on', models.DateTimeField(null=True)),
            ],
            options={
                'db_table': 'nonprofits',
            },
        ),
    ]