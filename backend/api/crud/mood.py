from sqlalchemy.orm import Session
from sqlalchemy import desc
from datetime import date, datetime, timedelta

from db.models.mood import Mood
from api.schemas.mood import MoodCreate
from typing import Optional

def create_user_mood(db: Session, mood: MoodCreate, user_id: int):
    db_mood = Mood(**mood.model_dump(), user_id=user_id)
    db.add(db_mood)
    db.commit()
    db.refresh(db_mood)
    return db_mood

def get_mood_from_user(db: Session, mood_id: int, user_id: int):
    mood = db.query(Mood).filter(Mood.id == mood_id, Mood.user_id == user_id).first()
    return mood

def get_all_moods_by_user(db: Session, user_id: int, limit: Optional[int] = 5):
    return db.query(Mood).filter(Mood.user_id == user_id).order_by(Mood.timestamp.desc()).limit(limit).all()

def get_latest_mood_for_day(db: Session, user_id: int, day: date):
    start_of_day = datetime.combine(day, datetime.min.time())
    end_of_day = start_of_day + timedelta(days=1)
    return db.query(Mood).filter(
        Mood.user_id == user_id,
        Mood.timestamp >= start_of_day,
        Mood.timestamp < end_of_day
    ).order_by(desc(Mood.timestamp)).first()

def get_moods_for_date_range(db: Session, user_id: int, start_date: date, end_date: date):
    return db.query(Mood).filter(Mood.user_id == user_id, Mood.timestamp >= start_date, Mood.timestamp <= end_date).all()