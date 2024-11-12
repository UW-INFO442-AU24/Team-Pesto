from fastapi import APIRouter, Depends, HTTPException
from typing import List
from sqlalchemy.orm import Session
from api.crud import mood as crud_mood
from api.schemas.mood import Mood, MoodCreate
from db.db_setup import get_db
from utils.utils import get_current_active_user

router = APIRouter()

@router.post("/users/{user_id}/moods/", response_model=Mood)
def create_mood_for_user(user_id: int, mood: MoodCreate, db: Session = Depends(get_db)):
    return crud_mood.create_user_mood(db=db, mood=mood, user_id=user_id)

@router.get("/users/{user_id}/moods/", response_model=List[Mood])
def read_moods_for_user(user_id: int, db: Session = Depends(get_db)):
    return crud_mood.get_moods_by_user(db=db, user_id=user_id)