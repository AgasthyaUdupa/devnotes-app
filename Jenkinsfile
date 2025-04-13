pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'devnotes-app' // You can specify a custom Docker image name if needed
    }

    stages {
        stage('Clone Repo') {
            steps {
                // Clone the Git repository from the 'main' branch
                git branch: 'main', url: 'https://github.com/AgasthyaUdupa/devnotes-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                // Build Docker images using docker-compose
                sh 'docker-compose -f docker-compose.yml build'
            }
        }

        stage('Run App') {
            steps {
                // Start the app in detached mode (background)
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }

        stage('Run Tests') {
            steps {
                // Optionally, run tests in the Docker container (if applicable)
                sh 'docker-compose exec backend npm test' // Replace with your actual test command
            }
        }

        stage('Stop App') {
            steps {
                // Optionally, stop the app after testing
                sh 'docker-compose down'
            }
        }
    }

    post {
        always {
            // Clean up Docker containers to avoid dangling ones after each run
            sh 'docker-compose down'
        }
    }
}
