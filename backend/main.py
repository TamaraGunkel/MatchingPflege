from typing import Optional, List

import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from sql_app import crud, models, schemas
from sql_app.database import SessionLocal, engine
from sql_app.models import Inquiry as ModelInquiry
from sql_app.schemas import Inquiry as SchemaInquiry

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

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
        # Todo add check if time already in database
        db_time = crud.create_time(db=db, time=time)
        db_times.append(db_time)

    crud.create_inquiry(db=db, inquiry=inquiry, customer_id=db_customer.id, services=db_services, times=db_times)
    return 200


@app.delete("/inquiry/{id}")
def delete_inquiry(id: int):
    return ""


@app.get("/inquiry/{id}")
def get_inquiry(id: int, db: Session = Depends(get_db)):
    user = crud.get_inquiry(db=db, inquiry_id=id)
    dto = SchemaInquiry(**user).dict()
    return dto


@app.get("/inquiries")
def get_inquiries(page: Optional[int] = 1, page_size:  Optional[int] = 1, district: Optional[str] = None, status: Optional[str] = None):
    return ""

@app.patch("/inquiry/{id}/data_sharing")
def patch_inquiry_data_sharing(id: int):
    return ""

@app.patch("/inquiry/{id}")
def patch_inquiry(id: int):
    return ""

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)