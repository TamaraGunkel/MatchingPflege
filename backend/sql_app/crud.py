from datetime import time
from typing import List

from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, Session

from . import models, schemas
from .database import Base


def create_inquiry(db: Session, inquiry: schemas.InquiryCreate, customer_id: int, services: List[models.Service], times: List[models.InquiryTime]):
    db_inquiry = models.Inquiry(address_street=inquiry.address.street, address_number=inquiry.address.number,
                                address_postal_code=inquiry.address.postal_code, address_city=inquiry.address.city,
                                address_district=inquiry.address.district, level_of_care=inquiry.level_of_care,
                                duration_in_minutes=inquiry.duration.total_seconds() / 60, hiring_start=inquiry.hiring_start,
                                hiring_end=inquiry.hiring_end, description=inquiry.description,
                                necessary_expertise=inquiry.necessary_expertise, contact_opt_in=inquiry.contact_opt_in,
                                customer_id=customer_id)
    for service in services:
        db_inquiry.services.append(service)
    for time in times:
        db_inquiry.times.append(time)

    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)
    return db_inquiry


def create_service(db: Session, service:schemas.ServiceCreate):
    db_service = models.Service(name=service.name)
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service


def create_time(db: Session, time:schemas.InquiryTimeCreate):
    db_time = models.InquiryTime(weekday=time.weekday, time_start=time.time_start, time_end=time.time_end)
    db.add(db_time)
    db.commit()
    db.refresh(db_time)
    return db_time


def create_customer(db: Session, customer:schemas.CustomerCreate):
    db_customer = models.Customer(last_name=customer.last_name, first_name=customer.first_name,
                                  telephone=customer.telephone, email=customer.email)
    db.add(db_customer)
    db.commit()
    db.refresh(db_customer)
    return db_customer


def get_inquiry(db: Session, inquiry_id: int):
    return db.query(models.Inquiry).filter(models.Inquiry.id == inquiry_id).first()


def get_service(db: Session, name: str):
    return db.query(models.Service).filter(models.Service.name == name).first()


def get_inquiries(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Inquiry).offset(skip).limit(limit).all()


def get_customer(db: Session, email: str):
    return db.query(models.Customer).filter(models.Customer.email == email).first()


def get_time(db: Session, weekday: str, time_start: time, time_end: time):
    return db.query(models.InquiryTime).filter(models.InquiryTime.weekday == weekday,
                                               models.InquiryTime.time_start == time_start,
                                               models.InquiryTime.time_end == time_end).first()


def get_customer_by_id(db: Session, customer_id:int):
    return db.query(models.Customer).filter(models.Customer.id == customer_id).first()