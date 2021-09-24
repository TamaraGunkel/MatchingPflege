# Installation
Create a virtual environment.
Install requirements with `pip install -r requirements.txt`
Run the database with `docker compose up -d`.
Initialize the database with `alembic upgrade head` (after activating the virtual environment).

# Migrations
After database changes execute 
`alembic revision --autogenerate -m "<initial database schema>"`.

To apply the migration execute
`alembic upgrade head`.