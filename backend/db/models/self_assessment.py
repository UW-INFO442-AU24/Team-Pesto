<<<<<<< HEAD
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..db_setup import Base

class Question(Base):
    __tablename__ = 'questions'
    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, index=True)

    answers = relationship("Answer", back_populates="question")

class Answer(Base):
    __tablename__ = 'answers'
    id = Column(Integer, primary_key=True, index=True)
    question_id = Column(Integer, ForeignKey('questions.id'))
    response_id = Column(Integer, ForeignKey('responses.id'))
    answer = Column(Integer)

    question = relationship("Question", back_populates="answers")
    response = relationship("Response", back_populates="answers")

class Response(Base):
    __tablename__ = 'responses'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    
    owner = relationship("User", back_populates="self_assessments")
    answers = relationship("Answer", back_populates="response")
=======
from sqlalchemy import Column, Integer, ForeignKey, Date, JSON
from sqlalchemy.orm import relationship

from ..db_setup import Base

class SelfAssessment(Base):
    """
    Individual self assesment entries in one table
    """
    __tablename__ = "self_assessments"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    assessment_date = Column(Date, nullable=False)
    score = Column(Integer, nullable=False)
    responses = Column(JSON, nullable=False)

    owner = relationship("User", back_populates="self_assessments")
>>>>>>> feature/login-form
