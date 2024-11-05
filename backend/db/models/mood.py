from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship

from ..db_setup import Base

class Mood(Base):
    """
    Individual mood entries in one table
    """
    __tablename__ = "moods"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    mood = Column(Integer, nullable=False)

    owner = relationship("User", back_populates="moods")
