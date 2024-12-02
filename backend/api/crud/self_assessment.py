from sqlalchemy.orm import Session

from db.models.self_assessment import Response
from api.schemas.self_assessment import Response as ResponseSchema

# crud operations for response
def create_user_response(db: Session, response: ResponseSchema, user_id: int):
    db_response = Response(**response.model_dump(), user_id=user_id)
    db.add(db_response)
    db.commit()
    db.refresh(db_response)
    return db_response

def get_responses(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Response).offset(skip).limit(limit).all()

def get_user_responses(db: Session, user_id: int, skip: int = 0, limit: int = 10):
    return db.query(Response).filter(Response.user_id == user_id).offset(skip).limit(limit).all()