pipeline {

  agent any

  environment {
    VERCEL_TOKEN = credentials('VERCEL_TOKEN')
    FLY_API_TOKEN = credentials('FLY_API_TOKEN')
  }
  
  stages {

    stage('Build & Deploy Frontend Service'){

      when {
                environment name: 'SKIP_TEST', value: 'true' // Only runs if SKIP_TEST is set to 'false'
      }

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
          sh 'curl -L https://fly.io/install.sh | sh'
          sh 'export PATH="$HOME/.fly/bin:$PATH"'
          sh 'flyctl deploy --remote-only'
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