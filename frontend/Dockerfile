FROM nginx:1.27-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your frontend files
COPY index.html /usr/share/nginx/html/

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
