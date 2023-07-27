#ABOUT this bash script
#CHModed it like this: 	chmod +x run.sh
#execute it doing this: ./run.sh
#have phun!



#Stops the currently runing container, if there is one
echo "Running: docker stop brobath-docker-www"
docker stop reuso-eco-br-docker-www


#Deletes the current "brobath-test" docker container
echo "Running: docker container rm brobath-docker-www"
docker container rm reuso-eco-br-docker-www


#To build the docker image:
#NOTE: you must be in the Dockerfile directory with tour terminal
echo "Running: docker build -t brobath_docker_www ."
docker build -t reuso_eco_br_docker_www .


#To run naming it but not on background (to see the live console.logs)
#docker run --name brobath-docker-www --publish 5002:5002 brobath_docker_www


#For the creation of the template, when there is not an package.json yet
#(would break the npm install)
#docker run -it --name brobath-docker-www --publish 5002:5002 brobath_docker_www /bin/bash

#To run naming it and on background:
echo "Running: docker run --name brobath-docker-www -d --publish 5002:5002 brobath_docker_www"
docker run --name reuso-eco-br-docker-www -d --publish 7050:7050 reuso_eco_br_docker_www



#Prints the status of the running containers after deploying this one!
echo "Running: docker ps"
docker ps


#For accessing the running container, run the following code:
#docker exec -it <container_id> /bin/bash
