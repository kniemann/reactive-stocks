FROM azul/zulu-openjdk:latest
MAINTAINER  Kevin Niemann <kevin.niemann@gmail.com>
WORKDIR /
EXPOSE 8080
ADD target/*.jar /usr/local/tomcat/webapps/
CMD java - jar reactive-stocks-backend-1.0-SNAPSHOT.jar