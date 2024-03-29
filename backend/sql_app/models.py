from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Time, DateTime, Table
from sqlalchemy.orm import relationship

from sql_app.database import Base

inquiries_services_table = Table('inquiries_services', Base.metadata, Column('inquiry_id', ForeignKey('inquiries.id')),
                                 Column('service_id', ForeignKey('services.id')))
inquiries_time_table = Table('inquiries_times', Base.metadata, Column('inquiry_id', ForeignKey('inquiries.id')),
                             Column('time_id', ForeignKey('inquiry_times.id')))

class Customer(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)
    last_name = Column(String)
    first_name = Column(String)
    telephone = Column(String)
    email = Column(String, unique=True)



class Inquiry(Base):
    __tablename__ = "inquiries"

    customer_id = Column(Integer, ForeignKey("customers.id"))
    

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
    contact_opt_in = Column(Boolean)
    status = Column(String)

    services = relationship("Service", secondary=inquiries_services_table)
    times = relationship("InquiryTime", secondary=inquiries_time_table)
 

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)


class InquiryTime(Base):
    __tablename__ = "inquiry_times"


    id = Column(Integer, primary_key=True, index=True)
    weekday = Column(String)
    time_start = Column(Time)
    time_end = Column(Time)