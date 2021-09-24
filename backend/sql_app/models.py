from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Time, DateTime
from sqlalchemy.orm import relationship

from sql_app.database import Base


class Custumer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    last_name = Column(String)
    first_name = Column(String)
    telephone = Column(String)
    email = Column(String, unique=True)



class Inquiry(Base):
    __tablename__ = "inquiries"

    customer_id = Column(Integer, ForeignKey("customers.id"))
    
    
    relationship("Custumer")
    

    id = Column(Integer, primary_key=True, index=True)
    address_street = Column(String)
    address_number = Column(String)
    address_postal_code = Column(String)
    address_city = Column(String)
    address_district = Column(String)
    level_of_care = Column(Integer) 
    duration_in_minutes = Column(Integer)
    hiring_start = Column(DateTime)
    hiring_end = Column(DateTime)
    description = Column(String)
    necessary_expertise = Column(String)
    description = Column(String)
    contact_opt_in = Column(Boolean)
    
    services = relationship("Service")
    times = relationship("InquiryTime")
 

class services(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)


class InquiryTime(Base):
    __tablename__ = "inquiry_times"


    id = Column(Integer, primary_key=True, index=True)
    weekday = Column(String)
    time_start_minut = Column(Time)
