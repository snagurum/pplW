FROM node:12-alpine as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
RUN mkdir -p /app/dist/ppbl
COPY . /app
RUN npm run build
# used for debugging build resource in node.
#RUN file="$(ls -1 /app)" && echo $file
#RUN file="$(ls -1 /app/dist)" && echo $file
#RUN file="$(ls -1 /app/dist/ppbl)" && echo $file

#step 2
FROM nginx:1.17.1-alpine

#used for debugging
#RUN cat /etc/nginx/conf.d/default.conf 
RUN rm /etc/nginx/conf.d/*.conf
COPY nginx.conf /etc/nginx/conf.d
#debug step
RUN cat /etc/nginx/conf.d/nginx.conf
COPY --from=build-step /app/dist/ppbl /etc/nginx/html

