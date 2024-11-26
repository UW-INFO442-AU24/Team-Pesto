from pydantic import BaseModel

class MoodBase(BaseModel):
    mood: int

class MoodCreate(MoodBase):
    pass

class Mood(MoodBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True