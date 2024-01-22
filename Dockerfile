# Stage1:Build the angular app
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the angular app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/food-delivery-app /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off:" ]