pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/lacastilloh-dev/TaskPro.git'
            }
        }
        stage('Construir imagen Docker') {
            steps {
                script {
                    docker.build("taskpro-web")
                }
            }
        }
        stage('Eliminar contenedor anterior (si existe)') {
            steps {
                script {
                    // Ignora el error si no existe el contenedor
                    sh 'docker rm -f taskpro-container || true'
                }
            }
        }
        stage('Ejecutar contenedor Docker') {
            steps {
                sh "docker run -d -p 8082:80 --name taskpro-container taskpro-web"
            }
        }
    }
}