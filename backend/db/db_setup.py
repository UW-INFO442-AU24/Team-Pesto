import urllib.parse
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

def get_connection_uri():

    # Read URI parameters from the environment
    dbhost = os.environ['DBHOST']
    dbname = os.environ['DBNAME']
    dbuser = urllib.parse.quote(os.environ['DBUSER'])
    password = os.environ['DBPASSWORD']
    sslmode = os.environ['SSLMODE']
    db_uri = f"host={dbhost} dbname={dbname} user={dbuser} password={password} sslmode ={sslmode}"
    
    # Construct connection URI
    return db_uri

# Construct SQLAlchemy database URL
SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg2://{urllib.parse.quote(os.environ['DBUSER'])}:
{urllib.parse.quote(os.environ['DBPASSWORD'])}@{os.environ['DBHOST']}/{os.environ['DBNAME']}?sslmode={os.environ['SSLMODE']}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={}, future=True
)

SessionLocal = sessionmaker(
    autocomit=False, autoflush=False, bind=engine, future=True
)

Base = declarative_base()

# DB Utilities
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()