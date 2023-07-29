#ABOUT this bash script
#CHModed it like this: 	chmod +x run.sh
#execute it doing this: ./run.sh
#have phun!


echo ""
echo "-------------------------------------------------"
#Stops the currently runing container, if there is one
echo "Running: docker stop structurer-docker-www"
docker stop structurer-docker-www
echo "-------------------------------------------------"


echo ""
echo "-------------------------------------------------"
#Deletes the current "brobath-test" docker container
echo "Running: docker container rm structurer-docker-www"
docker container rm structurer-docker-www
echo "-------------------------------------------------"


echo ""
echo "-------------------------------------------------"
echo "Generating JS module system_data.js"
#Generates the sys_data JS module file
#retrieves and stores in a file the last commit id
FILE_NAME="system_data.js"
NL=''
#Someday I ~hope~ know that I will find out how to add a new line in this ¨%$#@

sdj=''
sdj=$sdj'const sys_data = {'$NL
sdj=$sdj'  "git_commit_id": "'$(git rev-parse --short HEAD)'",'$NL
sdj=$sdj'  "name":          "structurer-docker-www"'${NL}
sdj=$sdj'};'$NL
sdj=$sdj'module.exports = sys_data;'

echo $sdj > $FILE_NAME
echo "-------------------------------------------------"


echo ""
echo "-------------------------------------------------"
#To build the docker image:
#NOTE: you must be in the Dockerfile directory with tour terminal
echo "Running: docker build -t structurer_docker_www ."
docker build -t structurer_docker_www .
echo "-------------------------------------------------"

echo ""
echo "-------------------------------------------------"
#To run both naming it and on background:
echo "Running: docker run --name structurer-docker-www -d --publish 7060:7060 structurer_docker_www"
docker run --name structurer-docker-www -d --publish 7060:7060 structurer_docker_www
echo "-------------------------------------------------"

echo ""
echo "-------------------------------------------------"
#Prints the status of the running containers after deploying this one!
echo "Running: docker ps"
docker ps
echo "-------------------------------------------------"


#For accessing the running container, run the following code:
#docker exec -it <container_[id|name]> /bin/bash
#so
#docker exec -it structurer-docker-www /bin/bash

echo ""
echo "-------------------------------------------------"
echo "For accessing it whili it runs on background:"
echo "docker exec -it structurer-docker-www /bin/bash"
echo "-------------------------------------------------"
echo ""
