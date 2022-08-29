from fastapi import HTTPException, status
from app import model, schema


class UserService:
    def user_registration(
        self, user: schema.UserCreate, message: str
    ) -> schema.UserOut:
        return {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "created_at": user.created_at,
            "info_registration": message,
        }
