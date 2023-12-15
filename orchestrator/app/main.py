from fastapi import FastAPI, Request, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import spacy
import logging
import json

app = FastAPI()
# Load spaCy model for semantic analysis
nlp = spacy.load("en_core_web_sm")

# Configure spaCy to use Python's logging system
logger = logging.getLogger("spacy")
logger.setLevel(logging.INFO)  # Set the logging level to capture INFO and abov

# Sample machine learning models
def model_1(query):
    print("Redirecting to Machine Learning Model 1 with query:", query)

def model_2(query):
    print("Redirecting to Machine Learning Model 2 with query:", query)

def model_3(query):
    print("Redirecting to Machine Learning Model 3 with query:", query)


@app.get("/")
async def root():
    return {"message": "Hello World"}

# Configure CORS settings
origins = ["*"]  # Replace "*" with the specific origin(s) you want to allow

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # You can specify HTTP methods you want to allow
    allow_headers=["*"],  # You can specify HTTP headers you want to allow
)

@app.get("/print_request")
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

@app.post("/classify_query")
@app.get("/classify_query")
async def query(request: Request):
    
    body = json.loads(await request.body())
    query = body["query"]
    print(body["query"])
    # return
    # Perform semantic analysis using spaCy
    doc = nlp(query)
    print("received query: ", query)

    # Initialize flags to check for imperative and descriptive elements
    has_imperative = False
    has_descriptive = False

    # Iterate through tokens in the query
    for token in doc:
        if token.dep_ == "ROOT":
            # Check if the root verb is an imperative verb
            if token.tag_ == "VB" or token.tag_ == "VBG" or token.tag_ == "VBP":
                has_imperative = True
            else:
                has_descriptive = True

    # Determine the classification based on flags
    if has_imperative and not has_descriptive:
        print("Imperative Query Asked")
        model_1(query)
        return {"message": "Redirecting to Classification Model."}
    elif has_descriptive and not has_imperative:
        print("Descriptive Question Asked")
        model_2(query)
        return {"message": "Redirecting to Prediction Model."}
    else:
        print("Unable to Classify Query")
        model_3(query)
        return {"message": "Redirecting to Default Model."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.host(app, host="127.0.0.1", port=8000)