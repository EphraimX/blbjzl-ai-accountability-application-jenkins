pipeline {
  agent any
  environment {
    VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    FLY_API_TOKEN = credentials('FLY_API_TOKEN')
  }
  stages {
    stage('Build & Deploy Frontend Service'){
      steps {
        dir('frontend'){
          sh 'npm install'
          sh 'npm run build'
          sh 'npx vercel --prod --token $VERCEL_TOKEN --yes'
        }
      }
    }
    stage('Build and Deploy Backend Service'){
      steps {
        dir('backend') {
          
        }
      }
    }
  }
  post {
    success {
      echo 'Pipeline Succeeded'
    }
    failure {
      echo 'Pipeline failed'
    }
  }
}