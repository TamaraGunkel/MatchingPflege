# Installation
Create a virtual environment.
Install requirements with `pip install -r requirements.txt`

# Migrations
Go to the folder `backend/sql_app`.

After database changes execute 
`alembic revision --autogenerate -m "<initial database schema>"`.

To apply the migration execute
`alembic upgrade head`.