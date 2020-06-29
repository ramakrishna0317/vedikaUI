 
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
  
     stage ('deploy to remote'){
       sh label: '', script: 'ssh root@54.215.238.170 "mkdir deploy && chmod 777 deploy && cd /root/deploy && git init && git pull https://github.com/ramakrishna0317/vedikaUI.git"'
       sh label: '', script: 'scp /var/lib/jenkins/workspace/angulardeploy/angularui_0.1.tar.gz root@54.215.238.170:/root/deploy'
       sh label: '', script: 'ssh root@54.215.238.170 "cd /root/deploy && tar -xvzf angularui_0.1.tar.gz && npm install && ng serve --host"'
       
       
     }      
       
}
