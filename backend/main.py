# activate the virtual environment using "source .venv/bin/activate"
# to deactivate use command "deactivate"
# IF YOU INSTALL NEW PACKAGES ACTIVATE THE ENV AGAIN
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}