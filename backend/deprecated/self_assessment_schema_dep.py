# from pydantic import BaseModel
# from typing import List

# # question model
# class Question(BaseModel):
#     id: int
#     text: str

#     class Config:
#         orm_mode = True

# # answer model
# class AnswerBase(BaseModel):
#     question_id: int
#     answer: int

# class Answer(AnswerBase):
#     id: int

#     class Config:
#         orm_mode = True

# # response model
# class ResponseBase(BaseModel):
#     answers: List[AnswerBase]

# class ResponseCreate(ResponseBase):
#     pass

# class Response(ResponseBase):
#     id: int

#     class Config:
#         orm_mode = True