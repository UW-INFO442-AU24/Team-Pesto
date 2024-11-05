from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.crud import auth as crud_user
from api.schemas.auth import User, UserCreate
from db.db_setup import get_db
from utils.utils import get_current_active_user

router = APIRouter()

@router.post("/", response_model=User)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = crud_user.get_user(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    return crud_user.create_user(db=db, user=user)

@router.get("/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user