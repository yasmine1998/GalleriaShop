from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship


from .database import Base




class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    gender = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String, index=True)
    address = Column(String, index=True)
    numcard = Column(String, index=True)
    disabled = Column(Boolean, default=False)

    products = relationship("Product", back_populates="owner", cascade="all,delete")

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))
    description = Column(String, index=True)
    price = Column(Float, index=True)
    colors = Column(String, index=True)
    sizes = Column(String, index=True)
    quantity = Column(Integer, index=True)
    date_post = Column(String, index=True)
    
    owner = relationship("User", back_populates="products")
    image = relationship("Image", back_populates="product", cascade="all,delete")


class Image(Base):
    __tablename__ = "images"

    id = Column(Integer, primary_key=True, index=True)
    image = Column(String, index=True)
    default = Column(Boolean, default=False)
    product_id = Column(Integer, ForeignKey("products.id"))

    product = relationship("Product", back_populates="image")

