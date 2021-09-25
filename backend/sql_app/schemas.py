from typing import List, Optional

from datetime import time, timedelta, datetime

from pydantic import BaseModel


class Address(BaseModel):
     street: str
     number: str
     postal_code: str
     city: str
     district: str

     class Config:
         orm_mode = True


class InquiryTimeBase(BaseModel):
    weekday: Optional[str] = None
    time_start: time
    time_end: time


class InquiryBase(BaseModel):
    address: Address
    level_of_care: int
    duration: timedelta
    hiring_start: datetime
    hiring_end: datetime
    description: str
    necessary_expertise: List[str] = []
    service_categories: List[str] = []
    contact_opt_in: bool


class ServiceBase(BaseModel):
    name: str

class CustomerBase(BaseModel):
    last_name: str
    first_name: str
    telephone: str
    email: Optional[str] = None


class InquiryCreate(InquiryBase):
    pass


class ServiceCreate(ServiceBase):
    pass


class CustomerCreate(CustomerBase):
    pass


class InquiryTimeCreate(InquiryTimeBase):
    pass


class Inquiry(InquiryBase):
    id: int

    class Config:
        orm_mode = True


class Service(ServiceBase):
    id: int

    class Config:
        orm_mode = True


class Customer(CustomerBase):
    id: int

    class Config:
        orm_mode = True


class InquiryTime(InquiryTimeBase):
    id: int

    class Config:
        orm_mode = True