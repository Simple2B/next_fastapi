from fastapi import HTTPException, Depends, APIRouter
from app import model, schema, oauth2
from app.database import get_db
from sqlalchemy.orm import Session
from app.services import UserService

router = APIRouter(prefix="/backend/user", tags=["Users"])


@router.post("/check_email", response_model=str)
def check_email(data: schema.CheckEmailUser, db: Session = Depends(get_db)):
    user = db.query(model.User).filter(model.User.email == data.email).first()
    if not user:
        return "you have to register"
    return "user is already registered"


@router.post("/registration", status_code=201, response_model=schema.UserOut)
def create_user(data_user: schema.UserCreate, db: Session = Depends(get_db)):
    user = db.query(model.User).filter(model.User.email == data_user.email).first()
    user_service = UserService()
    if not user:
        new_user = model.User(**data_user.dict())
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return user_service.user_registration(new_user, "new user registered")

    return user_service.user_registration(user, "user is already registered")


@router.get("/{id}", response_model=schema.UserOut)
def get_user(
    id: int,
    db: Session = Depends(get_db),
    current_user: int = Depends(oauth2.get_current_user),
):
    user = db.query(model.User).get(id)

    if not user:
        raise HTTPException(status_code=404, detail="This user was not found")

    return user
