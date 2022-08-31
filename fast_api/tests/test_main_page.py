from fastapi import FastAPI
from fastapi.testclient import TestClient

def test_main_page(client: TestClient):
    res = client.get('/')
    assert res
    app: FastAPI = client.app
    assert app.docs_url in res.text
    assert app.redoc_url in res.text
