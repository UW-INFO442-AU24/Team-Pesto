from pydantic import BaseModel
from datetime import datetime

class MoodBase(BaseModel):
    mood: int

class MoodCreate(MoodBase):
    pass

class Mood(MoodBase):
    id: int
    user_id: int
    timestamp: datetime

    class Config:
        orm_mode = True