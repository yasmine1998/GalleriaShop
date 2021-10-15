from typing import List, Optional
from pydantic import BaseModel,HttpUrl


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(Token):
    username: Optional[str] = None


class UserBase(BaseModel):
    username: str
    gender: str
    email: str
    phone: str
    address: str
    numcard: str


class UserInDB(UserBase):
    hashed_password: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    disabled: bool

    class Config:
        orm_mode = True

class Image(BaseModel):
    url: HttpUrl
    name: str
    product_id: int
    default: bool

    class Config:
        orm_mode = True

class Product(BaseModel):
    id: int
    owner_id: int
    description: Optional[str] = None
    images: Optional[List[Image]] = None
    price: float
    colors: str
    sizes: str
    quantity: int
    date_post: str

    class Config:
        orm_mode = True