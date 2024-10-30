from typing import Optional, List
import fastapi
from pydantic import BaseModel, EmailStr

router = fastapi.APIRouter()

users = []

class UserBase(BaseModel):
    username: str
    full_name: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

@router.get("/users", response_model=List[User])
async def get_users():
    return users

@router.post("/users")
async def create_user(user: User):
    users.append(user)
    return "Success"

@router.get("/users/{id}")
async def get_user(id: int):
    return { "user": users[id] }