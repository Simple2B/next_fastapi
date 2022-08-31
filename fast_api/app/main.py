from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from app.router import user, auth
from .config import settings

app = FastAPI(
    title=settings.SERVER_NAME,
    docs_url="/backend/docs",
    redoc_url="/backend/redoc",
    openapi_url="/backend/openapi.json",
)
app.include_router(user.router)
app.include_router(auth.router)

app.mount("/static", StaticFiles(directory="app/static"), name="static")
templates = Jinja2Templates(directory="app/templates")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", response_class=HTMLResponse)
def root(request: Request):
    SAMPLE_ENV_VAR = settings.SAMPLE_ENV_VAR
    # return {"ENV": SAMPLE_ENV_VAR}
    # app.url_path_for
    # return {"Docs": f"http://{app.docs_url}", "Re-Doc": app.redoc_url}
    return templates.TemplateResponse("main.html", {"request": request, "app": app})
