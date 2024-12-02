from sqlalchemy.orm import Session
from db.models.mood import Mood
from api.schemas.mood import MoodCreate

def create_user_mood(db: Session, mood: MoodCreate, user_id: int):
    db_mood = Mood(**mood.model_dump(), user_id=user_id)
    db.add(db_mood)
    db.commit()
    db.refresh(db_mood)
    return db_mood

def get_mood_from_user(db: Session, mood_id: int, user_id: int):
    mood = db.query(Mood).filter(Mood.id == mood_id, Mood.user_id == user_id).first()
    return mood

def get_all_moods_by_user(db: Session, user_id: int):
    moods = db.query(Mood).filter(Mood.user_id == user_id).all()
    return moods