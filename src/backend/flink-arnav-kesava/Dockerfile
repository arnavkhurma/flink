# define base docker image
FROM openjdk:17
LABEL maintainer="flink.net"
ADD target/flink-arnav-kesava-0.0.1-SNAPSHOT.jar flink.jar
ENTRYPOINT ["java", "-jar", "flink.jar"]
