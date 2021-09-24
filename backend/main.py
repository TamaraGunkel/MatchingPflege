from typing import Optional

from fastapi import FastAPI

from sql_app import crud, models, schemas
from sql_app.database import SessionLocal, engine
from sql_app.models import Inquiry

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/inquiry/")
async def create_inquiry(inquiry: Inquiry, db: Session = Depends(get_db)):
    return inquiry

@app.delete("/inquiry/{id}")
def delete_inquiry(id: int):
    return ""

@app.get("/inquiry/{id}")
def get_inquiry():
    return ""


@app.get("/inquiries")
def get_inquiries(page: Optional[int] = 1, page_size:  Optional[int] = 1, district: Optional[str] = None,
                  status: Optional[str] = None):
    return ""

@app.patch("/inquiry/{id}/data_sharing")
def patch_inquiry_data_sharing(id: int):
    return ""

@app.patch("/inquiry/{id}")
def patch_inquiry(id: int):
    return ""
