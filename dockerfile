# -------- Build stage --------
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Build SSR app
RUN npm run build -- --configuration production --project my-angular-app

# -------- Runtime stage --------
FROM nginx:alpine


COPY --from=build /app/dist/my-angular-app/browser /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]