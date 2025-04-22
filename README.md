# AI Accountability Application (with Jenkins CI/CD)

This is a simple full-stack web application designed for use in DevOps projects. It demonstrates CI/CD best practices, including pipeline automation using **Jenkins**.

## 🛠 Project Structure

```
blbjzl-ai-accountability-application/
├── backend/           # FastAPI service
├── frontend/          # React app
├── Jenkinsfile        # Jenkins pipeline definition
├── gitpod.yml         # Gitpod environment configuration
├── README.md
```

## 🚀 Jenkins CI/CD

This project uses a `Jenkinsfile` to define its CI/CD pipeline, which includes:
- Installing backend and frontend dependencies
- Building and deploying both services

The Jenkinsfile enables automation of the full build-test-deploy lifecycle.

## 🧪 Tech Stack
- **Frontend:** React (TypeScript)
- **Backend:** FastAPI (Python)
- **CI/CD:** Jenkins
- **Dev Environment:** Gitpod

## 📦 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/EphraimX/blbjzl-ai-accountability-application-jenkins.git
   ```

2. Navigate to `backend/` and install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Navigate to `frontend/` and install Node packages:
   ```bash
   npm install
   ```

4. You can run both services locally or integrate them into your Jenkins pipeline for automated deployment.

## 📌 Note
This project serves as a base for testing and deploying AI-related apps with accountability measures using Jenkins.
