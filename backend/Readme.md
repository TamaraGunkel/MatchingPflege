# Migrations
After database changes execute 
` alembic revision --autogenerate -m "<initial database schema>"`.

To apply the migration execute
`alembic upgrade head`.