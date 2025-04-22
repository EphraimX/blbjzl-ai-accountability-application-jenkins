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
          sh 'npx vercel --prod --token $VERCEL_TOKEN'
        }
      }
    }
    stage('Deploy'){
      steps {
        echo 'Deploying'
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