pipeline {
  agent any
  stages {
    stage('Build'){
      steps {
        echo 'Building'
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