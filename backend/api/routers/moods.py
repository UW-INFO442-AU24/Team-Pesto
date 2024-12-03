from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import date, datetime, timedelta

from api.crud import mood as crud_mood
from api.schemas.mood import Mood, MoodCreate
from db.db_setup import get_db
from db.models.user import User
from utils.utils import get_current_active_user

router = APIRouter()

# Make sure that only users that are logged in can change and read moods
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
def read_all_moods_for_user(limit: Optional[int] = 5, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return crud_mood.get_all_moods_by_user(db=db, user_id=current_user.id, limit=limit)

@router.get("/moods/latest/", response_model=Mood)
def read_latest_mood_for_day(day: date, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    mood = crud_mood.get_latest_mood_for_day(db=db, user_id=current_user.id, day=day)
    if not mood:
        return Mood(id=0, user_id=current_user.id, mood=0, timestamp=datetime.combine(day, datetime.min.time()))
    return mood
    
@router.get("/moods/latest_week/", response_model=List[Mood])
def read_latest_moods_for_week(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    today = datetime.today().date()
    week_days = [today - timedelta(days=i) for i in range(7)]
    moods = []
    for day in week_days:
        mood = crud_mood.get_latest_mood_for_day(db=db, user_id=current_user.id, day=day)
        if mood:
            moods.append(mood)
        else:
            moods.append(Mood(id=0, user_id=current_user.id, mood=0, timestamp=datetime.combine(day, datetime.min.time())))
    return moods

@router.get("/moods/range/", response_model=List[Mood])
def read_moods_for_date_range(start: date, end: date, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return crud_mood.get_moods_for_date_range(db=db, user_id=current_user.id, start_date=start, end_date=end)