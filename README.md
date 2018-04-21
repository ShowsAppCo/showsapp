# Showsapp Platform


## Back-end Description
 * [Django](https://www.djangoproject.com/)
 * [Django Rest Framework](http://www.django-rest-framework.org/)
 * [Django Rest Auth](http://django-rest-auth.readthedocs.io/en/latest/index.html)


### Set it up: 
1. Install [pipenv](https://pypi.python.org/pypi/pipenv):
```bash
pip install pipenv
```

2. Clone the [code](https://github.com/ShowsAppCo/showsapp):
```bash
git clone git@github.com:ShowsAppCom/showsapp.git
```

3. Install the requirements:
```bash
cd ./showsapp/api/
pipenv install
pipenv shell
```

4. Install PostgreSQL server:
  you can find instructions [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)

5. Create a database:
```bash
sudo createdb showsapp
```
6. Set the environment variables for the DB connection
```bash
export PSQL_DB_USER='your_postgres_user'
export PSQL_DB_PASSWORD='your_postgres_user_password'
```

7. Run the django migrations:
```bash
python3 manage.py migrate
```

8. Run the django development server
```bash
python3 manage.py runserver 0.0.0.0:8000
```

9. Create a superuser for yourself:
```bash
python3 manage.py createsuperuser
```

### To access the django admin site:
Navigate your browser to [localhost:8000/admin/](localhost:8000/admin/)

and provide the superuser credentials you've created the previous step.

Hola!
