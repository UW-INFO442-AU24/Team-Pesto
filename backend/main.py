# activate the virtual environment using "source .venv/bin/activate"
# to deactivate use command "deactivate"
# IF YOU INSTALL NEW PACKAGES ACTIVATE THE ENV AGAIN

# after installing dependencies, use this command: pip freeze > requirements.txt
from fastapi import FastAPI

from api.users import router

app = FastAPI(
    title="AU24: INFO 442 Team Pesto",
    description="Postpartum Depression Web App",
    version="1.0.0"
)

app.include_router(router)