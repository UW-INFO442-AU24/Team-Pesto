from sqlalchemy import Column, Integer, String
from sqlalchemy_utils import EmailType, PasswordType
from sqlalchemy.orm import relationship

from ..db_setup import Base

class User(Base):
    """
    User profile
    """
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    full_name = Column(String(255))
    email = Column(EmailType, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    moods = relationship("Mood", back_populates="owner")
    self_assessments = relationship("SelfAssessment", back_populates="owner")