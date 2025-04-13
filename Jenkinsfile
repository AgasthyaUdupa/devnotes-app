pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'devnotes-app'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/AgasthyaUdupa/devnotes-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose -f docker-compose.yml build'
            }
        }

        stage('Run App') {
            steps {
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'docker-compose run --rm backend npm test' // <-- better version
            }
        }

        stage('Stop App') {
            steps {
                sh 'docker-compose down'
            }
        }
    }

    post {
        always {
            sh 'docker-compose down'
        }
    }
}
