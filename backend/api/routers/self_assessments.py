from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import and_
from typing import List
from datetime import datetime, date, timedelta

from api.schemas.self_assessment import StoreResponse, SubmitResponse
from db.db_setup import get_db
from db.models.user import User
from db.models.self_assessment import Response as ResponseModel
from utils.utils import get_current_active_user

router = APIRouter()

@router.post("/submit/", response_model=SubmitResponse)
def submit_questionnaire(response: StoreResponse, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    db_response = ResponseModel(user_id=current_user.id, score=response.score, timestamp=datetime.utcnow())
    db.add(db_response)
    db.commit()
    db.refresh(db_response)
    return {"score": response.score, "response": db_response}

@router.get("/user-responses/today", response_model=List[SubmitResponse])
def get_today_responses(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    today = date.today()
    responses = db.query(ResponseModel).filter(
        and_(
            ResponseModel.user_id == current_user.id,
            ResponseModel.timestamp >= datetime(today.year, today.month, today.day),
            ResponseModel.timestamp < datetime(today.year, today.month, today.day) + timedelta(days=1)
        )
    ).all()
    return [{"score": response.score, "response": response} for response in responses]

@router.get("/user-responses/", response_model=List[SubmitResponse])
def get_user_responses(db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    responses = db.query(ResponseModel).filter(ResponseModel.user_id)