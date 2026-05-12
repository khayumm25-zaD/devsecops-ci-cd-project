:::writing{variant="standard" id="42681"}
pipeline {
    agent any

    tools {
        nodejs 'nodeJS'
    }

    environment {
        SONAR_SCANNER_HOME = tool 'sonar-scanner'
    }

    stages {

        stage('Check Node Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

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

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh """
                    \$SONAR_SCANNER_HOME/bin/sonar-scanner \
                    -Dsonar.projectKey=DevSecOps-Demo \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://host.docker.internal:9000
                    """
                }
            }
        }
    }
}
:::

---

# IMPORTANT

Do NOT copy:

```text id="jlwm2y"