pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building your project...'
                // Add build commands or scripts here
            }
        }


        stage('Deploy') {

            steps {
                sh 'cp -r * /var/www/react.com/dev'
                sh 'cd /var/www/react.com/dev/public'
                


                sh 'nohup pm2 start &'
                echo 'Running tests....'
                // Add test commands or scripts here
            }
        }

        // Add more stages as needed
    }
}
