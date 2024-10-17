# activate the virtual environment using "source .venv/bin/activate"
# to deactivate use command "deactivate"
# IF YOU INSTALL NEW PACKAGES ACTIVATE THE ENV AGAIN

# after installing dependencies, use this command: pip freeze > requirements.txt
from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, declarative_base
from backend.db.database import SessionLocal, engine, Base
from backend.db.models import Mood, User

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}