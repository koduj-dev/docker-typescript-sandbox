FROM node:21

WORKDIR /app

# TypeScript + Vite installation
RUN npm install -g typescript

# Folders creation
RUN mkdir /app/sandbox /app/work

# Default command for docker
CMD ["tail", "-f", "/dev/null"]