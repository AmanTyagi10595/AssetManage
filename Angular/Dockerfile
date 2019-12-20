FROM ubuntu:latest
RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get -y install nodejs
RUN mkdir app
COPY ./AssetManag/ /app
RUN npm install -g @angular/cli --unsafe-perm=true --allow-root
WORKDIR /app
EXPOSE 4200
CMD ng serve --host 0.0.0.0
