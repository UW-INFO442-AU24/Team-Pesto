from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from api.crud.self_assessment import get_questions, get_question, get_answers, get_answer, get_responses, get_response, create_response
from api.schemas.self_assessment import Question, Answer as AnswerSchema, Response as ResponseSchema, ResponseCreate
from db.models.user import User
from db.db_setup import get_db
from utils.utils import get_current_active_user

router = APIRouter()

# routes for question
@router.get("/questions/", response_model=List[Question])
def read_questions(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    questions = get_questions(db, skip=skip, limit=limit)
    return questions

@router.get("/questions/{question_id}", response_model=Question)
def read_question(question_id: int, db: Session = Depends(get_db)):
    db_question = get_question(db, question_id=question_id)
    if db_question is None:
        raise HTTPException(status_code=404, detail="Question not found")
    return db_question

# routes for answer
@router.get("/answers", response_model=List[AnswerSchema])
def read_answers(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    answers = get_answers(db, skip=skip, limit=limit)
    return answers

@router.get("/answers/{answer_id}", response_model=AnswerSchema)
def read_answer(answer_id: int, db: Session = Depends(get_db)):
    db_answer = get_answer(db, answer_id=answer_id)
    if db_answer is None:
        raise HTTPException(status_code=404, detail="Answer not found")
    return db_answer

# routes for response
@router.get("/responses", response_model=List[ResponseSchema])
def read_responses(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    responses = get_responses(db, skip=skip, limit=limit)
    return responses

@router.get("/responses/{response_id}", response_model=ResponseSchema)
def read_response(response_id: int, db: Session = Depends(get_db)):
    db_response = get_response(db, response_id=response_id)
    if db_response is None:
        raise HTTPException(status_code=404, detail="Response not found")
    return db_response

@router.post("/responses", response_model=ResponseSchema)
def create_new_response(response: ResponseCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    return create_response(db=db, response=response, user_id=current_user.id)
