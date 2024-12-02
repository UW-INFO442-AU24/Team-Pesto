from pydantic import BaseModel
from typing import List
from datetime import datetime

class StoreResponse(BaseModel):
    score: int

    class Config:
        orm_mode = True

class Response(BaseModel):
    id: int
    user_id: int
    score: int
    timestamp: datetime

    class Config:
        orm_mode = True

class SubmitResponse(BaseModel):
    score: int
    response: Response