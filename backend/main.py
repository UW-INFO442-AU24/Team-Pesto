# activate the virtual environment using "source .venv/bin/activate"
# to deactivate use command "deactivate"
# IF YOU INSTALL NEW PACKAGES ACTIVATE THE ENV AGAIN

# after installing dependencies, use this command: pip freeze > requirements.txt
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging

from api.routers import users, auth, moods, self_assessments
from db.db_setup import engine
from db.models import user, mood, self_assessment

user.Base.metadata.create_all(bind=engine)
mood.Base.metadata.create_all(bind=engine)
self_assessment.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AU24: INFO 442 Team Pesto",
    description="Postpartum Depression Web App",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # Development URL
        "https://info-442---team-pesto.web.app",  # Production URL
        "https://info-442---team-pesto.firebaseapp.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.include_router(users.router, prefix="/users")
app.include_router(auth.router)
app.include_router(moods.router)
app.include_router(self_assessments.router)