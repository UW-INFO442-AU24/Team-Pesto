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