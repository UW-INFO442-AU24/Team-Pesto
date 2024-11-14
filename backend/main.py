# activate the virtual environment using "source .venv/bin/activate"
# to deactivate use command "deactivate"
# IF YOU INSTALL NEW PACKAGES ACTIVATE THE ENV AGAIN

# after installing dependencies, use this command: pip freeze > requirements.txt
from fastapi import FastAPI
import logging

from api.routers import users, auth, moods, self_assessments
from db.db_setup import engine
from db.models import user, mood, self_assessment, resource

user.Base.metadata.create_all(bind=engine)
mood.Base.metadata.create_all(bind=engine)
self_assessment.Base.metadata.create_all(bind=engine)
resource.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AU24: INFO 442 Team Pesto",
    description="Postpartum Depression Web App",
    version="1.0.0"
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(moods.router)
app.include_router(self_assessments.router)