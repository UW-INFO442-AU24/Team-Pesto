from fastapi import HTTPException
from sqlalchemy.orm import Session
from db.models.user import User
from ..schemas.auth import UserUpdate
from utils.utils import get_password_hash

def update_user(db: Session, user_update: UserUpdate, user_id: int):
    db_user = db.query(User).filter(User.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user_update.password:
        db_user.hashed_password = get_password_hash(user_update.password)
    if user_update.full_name is not None:
        db_user.full_name = user_update.full_name
    if user_update.email is not None:
        db_user.email = user_update.email
    
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(User).filter(User.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(db_user)
    db.commit()