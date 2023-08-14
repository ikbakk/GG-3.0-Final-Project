# Stage1: UI Build
FROM node:18.12.1-slim AS frontend
WORKDIR /usr/src
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

# Stage2: API Build
FROM node:18.12.1-slim AS backend
WORKDIR /usr/src
COPY backend/ ./backend/
RUN npm install -g npm@latest
RUN cd backend && npm install && npm run build
RUN ls

# Stage3: Packagign the app
FROM node:18.12.1-slim
WORKDIR /root/
COPY --from=frontend /usr/src/frontend/dist ./frontend/dist
COPY --from=backend /usr/src/backend ./backend
RUN ls

EXPOSE 80

CMD ["npm", "run", "--prefix", "backend", "start"]
