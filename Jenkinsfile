 
node(){
    stage('Git checkout') {
        git 'https://github.com/ramakrishna0317/vedikaUI.git'
    }
        
    stage('Install dependencies') {
        sh label: '', script: 'npm install'
        }
        
    stage('Build') {
        sh label: '', script: 'ng build --prod'
        }
  
     stage('Package Build') {
        sh "tar -zcvf angularui_0.1.tar.gz dist/vedikaUI/"
     }
  
  stage('backup artifact in s3 Bucket') {
      sh label: '', script: '''aws s3 cp /var/lib/jenkins/workspace/angular_deployment/angularui_0.1.tar.gz s3://sk123z 
'''
  }

     stage ('deploy to remote'){
       sh label: '', script: 'ssh root@54.167.48.219 "mkdir deploy && chmod 777 deploy && cd /root/deploy && git init && git pull https://github.com/ramakrishna0317/vedikaUI.git"'
       sh label: '', script: 'scp /var/lib/jenkins/workspace/angular_deployment/angularui_0.1.tar.gz root@54.167.48.219:/root/deploy'
       sh label: '', script: 'ssh root@54.167.48.219 "cd /root/deploy && tar -xvzf angularui_0.1.tar.gz && npm install && ng serve --host"'
       
       
     }      
       
}
