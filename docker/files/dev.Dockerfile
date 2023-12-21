FROM node:18-alpine AS development
RUN apk update --no-cache
ARG UID
ARG GID
RUN if getent passwd ${UID} >/dev/null; then \
    deluser $(getent passwd ${UID} | cut -d: -f1); fi
RUN if getent group ${GID} >/dev/null; then \
    delgroup $(getent group ${GID} | cut -d: -f1); fi
RUN addgroup --system --gid ${GID} app-group
RUN adduser --system --disabled-password --home /home/app-user \
    --uid ${UID} --ingroup app-group app-user
USER app-user:app-group
ENV NODE_ENV development
WORKDIR /home/app-user/
COPY --chown=app-user:app-group ./app/package*.json ./
RUN npm i
COPY --chown=app-user:app-group ./app/ ./
EXPOSE 3000