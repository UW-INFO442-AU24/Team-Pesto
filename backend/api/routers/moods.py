from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from api.crud import mood as crud_mood
from api.schemas.mood import Mood, MoodCreate
from db.db_setup import get_db
from db.models.user import User
from utils.utils import get_current_active_user

router = APIRouter()

# make sure that only users that are logged in can change and read moods
@router.post("/moods/", response_model=Mood)
def create_mood_for_user(mood: MoodCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return crud_mood.create_user_mood(db=db, mood=mood, user_id=current_user.id)

@router.get("/moods/{mood_id}", response_model=Mood)
def read_mood(mood_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    db_mood = crud_mood.get_mood_from_user(db=db, mood_id=mood_id, user_id=current_user.id)
    if db_mood is None:
        raise HTTPException(status_code=404, detail="Mood not found")
    return db_mood

@router.get("/moods/", response_model=List[Mood])
def read_all_moods_for_user(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return crud_mood.get_all_moods_by_user(db=db, user_id=current_user.id)