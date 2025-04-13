pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/AgasthyaUdupa/devnotes-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run App') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
