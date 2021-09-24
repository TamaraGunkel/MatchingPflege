from typing import Optional

from fastapi import FastAPI

app = FastAPI()

@app.post("/inquiry/")
async def create_inquiry(inquiry: Inquiry):
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
