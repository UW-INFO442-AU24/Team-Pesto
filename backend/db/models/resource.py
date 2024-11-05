from sqlalchemy import Column, Integer, String
from sqlalchemy_utils import URLType

from ..db_setup import Base

class Resource(Base):
    """
    Stores resources in table
    """
    __tablename__ = "resources"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String)
    url = Column(URLType, nullable=False)
    resource_type = Column(String, nullable=False)