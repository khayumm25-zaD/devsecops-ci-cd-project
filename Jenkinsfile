pipeline {
    agent any

    tools {
        nodejs "nodeJS"
    }

    environment {
        SONAR_SCANNER_HOME = tool 'sonar-scanner'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }