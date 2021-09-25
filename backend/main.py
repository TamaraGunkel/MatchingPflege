from datetime import date
from typing import Optional, List

import uvicorn
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from sql_app import crud, models, schemas
from sql_app.database import SessionLocal, engine
from sql_app.models import Inquiry as ModelInquiry
from sql_app.models import Customer as ModelCustomer
from sql_app.schemas import Inquiry as SchemaInquiry, Address

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins =[
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def inquiry_to_schema(model: ModelInquiry, customer: ModelCustomer):
    return SchemaInquiry(id = model.id, level_of_care = model.level_of_care,
                         description= model.description,
                         contact_opt_in = 1,
                         hiring_start=model.hiring_start,
                         hiring_end=model.hiring_end,
                         duration=10,
                         address=Address(
                             street=model.address_street,
                             number=model.address_number,
                             postal_code=model.address_postal_code,
                             city=model.address_city,
                             district=model.address_district
                         ))


@app.post("/inquiry/")
def create_inquiry(inquiry: schemas.InquiryCreate, customer: schemas.CustomerCreate,
                   services: List[schemas.ServiceCreate],
                   times: List[schemas.InquiryTimeCreate],
                   db: Session = Depends(get_db)):

    db_customer = crud.get_customer(db=db, email=customer.email)
    if not db_customer:
        db_customer = crud.create_customer(db=db, customer=customer)

    db_services = []
    for service in services:
        db_service = crud.get_service(db=db, name=service.name)
        if not db_service:
            db_service = crud.create_service(db=db, service=service)
        db_services.append(db_service)

    db_times = []
    for time in times:
        db_time = crud.get_time(db=db, weekday=time.weekday, time_start=time.time_start, time_end=time.time_end)
        if not db_time:
            db_time = crud.create_time(db=db, time=time)
        db_times.append(db_time)

    crud.create_inquiry(db=db, inquiry=inquiry, customer_id=db_customer.id, services=db_services, times=db_times)
    return 200


@app.delete("/inquiry/{id}")
def delete_inquiry(id: int):
    return ""


@app.get("/inquiry/{id}")
def get_inquiry(id: int, db: Session = Depends(get_db)):
    model = crud.get_inquiry(db=db, inquiry_id=id)
    customer = crud.get_customer_by_id(db=db, customer_id=model.customer_id)
    dto = inquiry_to_schema(model, customer).dict()
    return model


@app.get("/inquiries")
def get_inquiries(page: Optional[int] = 1, page_size:  Optional[int] = 1, district: Optional[str] = None, status: Optional[str] = None, db: Session = Depends(get_db)):
    skip = (page -1) * page_size
    models = crud.get_inquiries(db=db, skip=skip, limit=page_size)
    dto = [inquiry_to_schema(m).json() for m in models]
    return models

@app.patch("/inquiry/{id}/data_sharing")
def patch_inquiry_data_sharing(id: int):
    return ""

@app.patch("/inquiry/{id}")
def patch_inquiry(id: int):
    return ""

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)