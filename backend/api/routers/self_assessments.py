from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from api.crud import self_assessment as crud_test
from api.schemas.self_assessment import Question, Answer, Response
from db.db_setup import get_db
from db.models.user import User
from utils.utils import get_current_active_user

router = APIRouter()

