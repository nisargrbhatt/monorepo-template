FROM oven/bun:alpine AS builder
WORKDIR /app
COPY . .
RUN bun install 
RUN bun run build -F backend 
RUN cp ./apps/backend/build/backend ./backend

FROM oven/bun:alpine
WORKDIR /app
COPY --from=builder /app/backend /app/backend
EXPOSE 3000
ENTRYPOINT [ "/app/backend" ]
