from logging.config import fileConfig
import os
import urllib.parse
from dotenv import load_dotenv
import importlib
import pkgutil

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context

from db.db_setup import Base 

# Load environment variables from .env file
load_dotenv()

# this is the Alembic Config object, which provides access to the values within the .ini file in use.
config = context.config

# Interpret the config file for Python logging. This line sets up loggers basically.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Dynamically import all models in the db/models folder
package_dir = os.path.join(os.path.dirname(__file__), 'db', 'models')
for (module_loader, name, ispkg) in pkgutil.iter_modules([package_dir]):
    importlib.import_module(f'db.models.{name}')

# add your model's MetaData object here
target_metadata = Base.metadata

# other values from the config, defined by the needs of env.py
def get_url():
    return (
        f"postgresql+psycopg2://{urllib.parse.quote(os.environ['DBUSER'])}:"
        f"{urllib.parse.quote(os.environ['DBPASSWORD'])}@{os.environ['DBHOST']}/"
        f"{os.environ['DBNAME']}?sslmode={os.environ['SSLMODE']}"
    )

config.set_main_option('sqlalchemy.url', get_url())

def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptable
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    """Run migrations in 'online' mode.

    In this scenario we need to create an Engine
    and associate a connection with the context.

    """
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()