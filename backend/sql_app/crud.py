from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, Session

from . import models, schemas
from .database import Base


def create_inquiry(db: Session, inquiry: schemas.InquiryCreate):
    hiring_start = ""

    db_inquiry = models.Inquiry(address_street=inquiry.address.street, address_number=inquiry.address.number,
                                address_postal_code=inquiry.address.postal_code, address_city=inquiry.address.city,
                                address_district=inquiry.address.district, level_of_care=inquiry.level_of_care,
                                duration_in_minutes=inquiry.duration.total_seconds() / 60, hiring_start=inquiry.hiring_start,
                                hiring_end=inquiry.hiring_end, description=inquiry.description,
                                necessary_expertise=inquiry.necessary_expertise, contact_opt_in=inquiry.contact_opt_in)
    # todo handle service id, customer id, time id
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)
    return db_inquiry

def create_service(db: Session, service:schemas.ServiceCreate):
    db_service = models.Service()
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service


def get_inquiry(db: Session, inquiry_id: int):
    return db.query(models.Inquiry).filter(models.Inquiry.id == inquiry_id).first()


def get_inquiries(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Inquiry).offset(skip).limit(limit).all()
