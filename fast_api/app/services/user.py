from app import schema


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
