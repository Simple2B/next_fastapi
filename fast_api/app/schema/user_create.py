from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str


class CheckEmailUser(BaseModel):
    email: str


class UserLogin(BaseModel):
    username: str
    password: str
