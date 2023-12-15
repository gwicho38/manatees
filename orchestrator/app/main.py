from fastapi import FastAPI, Request

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/print_request")
async def print_request(request: Request):
    """
    Endpoint to print the request object sent by the client.
    """
    # Accessing the request object
    request_dict = {
        "method": request.method,
        "url": str(request.url),
        "headers": dict(request.headers),
        "query_params": dict(request.query_params),
        "client": {
            "host": request.client.host,
            "port": request.client.port,
        },
        "path_params": request.path_params,
        "cookies": request.cookies,
        "body": await request.body(),
    }

    # Printing the request object
    print("Request Object:")
    print(request_dict)

    return {"message": "Request object printed. Check the server logs."}