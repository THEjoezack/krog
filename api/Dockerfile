# Stage 1
FROM openjdk:11 as build
WORKDIR /app

# Cool trick for build optimization: https://medium.com/@sairamkrish/docker-for-spring-boot-gradle-java-micro-service-done-the-right-way-2f46231dbc06
COPY build.gradle.kts settings.gradle.kts gradlew gradle /app/

RUN sh /app/gradlew build || return 0
COPY . ./
RUN sh /app/gradlew build

# Stage 2
FROM openjdk:11
WORKDIR APP_HOME=/app
COPY --from=build /app/build/libs/api-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
CMD ["java","-jar", "api-0.0.1-SNAPSHOT.jar"]
