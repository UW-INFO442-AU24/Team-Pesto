from sqlalchemy.orm import Session
from db.models.mood import Mood
from api.schemas.mood import MoodCreate

def create_user_mood(db: Session, mood: MoodCreate, user_id: int):
    db_mood = Mood(**mood.dict(), user_id=user_id)
    db.add(db_mood)
    db.commit()
    db.refresh(db_mood)
    return db_mood

def get_moods_by_user(db: Session, user_id: int):
    return db.query(Mood).filter(Mood.user_id == user_id).all()