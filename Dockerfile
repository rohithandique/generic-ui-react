FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --ignore-scripts
COPY src/ ./src/
COPY index.html vite.config.ts tsconfig*.json eslint.config.js ./
RUN npm run build

FROM nginx:alpine

RUN chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/run && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /run
# Copy the built application from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the non-privileged port
EXPOSE 8080

USER nginx

# Start nginx
CMD ["nginx", "-g", "daemon off;"]