import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from uuid import uuid4
from google import genai
from google.genai import types
from dotenv import load_dotenv


load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

# Configure Gemini client
client = genai.Client(api_key=API_KEY)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify your frontend URL here instead of "*"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# In-memory storage for user sessions
user_chats: Dict[str, Any] = {}


# Request & Response Models
class ChatRequest(BaseModel):
    user_input: str
    session_id: str = None  # Optional: If not provided, a new session is created


class ChatResponse(BaseModel):
    reply: str
    session_id: str  # Returned to keep the session alive on frontend


@app.get("/")
async def home():
    return True


# Endpoint for chatting
@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    # If session_id is not provided, create a new chat session
    if not request.session_id or request.session_id not in user_chats:
        session_id = str(uuid4())
        chat_session = client.chats.create(model="gemini-2.0-flash")
        user_chats[session_id] = chat_session
    else:
        session_id = request.session_id
        chat_session = user_chats[session_id]

    # Send message and get response
    response = chat_session.send_message(request.user_input)

    return ChatResponse(reply=response.text, session_id=session_id)