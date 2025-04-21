FROM python:3.12-slim-bookworm

RUN apt-get update && apt-get install -y python3 python3-pip

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 5500

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "5500"]