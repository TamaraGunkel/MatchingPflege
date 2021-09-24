
import datetime
from typing import List, Optional

from datetime import time, timedelta

from pydantic import BaseModel


class Adress(BaseModel):
     street: str
     number: str
     postal_code: str
     city: str
     district: str

class InquiryIterval(BaseModel):
    weekday: Optional[str] = None
    time_start: time
    time_end: time


class InquiryBase(BaseModel):
    last_name: str
    first_name: str
    telephone: str
    email: Optional[str] = None
    address: Adress
    level_of_care: int 
    times: List[InquiryIterval]
    duration: timedelta
    duration_hiring: InquiryIterval
    services: List[str]
    description: str
    necessary_expertise: List[str] = []
    service_categories: List[str] = []
    contact_opt_in: bool


class InquiryCreate(InquiryBase):
    pass


class Inquiry(InquiryBase):
    id: int

    class Config:
        orm_mode = False

