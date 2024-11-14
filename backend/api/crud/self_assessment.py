from sqlalchemy.orm import Session
from typing import List

from db.models.self_assessment import Question, Answer, Response
from schemas.self_assessment import Question as QuestionSchema, Answer as AnswerSchema, Response as ResponseSchema, ResponseCreate

# crud operations for question
def get_questions(db: Session, skip: int = 0, limit: int = 10) -> List[QuestionSchema]:
    return db.query(Question).offset(skip).limit(limit).all()

def get_question(db: Session, question_id: int) -> QuestionSchema:
    return db.query(Question).filter(Question.id == question_id).first()

# crud operations for answer
def get_answers(db: Session, skip: int = 0, limit: int = 10) -> List[AnswerSchema]:
    return db.query(Answer).offset(skip).limit(limit).all()

def get_answer(db: Session, answer_id: int) -> AnswerSchema:
    return db.query(Answer).filter(Answer.id == answer_id).first()

# crud operations for response
def get_responses(db: Session, skip: int = 0, limit: int = 10) -> List[ResponseSchema]:
    return db.query(Response).offset(skip).limit(limit).all()

def get_response(db: Session, response_id: int) -> ResponseSchema:
    return db.query(Response).filter(Response.id == response_id).first()

def create_response(db: Session, response: ResponseCreate) -> Response:
    db_response = Response(user_id=response.user_id)
    db.add(db_response)
    db.commit()
    db.refresh(db_response)

    for answer in response.answers:
        db_answer = Answer(
            question_id=answer.question_id,
            answer=answer.answer,
            response_id=db_response.id
        )
        db.add(db_answer)
    db.commit()

    return db_response
