from typing import Optional

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
def create_inquiry(inquiry: schemas.InquiryCreate, db: Session = Depends(get_db)):
    crud.create_inquiry(db=db, inquiry=inquiry)
    return 200


@app.delete("/inquiry/{id}")
def delete_inquiry(id: int):
    return ""


@app.get("/inquiry/{id}")
def get_inquiry():
    user = ModelInquiry.get(id)
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