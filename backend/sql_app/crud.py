from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, Session

from . import models
from .database import Base


def create_inquiry(db: Session, inquiry: schemas.InquiryCreate):
    db_inquiry = models.Inquiry()
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)
    return db_inquiry


def get_inquiry(db: Session, inquiry_id: int):
    return db.query(models.Inquiry).filter(models.Inquiry.id == inquiry_id).first()


def get_inquiries(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Inquiry).offset(skip).limit(limit).all()
